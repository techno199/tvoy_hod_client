import React                                        from 'react';
import { Fade }                                     from '@material-ui/core';
import HeaderSchoolCard                             from 'components/Admin/HeaderSchoolCard/HeaderSchoolCard';
import InfoSchool                                   from 'components/Admin/SectionsCard/InfoSchool';
import ContactDataSchool                            from 'components/Admin/SectionsCard/ContactDataSchool';
import LocationSchool                               from 'components/Admin/SectionsCard/LocationSchool';
import DialogCustom                                 from 'components/DialogCustom';
import DuplicateInnMessage                          from 'components/Admin/DuplicateInnMessage/DuplicateInnMessage';
import { useHookForSchool }                         from 'HOC/useHook/useHookForSchool';
import funcPermissions                              from 'HOF/funcPermissions/funcPermissions';
import { useStyles }                                from './style';

const AddNewSchoolCard = () => {
    const classes = useStyles();

    const { formik, loading, initialValue, handleValueSelect,
        searchHandler, loadingSearch, innDadataOptions,
        regions, municipalOptions, dialogDuplicate, setDialogDuplicate, optionsType } = useHookForSchool({setReadonly: false});

    return (
        <Fade in timeout={800}>
            <div className={classes.AddNewSchoolCard}>
                <HeaderSchoolCard
                    loading={loading}
                    formik={formik}
                    initialValue={initialValue}
                />

                <InfoSchool
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    searchHandler={searchHandler}
                    loadingSearch={loadingSearch}
                    innDadataOptions={innDadataOptions}
                    optionsType={optionsType}
                />

                <ContactDataSchool
                    formik={formik}
                />

                <LocationSchool
                    formik={formik}
                    handleValueSelect={handleValueSelect}
                    regions={regions}
                    municipalOptions={municipalOptions}
                />

                <DialogCustom
                    widthDialog={498}
                    openDialog={Boolean(dialogDuplicate)}
                    setOpenDialog={setDialogDuplicate}
                    noFullScreen
                    scroll={'body'}
                    disableBackdropClick
                >
                    <DuplicateInnMessage
                        setOpenDialog={setDialogDuplicate}
                        dialogDuplicate={dialogDuplicate}
                    />
                </DialogCustom>
            </div>
        </Fade>
    )
};

export default funcPermissions(AddNewSchoolCard, 'admin_school_edit');