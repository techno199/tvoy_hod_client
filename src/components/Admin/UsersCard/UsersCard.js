import React, { useContext, useState }              from 'react';
import { Redirect }                                 from 'react-router-dom';
import { Fade }                                     from '@material-ui/core';
import CircularProgress                             from '@material-ui/core/CircularProgress';
import HeaderUserCard                               from 'components/Admin/HeaderUserCard/HeaderUserCard';
import SectionsUserInfo                             from 'components/Admin/SectionsCard/SectionsUserInfo';
import SettingBigChangeUserCard                     from 'components/Admin/SectionsCard/SettingBigChangeUserCard';
import LocationUserCard                             from 'components/Admin/SectionsCard/LocationUserCard';
import SectionUserPassword                          from 'components/Admin/SectionsCard/SectionUserPassword';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { useHookForCreateNewUser }                  from 'HOC/useHook/useHookForCreateNewUser';
import { useStyles }                                from './style';

const UsersCard = () => {
    const classes = useStyles();
    const { userData } = useContext(AdminUserContext);
    const { getPermissions } = useContext(AuthContext);

    const [readonly, setReadonly] = useState(true);
    //флаг для определения пользователей БП или админки
    const [adminPage, setAdminPage] = useState(null);

    const {state, setState, handleValueSelect,
        handleChange, gendersOptions, addNewUserOrEditUser,
        formik, loadingPage, loading, initialValue, courseOptions } = useHookForCreateNewUser({ adminPage, setAdminPage, setReadonly });

    if(loadingPage) {
        return (
            <div className={classes.loadingPage}>
                <CircularProgress disableShrink  size={50}/>;
            </div>
        )
    }

    if((!adminPage && !getPermissions().includes('admin_bp_users_show'))
        || (adminPage && !getPermissions().includes('admin_crm_users_show'))) {
        return <Redirect to={'/admin/dashboard'} />
    }

    return (
        <Fade in timeout={800}>
            <div className={classes.UsersCard}>

                <HeaderUserCard
                    formik={formik}
                    userData={userData}
                    setReadonly={setReadonly}
                    readonly={readonly}
                    adminPage={adminPage}
                    handlerSaveButton={addNewUserOrEditUser}
                    loading={loading}
                    initialValue={initialValue}
                />

                <SectionsUserInfo
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    gendersOptions={gendersOptions.current}
                    readonly={readonly}
                    adminPage={adminPage}
                />

                <SettingBigChangeUserCard
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    handleChange={handleChange}
                    readonly={readonly}
                    adminPage={adminPage}
                    courseOptions={courseOptions}
                />

                {
                    !adminPage ?
                        <LocationUserCard
                            formik={formik}
                            state={state}
                            setState={setState}
                            handleValueSelect={handleValueSelect}
                            readonly={readonly}
                            adminPage={adminPage}
                        /> : null
                }

                <SectionUserPassword
                    formik={formik}
                    readonly={readonly}
                />
            </div>
        </Fade>
    )
};

export default UsersCard;