import React, { useState, useContext }              from 'react';
import { Fade }                                     from '@material-ui/core';
import CircularProgress                             from '@material-ui/core/CircularProgress';
import HeaderSchoolCard                             from 'components/Admin/HeaderSchoolCard/HeaderSchoolCard';
import InfoSchool                                   from 'components/Admin/SectionsCard/InfoSchool';
import ContactDataSchool                            from 'components/Admin/SectionsCard/ContactDataSchool';
import LocationSchool                               from 'components/Admin/SectionsCard/LocationSchool';
import ResponsibleSchool                            from 'components/Admin/SectionsCard/ResponsibleSchool';
import funcPermissions                              from 'HOF/funcPermissions/funcPermissions';
import { useHookForSchool }                         from 'HOC/useHook/useHookForSchool';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { useStyles }                                from './style';

const SchoolCard = () => {
    const classes = useStyles();
    const { schoolData, responsible_school } = useContext(AdminUserContext);

    const [readonly, setReadonly] = useState(true);

    const {handleChange, formik, loadingPage, municipalOptions,
        loading, initialValue, handleValueSelect, regions,
        searchHandler, loadingSearch, innDadataOptions, optionsType } = useHookForSchool({setReadonly});

    if(loadingPage) {
        return (
            <div className={classes.loadingPage}>
                <CircularProgress disableShrink  size={50}/>;
            </div>
        )
    }
  
    return (
        <Fade in timeout={800}>
            <div className={classes.SchoolCard}>
                <HeaderSchoolCard
                    schoolData={schoolData}
                    readonly={readonly}
                    setReadonly={setReadonly}
                    loading={loading}
                    formik={formik}
                    initialValue={initialValue}
                />

                <InfoSchool
                    disabledInn
                    formik={formik}
                    readonly={readonly}
                    handleValueSelect={handleValueSelect}
                    searchHandler={searchHandler}
                    loadingSearch={loadingSearch}
                    innDadataOptions={innDadataOptions}
                    optionsType={optionsType}
                />

                <ContactDataSchool
                    formik={formik}
                    readonly={readonly}
                />

                <LocationSchool
                    formik={formik}
                    readonly={readonly}
                    handleValueSelect={handleValueSelect}
                    regions={regions}
                    municipalOptions={municipalOptions}
                />

                <ResponsibleSchool
                    responsible_school={responsible_school}
                    formik={formik}
                    readonly={readonly}
                    handleChange={handleChange}
                />
            </div>
        </Fade>
    )
};

export default funcPermissions(SchoolCard, 'admin_school_view');