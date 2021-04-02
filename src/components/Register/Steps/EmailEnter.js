import { sendEmailForCode } from 'api/AuthApi'
import { doRequest } from 'hooks/doRequest'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Button from 'UI/Button'
import { Fieldset } from 'UI/Fieldset'
import { SpanLink } from 'UI/SpanLink'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import { yaTarget } from 'utils/yaTarget';

export const EmailEnter = ({
    saveToRequestData,
    nextStep
}) => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const history = useHistory()
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault()
        yaTarget('registration-proceed');
        setError(false)

        saveToRequestData({ email: email.toLowerCase() })

        setIsFetching(true)

        const { success } = await doRequest(sendEmailForCode, {email: email.toLowerCase() });

        setIsFetching(false)

        if (success) {

            nextStep()
        }else{
            setError(true)
        }
    }

    const handleRedirect = () => history.push('/auth/signin');

    const descriptionText = () => {
        if(location?.state?.certificate) {
            return 'Укажите адрес электронной почты, используемый при участии в конкурсе\n "Большая перемена", чтобы получить сертификат'
        }

        return 'Укажите адрес электронной почты'
    };

    return (
        <form onSubmit={handleSubmit} >
            <Title marginBottom={'36px'} >
                {location?.state?.certificate ? 'Получение сертификата' : 'Электронная почта'}
            </Title>

            <Fieldset
                title={location?.state?.certificate ? 'Электронная почта' : ''}
                description={descriptionText()}
                underfield={!!error && <div>Уже зарегистрированы?&nbsp;<SpanLink onClick={handleRedirect} >Войти</SpanLink></div>}
            >
                <TextField
                    autoFocus
                    value={email}
                    name='email'
                    placeholder=' '
                    error={error}
                    required
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                />
            </Fieldset>

            <Button
                type='submit'
                width='100%'
                disabled={email.replace(/\s/gi, '').length < 4 || isFetching}
                loader={isFetching}
            >
                Продолжить
            </Button>
        </form>
    )
};
