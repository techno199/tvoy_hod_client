import React, { useState, useContext, useEffect }       from 'react';
import { Fieldset }                                     from 'UI/Fieldset';
import { Autocomplete }                                 from 'UI/Autocomplete';
import Tooltip                                          from '@material-ui/core/Tooltip';
import Button                                           from '@material-ui/core/Button';
import AnimateLoader                                    from 'svgComponents/AnimateLoader';
import warning                                          from 'images/warning.svg';
import { callToast }                                    from 'utils/callToast';
import { errorHandler }                                 from 'utils/errorHandler';
import { useHookTerritory }                             from 'HOC/useHook/useHookTerritory';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import { AdminUserContext }                             from 'context/AdminUserContext/AdminUserContext';
import { GRADES, TEST_POSITIONS }                       from'../../CONSTANTS';
import { useStyles }                                    from './style';

const NoSchoolData = ({ setOpenDialog }) => {
    const classes = useStyles();
    const { state : stateContext, editUser, onChangeSearchField, logout } = useContext(AuthContext);
    const { regions, getRegions } = useContext(AdminUserContext);
    const courseOptions = React.useRef([
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
        {id: 4, title: '4'}
    ]);

    const [loading, setLoading] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [ municipalOptions, setMunicipalOptions] = useState([]);
    const [state, setState] = useState({
        region: stateContext?.municipal_unit?.region || null,
        municipal: null,
        school_address: null,
        schoolOptions: [],
        grade: GRADES.find(i => stateContext.educationalInstitutionInfo.grade === i) || null,
        position: TEST_POSITIONS.find(i => stateContext.educationalInstitutionInfo.position === i.id) || null,
        course: courseOptions.current.find(i => stateContext.educationalInstitutionInfo.course === i.id) || null,
    });

    useEffect(() => {
        if(!regions.length) {
            getRegions()
        }
        //eslint-disable-next-line
    }, [regions]);

    //собственный хук по территориям
    useHookTerritory({
        filterState: state,
        setFilterState: setState,
        noFilters: true,
        municipal: municipalOptions,
        setMunicipal: setMunicipalOptions
    });

    const objData = {
        user_update: {
            id: stateContext.id,
            name: {
                first_name: stateContext.name.first,
                last_name: stateContext.name.last,
                middle_name: stateContext.name.middle
            },
            educational_institution_info: {
                grade: state.grade,
                letter: stateContext.educationalInstitutionInfo.letter,
                post: state?.position?.id === 0 ? 0 : (state?.position?.id || null),
                course: state.course,
            },
            nickname: stateContext.nickname,
            phone: stateContext.phone,
            birth_date: stateContext.birth_date,
            gender: stateContext.gender,
            educational_institution_id: state?.school_address?.id === 0 ? 0 : (state?.school_address?.id || '')
        }
    };

    const handleCompleteChange = (name, value) => {
        setState(prev => ({...prev, [name]: value}))
    };

    const personDataEdit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);
            await editUser(objData);
            callToast({
                message: 'Данные успешно изменены',
                type: 'success'
            });
            setOpenDialog(false);
        } catch (err) {
            setLoading(false);
            errorHandler(err);
            throw err;
        }
    };

    const disabledButton = () => {
        if(stateContext.role.find(i => i.role_id === 1) && !state.grade) {
            return true;
        }

        if(stateContext.role.find(i => i.role_id === 2) && !state.position) {
            return true
        }

        if(stateContext.role.find(i => i.role_id === 9) && !state.course) {
            return true
        }

        return !Boolean(state.school_address);
    };

    const getType = () => {
        const ids = stateContext.role.map(i => i.role_id);
        if(ids.includes(1) || ids.includes(2)) {
            return 1
        } else if(ids.includes(9)) {
            return 2
        }

        return null
    };

    return (
        <div className={classes.NoSchoolData}>
           <h3 className={classes.heading}>
               Отсутствуют обязательные данные!
               <img src={warning} alt="warning"/>
           </h3>

            <form
                className={classes.personalDataForm}
                onSubmit={personDataEdit}
            >
                <div className={`${classes.formGroup}`}>
                    <Fieldset
                        title='Регион'
                    >
                        <Autocomplete
                            disablePortal
                            options={regions}
                            value={state.region}
                            onChange={(e, newObj) => handleCompleteChange('region', newObj)}
                            name='region'
                        />
                    </Fieldset>
                </div>

                <Tooltip
                    title="Сначала выберите регион"
                    placement="top-start"
                    classes={{tooltip: classes.vp_tooltip}}
                    disableHoverListener={Boolean(state.region)}
                    disableFocusListener={Boolean(state.region)}
                >
                    <div className={`${classes.formGroup}`}>
                        <Fieldset
                            title='Муниципальное образование'
                        >
                            <Autocomplete
                                disablePortal
                                disabled={!state.region}
                                options={municipalOptions}
                                value={state.municipal}
                                onChange={(e, newObj) => handleCompleteChange('municipal', newObj)}
                                name='municipal'
                            />
                        </Fieldset>
                    </div>
                </Tooltip>

                <Tooltip
                    title="Сначала выберите муниципальное образование"
                    placement="top-start"
                    classes={{tooltip: classes.vp_tooltip}}
                    disableHoverListener={Boolean(state.municipal)}
                    disableFocusListener={Boolean(state.municipal)}
                >
                    <div className={`${classes.formGroup} ${classes.w100}`}>
                        <Fieldset
                            title='Образовательное учреждение'
                        >
                            <Autocomplete
                                disabled={!state.municipal}
                                options={state.schoolOptions}
                                value={state.school_address}
                                onChange={(_, newObj) => handleCompleteChange('school_address', newObj)}
                                name="school_address"
                                onChangeSearchField={(event) => {
                                    onChangeSearchField(event,
                                        {
                                            setLoadingSearch,
                                            setState: setState,
                                            params: {
                                                region_id: state.region.id,
                                                municipal_unit_id: state.municipal.id,
                                                type: getType()
                                            }
                                        }
                                    )
                                }}
                                loadingSearch={loadingSearch}
                                async={true}
                                field={'name'}
                                placeholder={'Введите номер образовательного учреждения'}
                            />
                            <a className={classes.noSearchScool} href="mailto:help@bolshayaperemena.online?subject=Не нашли своё учебное заведение">Не нашли своё учебное заведение?</a>
                        </Fieldset>
                    </div>
                </Tooltip>

                {
                    stateContext.role.find(i => i.role_id === 1) && !stateContext.educationalInstitutionInfo.grade ?
                        <div className={`${classes.formGroup} ${classes.w100}`}>
                            <Fieldset title='Класс'>
                                <Autocomplete
                                    value={state.grade}
                                    options={GRADES}
                                    required
                                    onChange={(e, newObj) => handleCompleteChange('grade', newObj)}
                                    getOptionLabel={(o) => String(o)}
                                    name='grade'
                                />
                            </Fieldset>
                        </div> : null
                }

                {
                    stateContext.role.find(i => i.role_id === 2) && !stateContext.educationalInstitutionInfo.position ?
                        <div className={`${classes.formGroup} ${classes.w100}`}>
                            <Fieldset title='Должность'>
                                <Autocomplete
                                    value={state.position}
                                    required
                                    options={TEST_POSITIONS}
                                    onChange={(e, newObj) => handleCompleteChange('position', newObj)}
                                    name='position'
                                />
                            </Fieldset>
                        </div>: null
                }

                {
                    stateContext.role.find(i => i.role_id === 9) && !stateContext.educationalInstitutionInfo.course ?
                        <div className={`${classes.formGroup} ${classes.w100}`}>
                            <Fieldset title='Курс'>
                                <Autocomplete
                                    value={state.course}
                                    required
                                    options={courseOptions.current}
                                    onChange={(e, newObj) => handleCompleteChange('course', newObj)}
                                    name='course'
                                />
                            </Fieldset>
                        </div>: null
                }

                <div className={classes.buttonBlock}>
                    <Button
                        type={'submit'}
                        disabled={disabledButton() || loading}
                        variant="contained"
                        disableElevation
                        className={`${classes.button} ${classes.save}`}
                        endIcon={loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                    >
                        Сохранить
                    </Button>

                    <Button
                        variant="outlined"
                        disableElevation
                        className={`${classes.button} ${classes.logout}`}
                        onClick={logout}
                    >
                        Выйти из профиля
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default NoSchoolData;