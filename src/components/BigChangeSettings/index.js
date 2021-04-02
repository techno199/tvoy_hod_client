import React, { useState, useContext, useEffect, useRef }   from 'react';
import {GRADES, LITERA, TEST_POSITIONS, TEST_ROLES}         from '../../CONSTANTS';
import { Fieldset }                                         from 'UI/Fieldset';
import Button                                               from 'UI/Button';
import { Button as ButtonUi }                               from '@material-ui/core';
import Tooltip                                              from '@material-ui/core/Tooltip';
import AnimateLoader                                        from 'svgComponents/AnimateLoader';
import { EditIconPencil }                                   from 'svgComponents/EditIconPencil';
import { Autocomplete }                                     from 'UI/Autocomplete'
import { AuthContext }                                      from 'context/AuthContext/AuthContext';
import { AdminUserContext }                                 from 'context/AdminUserContext/AdminUserContext';
import {useHookTerritory}                                   from 'HOC/useHook/useHookTerritory';
import { useStyles }                                        from './style';

const BigChangeSettings = ({stateContext, personDataEdit}) => {
    const classes = useStyles();
    const { onChangeSearchField } = useContext(AuthContext);
    const { regions, getRegions } = useContext(AdminUserContext);

    const courseOptions = useRef([
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
        {id: 4, title: '4'}
    ]);

    const firstRender = useRef(false);
    const [visibleAddress, setVisibleAddress] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [ municipalOptions, setMunicipalOptions] = useState([]);
    const [state, setState] = useState({
        role: getRole(),
        region: stateContext?.municipal_unit?.region || null,
        municipal: null,
        school_address: null,
        schoolOptions: [],
        grade: GRADES.find(i => stateContext.educationalInstitutionInfo.grade === i),
        litera: LITERA.find(i => stateContext.educationalInstitutionInfo.letter === i),
        position: TEST_POSITIONS.find(i => stateContext.educationalInstitutionInfo.position === i.id) || null,
        course: courseOptions.current.find(i => stateContext.educationalInstitutionInfo.course === i.id) || null
    });

    //собственный хук по территориям
    useHookTerritory({
        filterState: state,
        setFilterState: setState,
        noFilters: true,
        municipal: municipalOptions,
        setMunicipal: setMunicipalOptions
    });

    useEffect(() => {
        if(!regions.length) {
            getRegions()
        }

        if(regions.length && stateContext.municipal_unit) {
            setState(prev => ({
                ...prev,
                municipal: stateContext.municipal_unit
            }))
        }
        //eslint-disable-next-line
    }, [regions]);

    //подставляет называние школы
    useEffect(() => {
        if(state?.municipal && !firstRender.current) {
            setState(prev => ({
                ...prev,
                school_address: !Array.isArray(stateContext.educational_institution)
                    ? {
                        id: stateContext.educational_institution_info_id,
                        title: `
                            ${stateContext.educational_institution.short_name}, ${stateContext?.educational_institution?.address ? stateContext.educational_institution.address.replace(/[\d]{6},*/g, '') : ''}`.trim()
                    } : null,
            }));
            firstRender.current = true;
        }
        //eslint-disable-next-line
    }, [state.municipal]);

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
                letter: state.litera,
                post: state?.position?.id === 0 ? 0 : (state?.position?.id || ''),
                course: state?.course?.id || null
            },
            nickname: stateContext.nickname,
            phone: stateContext.phone,
            birth_date: stateContext.birth_date,
            gender: stateContext.gender,
            educational_institution_id: state?.school_address?.id === 0 ? 0 : (state?.school_address?.id || '')
        }
    };

    const handleCompleteChange = (name, value) => {
        if (name === 'role') {
            setState(prev => ({
                ...prev,
                [name]: value,
                grade: null,
                litera: null,
                position: null
            }));
            return;
        }
        setState(prev => ({...prev, [name]: value}))
    };

    function getRole() {
        const roles = stateContext.role.map(i => i.role_id);
        return TEST_ROLES.find(i => roles.includes(i.id))
    }

    return (
        <form
            className={classes.personalDataForm}
            onSubmit={(event) => {
                personDataEdit(event, {setLoading, objData: objData})
            }}
        >
            <div className={`${classes.formGroup} ${classes.description}`}>
                <Fieldset
                    title='Кто вы?'
                    description={'Роль для участия в Большой Перемене (редактирование недоступно)'}
                >
                    <Autocomplete
                        disabled
                        noArrow
                        options={TEST_ROLES}
                        value={state.role}
                        onChange={(e, newObj) => handleCompleteChange('role', newObj)}
                        name='bigbreakRole'
                    />
                </Fieldset>
            </div>

            <div className={classes.formGroup} />

            {
                visibleAddress ?
                    <>
                        <div className={`${classes.formGroup}`}>
                            <Fieldset
                                title='Регион'
                            >
                                <Autocomplete
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
                                        disabled={!state.region}
                                        options={municipalOptions}
                                        value={state.municipal}
                                        onChange={(e, newObj) => handleCompleteChange('municipal', newObj)}
                                        name='municipal'
                                    />
                                </Fieldset>
                            </div>
                        </Tooltip>
                    </> : null
            }

            <Tooltip
                title="Сначала выберите муниципальное образование"
                placement="top-start"
                classes={{tooltip: classes.vp_tooltip}}
                disableHoverListener={Boolean(state.municipal) || !visibleAddress}
                disableFocusListener={Boolean(state.municipal) || !visibleAddress}
            >
                <div className={`${classes.formGroup} ${classes.w100}`} style={{position: 'relative'}}>
                    <Fieldset
                        title='Образовательное учреждение'
                    >
                        <Autocomplete
                            disabled={!state.municipal || !visibleAddress}
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
                                            type: state?.role?.type || null
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

                    {
                        !visibleAddress ?
                            <ButtonUi
                                className={classes.buttonEdit}
                                disableElevation
                                disableFocusRipple
                                disableRipple
                                startIcon={<EditIconPencil />}
                                onClick={() => setVisibleAddress(true)}
                            >Изменить</ButtonUi> : null
                    }
                </div>
            </Tooltip>

            {
                state.role?.id === 1
                    ? (
                        <>
                            <div className={classes.formGroup}>
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
                            </div>

                            <div className={classes.formGroup}>
                                <Fieldset title='Литера класса'>
                                    <Autocomplete
                                        value={state.litera}
                                        options={LITERA}
                                        required
                                        onChange={(e, newObj) => handleCompleteChange('litera', newObj)}
                                        getOptionLabel={(o) => o}
                                        name='litera'
                                    />
                                </Fieldset>
                            </div>
                        </>
                    ) : null
            }

            {
                state.role?.id === 2 ? (
                    <div className={classes.formGroup}>
                        <Fieldset title='Должность'>
                            <Autocomplete
                                value={state.position}
                                required
                                options={TEST_POSITIONS}
                                onChange={(e, newObj) => handleCompleteChange('position', newObj)}
                                name='position'
                            />
                        </Fieldset>
                    </div>
                ) : null
            }

            {
                state.role?.id === 9 ? (
                    <div className={classes.formGroup}>
                        <Fieldset title='Курс'>
                            <Autocomplete
                                value={state.course}
                                required
                                options={courseOptions.current}
                                onChange={(e, newObj) => handleCompleteChange('course', newObj)}
                                name='course'
                            />
                        </Fieldset>
                    </div>
                ) : null
            }

            <div className={classes.bottomWrap} style={{width: '100%'}}>
                <Button
                    disabled={loading || !state.school_address}
                    type='submit'
                    width='318px'
                    endIcon={loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                >
                    {loading ? 'Подождите...' : 'Сохранить'}
                </Button>
            </div>
        </form>
    )
};

export default BigChangeSettings;