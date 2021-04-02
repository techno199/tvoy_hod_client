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

    //удаление карточки школы
    const removeUsers = async () => {
        setLoadingButtonDialog(true);
        try {
            const res = await deleteUserCard(idUser);
            if(res.data.result) {
                history.push(adminPage ? '/admin/users_admin' : '/admin/users_bg');
                callToast({
                    message: 'Пользователь удален'
                })
            }
        } catch (err) {
            setLoadingButtonDialog(false);
            errorHandler(err);
            throw err
        }
    };

    //видимость кнопки "Удалить карточку" в зависимости от пермишенов
    const deleteButtonVisible = () => {
        if(adminPage) {
            return getPermissions().includes('admin_crm_users_delete')
        } else {
            return getPermissions().includes('admin_bp_users_delete')
        }
    };

    //видимость кнопки редактировать в зависимости от пермишенов
    const editButtonVisible = () => {
        if(adminPage) {
            return getPermissions().includes('admin_crm_users_edit')
        } else {
            return getPermissions().includes('admin_bp_users_edit')
        }
    };

    //Клик на кнопку отменить
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

    //клик на кнопку "Остаться" в модалке
    const cancelHandlerDialog = () => {
        if(noRoute) {
            noRoute.onCancel();
            setOpenDialog(false);
            setNoRoute(null);
        } else {
            setOpenDialog(false);
        }
    };

    //клик на кнопку "Да, выйти" в модалке
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
                message={'Карточка юзера'}
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
                                Дата регистрации { new Date(userData.date_create.date).toLocaleDateString('ru-RU') }
                            </span>
                        </> :
                        <h3 className={classes.userFio}>Новый пользователь</h3>
                }

                <Breadcrumbs
                    crumbs={[
                        {
                            id: 1,
                            title: adminPage ? 'Пользователи CRM' : 'Пользователи БП',
                            link: location?.state?.url
                                ? location?.state?.url
                                : adminPage
                                    ? '/admin/users_admin'
                                    : '/admin/users_bg',
                        },
                        {
                            id: 2,
                            title: userData ? 'Карточка пользователя' : 'Новый пользователь',
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
                                        Удалить карточку
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
                                        Редактировать
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
                                { loading ? 'Подождите...' : 'Сохранить' }
                            </Button>

                            <Button
                                variant="contained"
                                className={`${classes.button} ${classes.cancelButton}`}
                                onClick={cancelEdit}
                                disableElevation
                            >
                                Отменить
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