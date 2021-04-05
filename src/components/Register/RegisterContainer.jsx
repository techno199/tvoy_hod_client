import { useFormik } from 'formik';
import React, { useState } from 'react'
import RegisterView from './RegisterView'
import { REGISTER_SCHEMA } from './_constants/registerSchema';

export default function RegisterContainer(props) {
    const [state, setState] = useState(initialState);

    const {
        customUniversity
    } = state;

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordRepeat: '',
            region: '',
            university: ''
        },
        validationSchema: REGISTER_SCHEMA,
        onSubmit: values => console.log(values)
    })

    return (
        <RegisterView
            formik={formik}
            customUniversity={customUniversity}
            onCustomUniversityRequest={() => setState({ ...state, customUniversity: true })}
            {...props}
        />
    )
}

const initialState = {
    customUniversity: false
}
