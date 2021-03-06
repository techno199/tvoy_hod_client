import { sendEmailForCode, getRegions, getUniversities, postRegistration } from 'api/AuthApi'
import { useFormik } from 'formik'
import { doRequest } from 'hooks/doRequest'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { yaTarget } from 'utils/yaTarget';
import { REGISTER_SCHEMA } from '../_constants/registerSchema'
import RegisterMainStep from '../_steps/RegisterMainStep'

export const EmailEnter = ({
    saveToRequestData,
    nextStep
}) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const history = useHistory()
    const location = useLocation();

    const [state, setState] = useState({
        regions: [],
        universities: [],
        selectedRegion: null,
        customUniversity,
        fetchingRegions: false,
        fetchingUniversities: false,
        fetchingForm: false
    });

    const {
        regions,
        universities,
        selectedRegion,
        customUniversity,
        fetchingRegions,
        fetchingUniversities,
        fetchingForm
    } = state;

    const handleSubmit = async formik => {
        yaTarget('registration-proceed');
        formik.handleSubmit(formik);

        if (Object.keys(formik.errors).length === 0) {
            const {
                name,
                surname,
                email,
                password,
                region,
                university
            } = formik.values;

            saveToRequestData(formik.values);
    
            setState(state => ({ ...state, fetchingForm: true }));
    
            const { success } = await doRequest(postRegistration, {
                name,
                surname,
                email,
                password,
                regionId: region.id,
                universityId: university?.id,
                universityCustomName: university
            });
    
            setState(state => ({ ...state, fetchingForm: false }));
    
            if (success) {
                nextStep()
            }else{
                setError(true)
            }
        }
    }

    const getRegionsData = async () => {
        setState(state => ({ ...state, fetchingRegions: true }));
        const regions = await getRegions();
        setState(state => ({ ...state, fetchingRegions: false, regions }));
    }

    const getUniversitiesData = async (regionId) => {
        setState(state => ({ ...state, fetchingUniversities: true }));
        const universities = await getUniversities(regionId);
        setState(state => ({ ...state, fetchingUniversities: false, universities }));
    }
    
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            region: null,
            university: null
        },
        validationSchema: REGISTER_SCHEMA,
    });
    
    const handleRegionChange = region => {
        setState({ ...state, selectedRegion: region });
    }
    
    useEffect(() => {
        getRegionsData();
    }, [])

    useEffect(() => {
        if (selectedRegion) {
            getUniversitiesData(selectedRegion.id);
        }
    }, [selectedRegion])

    return (
        <RegisterMainStep
            formik={formik}
            universities={universities}
            regions={regions}
            customUniversity={customUniversity}
            fetchingForm={fetchingForm}
            fetchingRegions={fetchingRegions}
            fetchingUniversities={fetchingUniversities}
            onRegionChange={handleRegionChange}
            onCustomUniversityRequest={() => setState({...state, customUniversity: true})}
            onSubmit={handleSubmit}
        />
    )
};
