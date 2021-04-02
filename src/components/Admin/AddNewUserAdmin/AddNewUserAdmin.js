import React                            from 'react';
import { Fade }                         from '@material-ui/core';
import HeaderUserCard                   from 'components/Admin/HeaderUserCard/HeaderUserCard';
import SectionsUserInfo                 from 'components/Admin/SectionsCard/SectionsUserInfo';
import SettingBigChangeUserCard         from 'components/Admin/SectionsCard/SettingBigChangeUserCard';
import SectionUserPassword              from 'components/Admin/SectionsCard/SectionUserPassword';
import { useHookForCreateNewUser }      from 'HOC/useHook/useHookForCreateNewUser';
import funcPermissions                  from 'HOF/funcPermissions/funcPermissions';
import { useStyles }                    from './style';

const AddNewUserAdmin = () => {
    const classes = useStyles();

    const {handleValueSelect, handleChange, gendersOptions, loading,
        addNewUserOrEditUser, formik } = useHookForCreateNewUser({adminPage: true});

    return (
        <Fade in timeout={800}>
            <div className={classes.AddNewUserAdmin}>
                <HeaderUserCard
                    readonly={false}
                    adminPage
                    handlerSaveButton={addNewUserOrEditUser}
                    formik={formik}
                    loading={loading}
                    addCard
                />

                <SectionsUserInfo
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    gendersOptions={gendersOptions.current}
                    adminPage
                />

                <SettingBigChangeUserCard
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    handleChange={handleChange}
                    adminPage
                />

                <SectionUserPassword
                    formik={formik}
                />
            </div>
        </Fade>
    )
};

export default funcPermissions(AddNewUserAdmin, 'admin_crm_users_edit');