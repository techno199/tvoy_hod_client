import { useEffect, useContext, useState } from 'react';
import {AdminUserContext} from 'context/AdminUserContext/AdminUserContext';

export const useHookTerritory = ({ filterState, setFilterState, setMunicipal, municipal, queryStringFilters, helperStateFilter, fieldNameMunicipal = 'mun_unit_id', noFilters = false }) => {
    const { regions, getMunicipal, getSchoolById } = useContext(AdminUserContext);
    const [firstRender, setFirstRender] = useState(false);

    useEffect(() => {
        if(filterState.region) {
            setFilterState(prev => ({
                ...prev,
                municipal: null,
            }));

            getMunicipal(filterState.region.id).then(data => {
                setMunicipal(data)
            })
        }
        //eslint-disable-next-line
    }, [filterState.region]);

    useEffect(() => {
        setFilterState(prev => ({
            ...prev,
            school_address: null,
            schoolOptions: []
        }));
        //eslint-disable-next-line
    }, [filterState.municipal]);

    //для проставления данных в поля при первой загрузке с квери-параметрами
    useEffect(() => {
        if(!noFilters) {
            if (regions.length && queryStringFilters['region_id'] && !filterState.region && !firstRender) {
                setFilterState(prev => ({...prev, region: helperStateFilter('region_id', regions)}));
            }

            if (municipal.length && queryStringFilters[fieldNameMunicipal] && !filterState.municipal && !firstRender) {
                setFilterState(prev => ({...prev, municipal: helperStateFilter(fieldNameMunicipal, municipal)}));
            }

            if (queryStringFilters['educational_institution_id'] && !filterState.school_address && municipal.length && regions.length && !firstRender) {
                getSchoolById(queryStringFilters['educational_institution_id']).then(res => {
                    setFilterState(prev => ({...prev, school_address: {...res, title: res.short_name}}));
                    setFirstRender(true)
                })
            }

            if(regions.length && municipal.length && !queryStringFilters['educational_institution_id']) {
                setFirstRender(true)
            }
        }
        //eslint-disable-next-line
    }, [regions, municipal]);
};