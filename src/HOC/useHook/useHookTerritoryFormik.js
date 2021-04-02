import { useEffect, useContext, useState } from 'react';
import {AdminUserContext} from 'context/AdminUserContext/AdminUserContext';

export const useHookTerritoryFormik = ({formik, readonly, setState, setMunicipalOptions}) => {
    const { getMunicipal } = useContext(AdminUserContext);

    useEffect(() => {
        if(formik.values.region) {
            if(!readonly) {
                formik.setFieldValue('municipal', null);
                if(formik.values.school_address) formik.setFieldValue('school_address', null);
                if(setState) setState(prev => ({...prev, schoolOptions: []}));
            }
            getMunicipal(formik.values.region.id).then(data => {
                setMunicipalOptions(data)
            })
        }
    }, [formik.values.region]);

    useEffect(() => {
        if(formik.values.municipal && setState) {
            if(!readonly) {
                formik.setFieldValue('school_address', null);
                setState(prev => ({...prev, schoolOptions: []}));
            }
        }
    }, [formik.values.municipal]);
};