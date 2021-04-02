import { sendEmailForCode } from 'api/AuthApi'
import { doRequest } from 'hooks/doRequest'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Button from 'UI/Button'
import { Fieldset } from 'UI/Fieldset'
import TextField from 'UI/TextField'
import Title from 'UI/Title'

export const PasswordEnter = ({
    saveToRequestData,
    nextStep
}) => {

    const [passwords, setPasswords] = useState({
        password: '',
        repPassword: ''
    })

    const history = useHistory()

    const handleFieldBlur = (e) => {
        const { name, value } = e.target

        saveToRequestData({ [name]: value })
        setPasswords({
            ...passwords,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        /* const {data, errors} = await doRequest(sendEmailForCode, email) */

        history.push('/lk')
    }

    return (
        <form onSubmit={handleSubmit} style={{}} >
            <Title marginBottom={'40px'} >
                Придумайте пароль
            </Title>

            

            <Button
                type='submit'
                width='100%'
                disabled={passwords.password.replace(/\s/gi, '').length < 6 || passwords.repPassword.replace(/\s/gi, '').length < 6}
            >
                Продолжить
            </Button>
        </form>
    )
}
