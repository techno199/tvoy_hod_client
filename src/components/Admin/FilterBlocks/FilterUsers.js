import React, { useState, useContext,
    useEffect, useRef }                             from 'react';
import { useHistory, useLocation }                  from 'react-router-dom';
import Button                                       from '@material-ui/core/Button';
import AddIcon                                      from '@material-ui/icons/Add';
import { FilterIcon }                               from 'svgComponents/FilterIcon';
import Collapse                                     from '@material-ui/core/Collapse';
import Tooltip                                      from '@material-ui/core/Tooltip';
import InputAdmin                                   from 'components/Admin/InputAdmin/InputAdmin';
import SelectCustom                                 from 'components/Admin/SelectCustom/SelectCustom';
import queryString                                  from 'query-string';
import { AdminUserContext }                         from '../../../context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from '../../../context/AuthContext/AuthContext';
import { getBirthDateReverse, getBirthDate }        from 'utils/dateFormat';
import { useHookTerritory }                         from 'HOC/useHook/useHookTerritory';
import { getAdminPermissions }                      from 'utils/adminPermissions';
import { onChangeValidValue }                       from 'utils/onChangeValidValue';
import { useStyles }                                from './style';

const FilterUsers = ({ title, crm }) => {
    const classes = useStyles();
    const { onChangeSearchField, getPermissions } = useContext(AuthContext);
    const { roles, regions } = useContext(AdminUserContext);
    const schoolArr = [{id: 1, title: 'Да'},{id:0, title: 'Нет'}];
    const firstRendering = useRef(false);

    const history = useHistory();
    const { pathname, search } = useLocation();
    let queryStringFilters = queryString.parse(search, {arrayFormat: 'index'});

    const [municipal, setMunicipal] = useState([]);
    const [openCollapse, setOpenCollapse] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [filterState, setFilterState] = useState({
        lastName: queryStringFilters['last_name'] || '',
        firstName:  queryStringFilters['first_name'] || '',
        middleName: queryStringFilters['middle_name'] || '',
        date_birth_from: queryStringFilters['date_birth_from'] ? getBirthDate(queryStringFilters['date_birth_from']) : '',
        date_birth_to: queryStringFilters['date_birth_to'] ? getBirthDate(queryStringFilters['date_birth_to']) : '',
        email_part: queryStringFilters['email_part'] || '',
        role: null,
        school: helperStateFilter('with_shcool', schoolArr),
        region: null,
        municipal: null,
        schoolOptions: [],
        school_address: null
    });

    useHookTerritory({
        filterState,
        setFilterState,
        setMunicipal,
        municipal,
        firstRendering,
        queryStringFilters,
        helperStateFilter
    });

    useEffect(() => {
        if (roles.length && queryStringFilters['role_id'] && !filterState.role) {
            setFilterState(prev => ({...prev, role: helperStateFilter('role_id', roles)}));
        }
        //eslint-disable-next-line
    }, [roles]);

    function helperStateFilter (nameFilter, filterOptions) { //при наличии query-параметра находим в списке селекта нужный элемент
        if (Object.keys(queryStringFilters).length && nameFilter in queryStringFilters) {
            return filterOptions.find(elem => elem.id.toString() === queryStringFilters[nameFilter].toString());
        }
        return null;
    }

    // данные который пойдут в query-параметры для фильтров
    const paramsData = () => {
        let paramsObject = {};
        if(filterState.lastName) paramsObject['last_name'] = filterState.lastName;
        if(filterState.firstName) paramsObject['first_name'] = filterState.firstName;
        if(filterState.middleName) paramsObject['middle_name'] = filterState.middleName;
        if(filterState.date_birth_from) paramsObject['date_birth_from'] = getBirthDateReverse(filterState.date_birth_from);
        if(filterState.date_birth_to) paramsObject['date_birth_to'] = getBirthDateReverse(filterState.date_birth_to);
        if(filterState.email_part) paramsObject['email_part'] = filterState.email_part.toLowerCase();
        if(filterState.role) paramsObject['role_id'] = filterState.role.id;
        if(filterState.school) paramsObject['with_shcool'] = filterState.school.id;
        if(filterState.region) paramsObject['region_id'] = filterState.region.id;
        if(filterState.municipal) paramsObject['mun_unit_id'] = filterState.municipal.id;
        if(filterState.school_address) paramsObject['educational_institution_id'] = filterState.school_address.id;
        return paramsObject;
    };

    //обработчки на инпуты в фильтрах
    const handleBlur = (event) => {
        setFilterState({
            ...filterState,
            [event.target.name]: event.target.value
        })
    };

    //обработчик для селектов фильтра
    const handleValueSelect = (name) => (_, val) => {
        setFilterState({
            ...filterState,
            [name]: val,
        })
    };

    const resetFilter = () => { //сброс фильтров
        setFilterState({
            firstName: '',
            lastName: '',
            middleName: '',
            date_birth_from: '',
            date_birth_to: '',
            email_part: '',
            role: null,
            school: null,
            region: null,
            municipal: null,
            schoolOptions: [],
            school_address: null
        });

        if(search) {
            history.push(`/admin/${!crm ? 'users_bg' : 'users_admin'}`);
        }
    };

    const visibleButtonAdd = () => {
        if(!crm) {
            return getPermissions().includes('admin_bp_users_edit')
        } else {
            return getPermissions().includes('admin_crm_users_edit')
        }
    };

    return (
        <div className={classes.wrapFilterSections}>
            <div className={classes.filterSection}>
                <h2 className={classes.heading}>{title}</h2>

                <div className={classes.rightButton}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.buttonFilter}
                        disableElevation
                        endIcon={<FilterIcon />}
                        onClick={() => setOpenCollapse(!openCollapse)}
                    >
                        Фильтры
                    </Button>

                    {
                        visibleButtonAdd() ?
                            <Button
                                variant="contained"
                                disableElevation
                                className={classes.addUser}
                                endIcon={<AddIcon />}
                                onClick={() => {
                                    history.push({
                                        pathname: `/admin/${!crm ? 'users_bg_add' : 'users_admin_add'}`,
                                        state: {
                                            url: pathname + search
                                        }
                                    })
                                }}
                            >
                                Добавить
                            </Button>  : null
                    }
                </div>
            </div>

            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <div className={classes.wrapFilter}>
                    <div className={classes.sectionFilter}>
                        <InputAdmin
                            value={filterState.lastName}
                            onChange={onChangeValidValue({state: filterState, setState: setFilterState})}
                            name={'lastName'}
                            labelFloat={'Фамилия'}
                        />
                    </div>

                    <div className={classes.sectionFilter}>
                        <InputAdmin
                            value={filterState.firstName}
                            onChange={onChangeValidValue({state: filterState, setState: setFilterState})}
                            name={'firstName'}
                            labelFloat={'Имя'}
                        />
                    </div>

                    <div className={classes.sectionFilter}>
                        <InputAdmin
                            value={filterState.middleName}
                            onChange={onChangeValidValue({state: filterState,  setState: setFilterState})}
                            name={'middleName'}
                            labelFloat={'Отчество'}
                        />
                    </div>

                    {
                        !crm ?
                            <>
                                <div className={classes.sectionFilter}>
                                    <InputAdmin
                                        key={filterState.date_birth_from}
                                        value={filterState.date_birth_from}
                                        onBlur={handleBlur}
                                        name={'date_birth_from'}
                                        labelFloat={'Дата рождения от'}
                                        maskInput={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </div>

                                <div className={classes.sectionFilter}>
                                    <InputAdmin
                                        key={filterState.date_birth_to}
                                        value={filterState.date_birth_to}
                                        onBlur={handleBlur}
                                        name={'date_birth_to'}
                                        labelFloat={'Дата рождения до'}
                                        maskInput={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </div>

                                <div className={classes.sectionFilter}>
                                    <InputAdmin
                                        key={filterState.email_part}
                                        type={'email'}
                                        value={filterState.email_part}
                                        onBlur={handleBlur}
                                        name={'email_part'}
                                        labelFloat={'Электронная почта'}
                                    />
                                </div>
                            </> : null
                    }

                    <div className={classes.sectionFilter}>
                        <SelectCustom
                            readonly
                            value={filterState.role}
                            options={
                                roles.filter(item => {
                                    return crm
                                        ? getAdminPermissions(item.permissions)
                                        : !getAdminPermissions(item.permissions)
                                } )
                            }
                            handleValueSelect={handleValueSelect('role')}
                            label={'Роль'}
                        />
                    </div>

                    {
                        !crm ?
                            <>
                                <div className={classes.sectionFilter}>
                                    <SelectCustom
                                        readonly
                                        value={filterState.school}
                                        options={schoolArr}
                                        handleValueSelect={handleValueSelect('school')}
                                        label={'Образовательное учреждение'}
                                    />
                                </div>

                                <div className={classes.sectionFilter} />

                                <div className={classes.sectionFilter}>
                                    <SelectCustom
                                        value={filterState.region}
                                        options={regions}
                                        handleValueSelect={handleValueSelect('region')}
                                        label={'Регион'}
                                    />
                                </div>

                                <Tooltip
                                    title="Сначала выберите регион"
                                    placement="top-start"
                                    classes={{tooltip: classes.vp_tooltip}}
                                    disableHoverListener={Boolean(filterState.region)}
                                    disableFocusListener={Boolean(filterState.region)}
                                >
                                    <div className={classes.sectionFilter}>
                                        <SelectCustom
                                            disabled={!filterState.region}
                                            value={filterState.municipal}
                                            options={municipal}
                                            handleValueSelect={handleValueSelect('municipal')}
                                            label={'Муниципальное образование'}
                                        />
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    title="Сначала выберите муниципальное образование"
                                    placement="top-start"
                                    classes={{tooltip: classes.vp_tooltip}}
                                    disableHoverListener={Boolean(filterState.municipal)}
                                    disableFocusListener={Boolean(filterState.municipal)}
                                >
                                    <div className={classes.sectionFilter}>
                                        <SelectCustom
                                            disabled={!filterState.municipal}
                                            noArrow
                                            async
                                            value={filterState.school_address}
                                            options={filterState.schoolOptions}
                                            handleValueSelect={handleValueSelect('school_address')}
                                            onChangeSearchField={(event) => {
                                                onChangeSearchField(
                                                    event,
                                                    {
                                                        setLoadingSearch,
                                                        setState: setFilterState,
                                                        params: {
                                                            region_id: filterState.region.id,
                                                            municipal_unit_id: filterState.municipal.id,
                                                        }
                                                    }
                                                )
                                            }}
                                            label={'Наименование / номер учреждения'}
                                            loadingSearch={loadingSearch}
                                        />
                                    </div>
                                </Tooltip>
                            </> : null
                    }

                    <div className={classes.buttonsBlock}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={`${classes.buttonGreen} ${classes.buttons}`}
                            disableElevation
                            onClick={() => {
                                const url = queryString.stringifyUrl({
                                    url: `/admin/${!crm ? 'users_bg' : 'users_admin'}`,
                                    query: paramsData()
                                });
                                history.push(url)
                            }}
                        >
                            Применить
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={`${classes.buttonRed} ${classes.buttons}`}
                            disableElevation
                            onClick={resetFilter}
                        >
                            Сбросить
                        </Button>
                    </div>
                </div>
            </Collapse>
        </div>
    )
} ;

export default FilterUsers;