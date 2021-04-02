import { restoreNewPassword } from 'api/AuthApi'
import { doRequest } from 'hooks/doRequest'
import React, { useState } from 'react'

import { Fieldset } from 'UI/Fieldset'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import Button from "UI/Button";

export const PasswordEnter = ({
    saveToRequestData,
    nextStep,
    email,
    code
}) => {

    const [passwords, setPasswords] = useState({
        password: '',
        repPassword: ''
    })

    const [errors, setErrors] = useState(false)

    const handleFieldBlur = (e) => {
        const { name, value } = e.target

        saveToRequestData({ [name]: value })
        setPasswords({
            ...passwords,
            [name]: value
        })
    }

    const handleFieldChange = e => {
        const { name, value } = e.target

        setPasswords({
            ...passwords,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { success } = await doRequest(restoreNewPassword, { email, code, new_password: passwords.password })

        if (success) {
            nextStep()
        } else {
            setErrors(true)
        }


    }

    return (
        <form onSubmit={handleSubmit} style={{}} >
            <Title marginBottom={'40px'} >
                Восстановление пароля
            </Title>

            <Fieldset
                title={'Пароль'}
            >
                <TextField
                    name='password'
                    value={passwords.password}
                    error={(passwords.password && passwords?.password?.length < 8) || !!errors}
                    onChange={handleFieldChange}
                    onBlur={handleFieldBlur}
                    required
                    placeholder=' '
                    fullWidth
                    type='password'
                />
            </Fieldset>

            <Fieldset
                title={'Подтвердите пароль'}
            >
                <TextField
                    name='repPassword'
                    value={passwords.repPassword}
                    onChange={handleFieldChange}
                    error={((passwords.repPassword && (passwords.repPassword !== passwords.password)) || (passwords.repPassword && passwords?.repPassword?.length < 8)) || !!errors}
                    onBlur={handleFieldBlur}
                    required
                    placeholder=' '
                    fullWidth
                    type='password'
                />
            </Fieldset>

            <Button
                type='submit'
                width='100%'
                disabled={(passwords?.repPassword !== passwords?.password) || passwords?.repPassword?.length < 8}
            >
                Продолжить
            </Button>
        </form>
    )
}
