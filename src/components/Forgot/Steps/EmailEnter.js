import React, { useState } from 'react';
import { restoreSendEmailForCode } from 'api/AuthApi';
import { doRequest } from 'hooks/doRequest';
import Button from 'UI/Button';
import { Fieldset } from 'UI/Fieldset';
import TextField from 'UI/TextField';
import Title from 'UI/Title';

export const EmailEnter = ({
    saveToRequestData,
    nextStep,
    setAttemptEmail,
    setSeconds,
    tries_left
}) => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsFetching(true);
        setErrors(false);

        const { success, errors, data } = await doRequest(restoreSendEmailForCode, { email: email.toLowerCase() });
        setIsFetching(false);
        tries_left.current = data?.tries_left;

        if (success) {
            setSeconds(data.seconds);
            if(data.tries_left === 0) {
                setAttemptEmail(false)
            } else {
                setAttemptEmail(true);
            }
            saveToRequestData({ email: email.toLowerCase() });
            nextStep();
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <Title marginBottom={'36px'} >
                Восстановление пароля
            </Title>

            <Fieldset
                title={'Укажите адрес электронной почты'}
                error={errors}
            >
                <TextField
                    value={email}
                    placeholder=' '
                    error={!!errors}
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Fieldset>

            <Button
                type='submit'
                width='100%'
                disabled={email.replace(/\s/gi, '').length < 1 || isFetching}
                loader={isFetching}
            >
                Продолжить
            </Button>
        </form>
    )
};
