import React, { useState, useContext }              from 'react';
import { useParams, useHistory,
    useLocation, Prompt }                           from 'react-router-dom';
import Button                                       from '@material-ui/core/Button';
import AnimateLoader                                from 'svgComponents/AnimateLoader';
import Breadcrumbs                                  from 'components/Admin/Breadcrumbs/Breadcrumbs';
import DialogCustom                                 from 'components/DialogCustom';
import ConfirmDeleteCard                            from 'components/Admin/ConfirmDeleteCard/ConfirmDeleteCard';
import ReturnBack                                   from 'components/Admin/ReturnBack/ReturnBack';
import { DeleteCart }                               from 'svgComponents/DeleteCart';
import { EditButtonIcon }                           from 'svgComponents/EditButtonIcon';
import { callToast }                                from 'utils/callToast';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { usePreventReload }                         from 'HOC/useHook/usePreventReload';
import { errorHandler }                             from 'utils/errorHandler';
import { useStyles }                                from './style';

const HeaderUserCard = ({ userData, readonly, setReadonly, adminPage, formik, loading, initialValue }) => {
    const classes = useStyles();
    const { getPermissions } = useContext(AuthContext);
    const { deleteUserCard, noRoute, setNoRoute } = useContext(AdminUserContext);

    const { idUser } = useParams();
    const history = useHistory();
    const location = useLocation();

    const [openDialog, setOpenDialog] = useState(false);
    const [loadingButtonDialog, setLoadingButtonDialog] = useState(false);

    const changeState = () => {
        return Boolean(JSON.stringify(formik.initialValues).toLowerCase() !== JSON.stringify(formik.values).toLowerCase())
    };

    usePreventReload(changeState());

    React.useEffect(() => {
        if(noRoute?.openDialog) {
            setOpenDialog(true)
        }
    }, [noRoute]);

    React.useEffect(() => {
       return () => {
           setNoRoute(null)
       }
        //eslint-disable-next-line
    }, []);

    const openCardDialog = () => {
        setOpenDialog(true)
    };

    //???????????????? ???????????????? ??????????
    const removeUsers = async () => {
        setLoadingButtonDialog(true);
        try {
            const res = await deleteUserCard(idUser);
            if(res.data.result) {
                history.push(adminPage ? '/admin/users_admin' : '/admin/users_bg');
                callToast({
                    message: '???????????????????????? ????????????'
                })
            }
        } catch (err) {
            setLoadingButtonDialog(false);
            errorHandler(err);
            throw err
        }
    };

    //?????????????????? ???????????? "?????????????? ????????????????" ?? ?????????????????????? ???? ????????????????????
    const deleteButtonVisible = () => {
        if(adminPage) {
            return getPermissions().includes('admin_crm_users_delete')
        } else {
            return getPermissions().includes('admin_bp_users_delete')
        }
    };

    //?????????????????? ???????????? ?????????????????????????? ?? ?????????????????????? ???? ????????????????????
    const editButtonVisible = () => {
        if(adminPage) {
            return getPermissions().includes('admin_crm_users_edit')
        } else {
            return getPermissions().includes('admin_bp_users_edit')
        }
    };

    //???????? ???? ???????????? ????????????????
    const cancelEdit = () => {
        if(changeState()) {
            openCardDialog();
        } else {
            if(setReadonly) setReadonly(true);
            if(!idUser) {
                history.push(
                    location?.state?.url
                        ?  location?.state?.url
                        :  adminPage ? '/admin/users_admin' : '/admin/users_bg'
                );
            }
        }
    };

    //???????? ???? ???????????? "????????????????" ?? ??????????????
    const cancelHandlerDialog = () => {
        if(noRoute) {
            noRoute.onCancel();
            setOpenDialog(false);
            setNoRoute(null);
        } else {
            setOpenDialog(false);
        }
    };

    //???????? ???? ???????????? "????, ??????????" ?? ??????????????
    const yesGoTo = () => {
        if(!idUser) {
            formik.resetForm();
            setTimeout(() => {
                history.push(
                    location?.state?.url
                        ?  location?.state?.url :
                        adminPage ? '/admin/users_admin' : '/admin/users_bg'
                );
            },0);
            return;
        }

        if(noRoute) {
            noRoute.onOk();
        } else {
            formik.resetForm();
            setReadonly(true);
            setOpenDialog(false)
        }
    };

    return (
        <div className={classes.headerUserCard}>
            <Prompt
                when={changeState()}
                message={'???????????????? ??????????'}
            />
            <div className={classes.leftPart}>
                {
                    userData ?
                        <>
                            <h3 className={classes.userFio}>
                                {`${initialValue.last_name || ''}
                                ${initialValue.first_name || ''}
                                ${initialValue.middle_name || ''}`}
                            </h3>

                            <span className={classes.dataReg}>
                                ???????? ?????????????????????? { new Date(userData.date_create.date).toLocaleDateString('ru-RU') }
                            </span>
                        </> :
                        <h3 className={classes.userFio}>?????????? ????????????????????????</h3>
                }

                <Breadcrumbs
                    crumbs={[
                        {
                            id: 1,
                            title: adminPage ? '???????????????????????? CRM' : '???????????????????????? ????',
                            link: location?.state?.url
                                ? location?.state?.url
                                : adminPage
                                    ? '/admin/users_admin'
                                    : '/admin/users_bg',
                        },
                        {
                            id: 2,
                            title: userData ? '???????????????? ????????????????????????' : '?????????? ????????????????????????',
                            link: false
                        }
                    ]}
                />
            </div>

            <div className={classes.rightPart}>
                {
                    readonly ?
                        <>
                            {
                                deleteButtonVisible() ?
                                    <Button
                                        variant="contained"
                                        className={`${classes.button} ${classes.deleteButton}`}
                                        disableElevation
                                        endIcon={<DeleteCart />}
                                        onClick={openCardDialog}
                                    >
                                        ?????????????? ????????????????
                                    </Button> : null
                            }
                            {
                                editButtonVisible() ?
                                    <Button
                                        variant="contained"
                                        className={`${classes.button} ${classes.editButton}`}
                                        disableElevation
                                        endIcon={<EditButtonIcon />}
                                        onClick={() => setReadonly(false)}
                                    >
                                        ??????????????????????????
                                    </Button> : null
                            }
                        </> :
                        <>
                            <Button
                                disabled={loading}
                                variant="contained"
                                className={`${classes.button} ${classes.saveButton}`}
                                disableElevation
                                onClick={formik.handleSubmit}
                                endIcon={loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                            >
                                { loading ? '??????????????????...' : '??????????????????' }
                            </Button>

                            <Button
                                variant="contained"
                                className={`${classes.button} ${classes.cancelButton}`}
                                onClick={cancelEdit}
                                disableElevation
                            >
                                ????????????????
                            </Button>
                        </>
                }
            </div>

            <DialogCustom
                widthDialog={498}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                disableBackdropClick={noRoute?.openDialog}
                noFullScreen
                scroll={'body'}
            >
                {
                    !readonly ?
                        <ReturnBack
                            loadingButtonDialog={loading}
                            cancelHandler={cancelHandlerDialog}
                            saveEdit={yesGoTo}

                        /> :
                        <ConfirmDeleteCard
                            setOpenDialog={setOpenDialog}
                            deleteCard={removeUsers}
                            loadingButtonDialog={loadingButtonDialog}
                        />
                }
            </DialogCustom>
        </div>
    )
};

export default React.memo(HeaderUserCard);