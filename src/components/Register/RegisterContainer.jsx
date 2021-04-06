import { useFormik } from 'formik';
import React, { useState } from 'react'
import RegisterView from './RegisterView'
import { CONFIRMATION_SCHEMA } from './_constants/confirmationSchema';
import { REGIONS } from './_constants/regions';
import { REGISTER_SCHEMA } from './_constants/registerSchema';
import { REGISTER_STEPS } from './_constants/registerSteps';

export default function RegisterContainer(props) {
    const [state, setState] = useState(initialState);

    const {
        step,
        customUniversity
    } = state;

    const mainStepformik = useFormik({
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

    const confirmationFormik = useFormik({
        initialValues: {
            pin: ''
        },
        validationSchema: CONFIRMATION_SCHEMA
    })

    const handleSubmit = formik => {
        formik.handleSubmit(formik);
        console.log(formik);
        setState({ ...state, step: REGISTER_STEPS.CONFIRMATION });
    }

    return (
        <RegisterView
            step={step}
            mainStepProps={{
                formik: mainStepformik,
                regions: REGIONS,
                customUniversity,
                onCustomUniversityRequest: () => setState({ ...state, customUniversity: true }),
                onSubmit: handleSubmit
            }}
            confirmationProps={{
                formik: confirmationFormik
            }}
        />
    )
}

const initialState = {
    step: REGISTER_STEPS.MAIN,
    customUniversity: false,
}
