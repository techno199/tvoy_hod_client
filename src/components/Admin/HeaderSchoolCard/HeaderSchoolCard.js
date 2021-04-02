import React, { useState, useContext }              from 'react';
import { useLocation, useParams,
    useHistory, Prompt }                            from 'react-router-dom';
import Breadcrumbs                                  from 'components/Admin/Breadcrumbs/Breadcrumbs';
import Button                                       from '@material-ui/core/Button';
import AnimateLoader                                from 'svgComponents/AnimateLoader';
import DialogCustom                                 from 'components/DialogCustom';
import ConfirmDeleteCard                            from 'components/Admin/ConfirmDeleteCard/ConfirmDeleteCard';
import ReturnBack                                   from 'components/Admin/ReturnBack/ReturnBack';
import { DeleteCart }                               from 'svgComponents/DeleteCart';
import { EditButtonIcon }                           from 'svgComponents/EditButtonIcon';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { callToast }                                from 'utils/callToast';
import { usePreventReload }                         from 'HOC/useHook/usePreventReload';
import { errorHandler }                             from 'utils/errorHandler';
import { useStyles }                                from './style';

const HeaderSchoolCard = ({ schoolData, readonly = false, setReadonly, loading, formik }) => {
    const classes = useStyles();

    const location = useLocation();
    const history = useHistory();
    const { idSchool } = useParams();

    const { getPermissions } = useContext(AuthContext);
    const { noRoute, setNoRoute, deleteSchoolCard } = useContext(AdminUserContext);

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
    const removeSchool = async () => {
        setLoadingButtonDialog(true);
        try {
            const res = await deleteSchoolCard(idSchool);
            if(res.data.result) {
                history.push('/admin/school');
                callToast({
                    message: 'Карточка учреждения удалена'
                })
            }
        } catch (err) {
            setLoadingButtonDialog(false);
            errorHandler(err)
            throw err;
        }
    };

    //Клик на кнопку отменить
    const cancelEdit = () => {
        if(changeState()) {
            openCardDialog();
        } else {
            if(setReadonly) setReadonly(true);
            if(!idSchool) {
                history.push(location?.state?.url ?  location?.state?.url : '/admin/school');
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
        if(!idSchool) {
            formik.resetForm();
            setTimeout(() => {
                history.push(location?.state?.url ?  location?.state?.url : '/admin/school')
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
        <div className={classes.mainHeader}>
            <div className={classes.headerUserCard}>
                <Prompt
                    when={changeState()}
                    message={'Карточка школы'}
                />
                <div className={classes.leftPart}>
                    {
                        schoolData ?
                            <>
                                <h3 className={classes.schoolName}>
                                    {schoolData.short_name}
                                </h3>
                            </> :
                            <h3 className={classes.schoolName}>Новое учреждение</h3>
                    }
                </div>

                <div className={classes.rightPart}>
                    {
                        readonly ?
                            <>
                                {
                                    getPermissions().includes('admin_school_delete') ?
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
                                    getPermissions().includes('admin_school_edit') ?
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
                                deleteCard={removeSchool}
                                loadingButtonDialog={loadingButtonDialog}
                            />
                    }
                </DialogCustom>
            </div>

            <Breadcrumbs
                crumbs={[
                    {
                        id: 1,
                        title: 'Образовательные учреждения',
                        link: location?.state?.url ? location.state.url : '/admin/school',
                    },
                    {
                        id: 2,
                        title: schoolData ? schoolData.short_name : 'Новое учреждение',
                        link: false
                    }
                ]}
            />
        </div>

    )
};

export default HeaderSchoolCard;