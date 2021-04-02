import React, { useState, useContext, useEffect }   from 'react';
import Tooltip                                      from '@material-ui/core/Tooltip';
import SelectCustom                                 from 'components/Admin/SelectCustom/SelectCustom';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { getType }                                  from 'utils/getType';
import { useStyles }                                from './style';

const LocationUserCard = ({ state, setState, formik, handleValueSelect, readonly }) => {
    const classes = useStyles();
    const { regions, getMunicipal } = useContext(AdminUserContext);
    const { onChangeSearchField } = useContext(AuthContext);

    const [municipalOptions, setMunicipalOptions] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);

    useEffect(() => {
        if(formik.values.region) {
            if(!readonly) {
                formik.setFieldValue('municipal', null);
                formik.setFieldValue('school_address', null);
                setState(prev => ({...prev, schoolOptions: []}));
            }
            getMunicipal(formik.values.region.id).then(data => {
                setMunicipalOptions(data)
            })
        }
        //eslint-disable-next-line
    }, [formik.values.region]);

    useEffect(() => {
        if(formik.values.municipal) {
            if(!readonly) {
                formik.setFieldValue('school_address', null);
                setState(prev => ({...prev, schoolOptions: []}));
            }
        }
        //eslint-disable-next-line
    }, [formik.values.municipal]);

    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>Образовательное учреждение</h3>

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
                        />
                    </div>
                </Tooltip>

                <Tooltip
                    title="Сначала выберите муниципальное образование"
                    placement="top-start"
                    classes={{tooltip: classes.vp_tooltip}}
                    disableHoverListener={Boolean(formik.values.municipal) || readonly}
                    disableFocusListener={Boolean(formik.values.municipal) || readonly}
                >
                    <div className={classes.sectionFilter}>
                        <SelectCustom
                            disabled={!formik.values.municipal || readonly}
                            noArrow
                            async
                            value={formik.values.school_address}
                            options={state.schoolOptions}
                            handleValueSelect={handleValueSelect('school_address')}
                            onChangeSearchField={(event) => {
                                onChangeSearchField(
                                    event,
                                    {
                                        setLoadingSearch,
                                        setState: setState,
                                        params: {
                                            region_id: formik.values.region.id,
                                            municipal_unit_id: formik.values.municipal.id,
                                            type: getType(formik.values.role?.id)
                                        }
                                    }
                                )
                            }}
                            topLabel={'Наименование / номер учреждения'}
                            loadingSearch={loadingSearch}
                            errorData={formik.touched.school_address && Boolean(formik.errors.school_address)}
                            errorText={formik.touched.school_address && formik.errors.school_address}
                        />
                    </div>
                </Tooltip>
            </div>
        </div>
    )
};

export default LocationUserCard;