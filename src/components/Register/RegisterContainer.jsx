import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import RegisterView from './RegisterView'

export default function RegisterContainer(props) {
    const [state, setState] = useState(initialState);

    const {
        formData,
        customUniversity
    } = state;

    const { control } = useForm();

    const handleFormDataChange = e => {
        const { field, newValue } = e;
    }

    return (
        <RegisterView
            control={control}
            formData={formData}
            customUniversity={customUniversity}
            onChange={handleFormDataChange}
            onCustomUniversityRequest={() => setState({ ...state, customUniversity: true })}
            {...props}
        />
    )
}

const initialState = {
    formData: {
        name: {
            value: ''
        },
        surname: {
            value: ''
        },
        email: {
            value: ''
        },
        region: {
            options: [],
            value: ''
        },
        university: {
            options: [],
            value: ''
        }
    },
    customUniversity: false
}
