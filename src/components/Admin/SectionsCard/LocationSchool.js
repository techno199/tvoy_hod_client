import React                                        from 'react';
import Tooltip                                      from '@material-ui/core/Tooltip';
import InputAdmin                                   from 'components/Admin/InputAdmin/InputAdmin';
import SelectCustom                                 from 'components/Admin/SelectCustom/SelectCustom';
import { useStyles }                                from './style';

const LocationSchool = ({ formik, readonly = false, handleValueSelect, regions, municipalOptions }) => {
    const classes = useStyles();

    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>Местоположение</h3>

            <div className={classes.sectons}>
                <div className={classes.sectionFilter}>
                    <SelectCustom
                        value={formik.values.region}
                        options={regions}
                        handleValueSelect={handleValueSelect('region')}
                        topLabel={'Регион'}
                        disabled={readonly}
                    />
                </div>

                <Tooltip
                    title="Сначала выберите регион"
                    placement="top-start"
                    classes={{tooltip: classes.vp_tooltip}}
                    disableHoverListener={Boolean(formik.values.region) || readonly}
                    disableFocusListener={Boolean(formik.values.region) || readonly}
                >
                    <div className={classes.sectionFilter}>
                        <SelectCustom
                            disabled={!formik.values.region || readonly}
                            value={formik.values.municipal}
                            options={municipalOptions}
                            handleValueSelect={handleValueSelect('municipal')}
                            topLabel={'Муниципальное образование'}
                            errorData={formik.touched.municipal && Boolean(formik.errors.municipal)}
                            errorText={formik.touched.municipal && formik.errors.municipal}
                        />
                    </div>
                </Tooltip>

                <div className={`${classes.sectionFilter} ${classes.w100}`}>
                    <InputAdmin
                        key={formik.values.legal_address}
                        value={formik.values.legal_address}
                        onBlur={formik.handleChange}
                        name={'legal_address'}
                        label={'Адрес юридический'}
                        disabled={readonly}
                        error={formik.touched.legal_address && Boolean(formik.errors.legal_address)}
                        errorText={formik.touched.legal_address && formik.errors.legal_address}
                    />
                </div>
            </div>
        </div>
    )
};

export default LocationSchool;