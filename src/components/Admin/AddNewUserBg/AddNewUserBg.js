import React                            from 'react';
import { Fade }                         from '@material-ui/core';
import HeaderUserCard                   from 'components/Admin/HeaderUserCard/HeaderUserCard';
import SectionsUserInfo                 from 'components/Admin/SectionsCard/SectionsUserInfo';
import SettingBigChangeUserCard         from 'components/Admin/SectionsCard/SettingBigChangeUserCard';
import LocationUserCard                 from 'components/Admin/SectionsCard/LocationUserCard';
import SectionUserPassword              from 'components/Admin/SectionsCard/SectionUserPassword';
import { useHookForCreateNewUser }      from 'HOC/useHook/useHookForCreateNewUser';
import funcPermissions                  from 'HOF/funcPermissions/funcPermissions';
import { useStyles }                    from './style';

const AddNewUserBg = () => {
    const classes = useStyles();

    const {state, setState, handleValueSelect,
        handleChange, gendersOptions, loading,
        addNewUserOrEditUser, formik, courseOptions } = useHookForCreateNewUser({ adminPage: false });

    return (
        <Fade in timeout={800}>
            <div className={classes.AddNewUserBg}>
                <HeaderUserCard
                    readonly={false}
                    adminPage={false}
                    handlerSaveButton={addNewUserOrEditUser}
                    formik={formik}
                    loading={loading}
                />

                <SectionsUserInfo
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    gendersOptions={gendersOptions.current}
                    adminPage={false}
                />

                <SettingBigChangeUserCard
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    handleChange={handleChange}
                    adminPage={false}
                    courseOptions={courseOptions}
                />

                <LocationUserCard
                    formik={formik}
                    state={state}
                    setState={setState}
                    handleValueSelect={handleValueSelect}
                />

                <SectionUserPassword
                    formik={formik}
                />
            </div>
        </Fade>
    )
};

export default funcPermissions(AddNewUserBg, 'admin_bp_users_edit');