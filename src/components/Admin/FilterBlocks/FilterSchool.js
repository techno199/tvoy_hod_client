import React, { useState, useContext }              from 'react';
import { useHistory, useLocation }                  from 'react-router-dom';
import Button                                       from '@material-ui/core/Button';
import AddIcon                                      from '@material-ui/icons/Add';
import { FilterIcon }                               from 'svgComponents/FilterIcon';
import Collapse                                     from '@material-ui/core/Collapse';
import Tooltip                                      from '@material-ui/core/Tooltip';
import InputAdmin                                   from 'components/Admin/InputAdmin/InputAdmin';
import SelectCustom                                 from 'components/Admin/SelectCustom/SelectCustom';
import queryString                                  from 'query-string';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { useHookTerritory }                         from 'HOC/useHook/useHookTerritory';
import { useStyles }                                from './style';

const FilterSchool = () => {
    const classes = useStyles();
    const { onChangeSearchField, getPermissions } = useContext(AuthContext);

    const { regions } = useContext(AdminUserContext);
    const responsibleOptions = [{id: 1, title: 'Да'}, {id: 0, title: 'Нет'}];

    const history = useHistory();
    const { pathname, search } = useLocation();
    let queryStringFilters = queryString.parse(search, {arrayFormat: 'index'});

    const [municipal, setMunicipal] = useState([]);
    const [openCollapse, setOpenCollapse] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [filterState, setFilterState] = useState({
        region: null,
        municipal: null,
        schoolOptions: [],
        school_address: null,
        inn: queryStringFilters['legal_inn'] || '',
        responsible: helperStateFilter('has_responsible', responsibleOptions)
    });

    useHookTerritory({
        filterState,
        setFilterState,
        setMunicipal,
        municipal,
        queryStringFilters,
        helperStateFilter,
        fieldNameMunicipal: 'municipal_unit_id'
    });

    function helperStateFilter (nameFilter, filterOptions) { //при наличии query-параметра находим в списке селекта нужный элемент
        if (Object.keys(queryStringFilters).length && nameFilter in queryStringFilters) {
            return filterOptions.find(elem => elem.id.toString() === queryStringFilters[nameFilter].toString());
        }
        return null;
    }

    // данные который пойдут в query-параметры для фильтров
    const paramsData = () => {
        let paramsObject = {};
        if(filterState.region) paramsObject['region_id'] = filterState.region.id;
        if(filterState.municipal) paramsObject['municipal_unit_id'] = filterState.municipal.id;
        if(filterState.school_address) paramsObject['educational_institution_id'] = filterState.school_address.id;
        if(filterState.inn) paramsObject['legal_inn'] = filterState.inn;
        if(filterState.responsible) paramsObject['has_responsible'] = filterState.responsible.id;
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
            region: null,
            municipal: null,
            schoolOptions: [],
            school_address: null,
            inn: '',
            responsible: null
        });

        if(search) {
            history.push('/admin/school');
        }
    };

    return (
        <div className={classes.wrapFilterSections}>
            <div className={classes.filterSection}>
                <h2 className={classes.heading}>Образовательные учреждения</h2>

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
                        getPermissions().includes('admin_school_view') ?
                            <Button
                                variant="contained"
                                disableElevation
                                className={classes.addUser}
                                endIcon={<AddIcon />}
                                onClick={() => {
                                    history.push({
                                        pathname: '/admin/school_add',
                                        state: {
                                            url: pathname + search
                                        }
                                    })
                                }}
                            >
                                Добавить
                            </Button> : null
                    }
                </div>
            </div>

            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <div className={classes.wrapFilter}>
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

                     <div className={classes.sectionFilter}>
                        <InputAdmin
                            key={filterState.inn}
                            value={filterState.inn}
                            onBlur={handleBlur}
                            name={'inn'}
                            labelFloat={'ИНН(введите 10 цифр)'}
                            maskInput={[/\d/, /\d/, /\d/, /\d/, /\d/,/\d/, /\d/, /\d/, /\d/, /\d/]}
                        />
                    </div>

                    <div className={classes.sectionFilter}>
                        <SelectCustom
                            readonly
                            value={filterState.responsible}
                            options={responsibleOptions}
                            handleValueSelect={handleValueSelect('responsible')}
                            label={'Ответственный'}
                        />
                    </div>

                    <div className={classes.buttonsBlock}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={`${classes.buttonGreen} ${classes.buttons}`}
                            disableElevation
                            onClick={() => {
                                const url = queryString.stringifyUrl({
                                    url: '/admin/school',
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

export default FilterSchool;