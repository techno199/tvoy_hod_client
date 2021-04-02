import { getOldData, sendEmailForCode, sendPhoneCode } from 'api/AuthApi'
import { doRequest } from 'hooks/doRequest'
import React, { useState, useEffect } from 'react'
import Button from 'UI/Button'
import { Fieldset } from 'UI/Fieldset'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import { yaTarget } from 'utils/yaTarget';

export const PhoneCodeEnter = ({
    saveToRequestData,
    email,
    nextStep,
    c
}) => {
    const [clearTimer, setClearTimer] = useState(null)
    const [code, setCode] = useState('');
    const [timer, setTimer] = useState(null);
    const [error, setError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        startingTimer();
        return () => {
            clearInterval(clearTimer)
        }
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(timer === 0) {
            clearInterval(clearTimer);
        }
        //eslint-disable-next-line
    }, [timer]);

    const startingTimer = () => {
        if(clearTimer) {clearInterval(clearTimer);}
        setTimer(60);
        let timer = setInterval(() => {
            setTimer(prev => {
                return prev - 1
            })
        }, 1000);
        setClearTimer(timer);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearInterval(clearTimer);
        yaTarget('registration-confirm');

        saveToRequestData({ code })
        setIsFetching(true)

        const { success } = await doRequest(sendPhoneCode, { email, code })
        setIsFetching(false)

        if (success) {
            const { success: oldDataSuccess, data } = await doRequest(getOldData, { email, code })

            if (oldDataSuccess) {
                saveToRequestData({ oldData: data ? data : null })
            }

            nextStep()
        } else {
            setError(true)
        }
    };

    const codeAgain = async () => {
        startingTimer();
        setError(false);
        try {
            await doRequest(sendEmailForCode, {email})
        } catch (err) {
            throw err
        }
    };

    const renderRepeatCodeAndError = () => {
        if(timer !== 0 && !error) {
            return  <p className={c.repeatCode}>Отправить код повторно ({timer})</p>
        } else {
            return (
                <>
                    { error ? <span style={{color: '#1b1b1b'}} className={c.repeatCode}>Вы неверено ввели код с почты.&nbsp;</span> : null }
                    <span
                        className={`${c.repeatCode} ${c.repeatCodeBlue}`}
                        onClick={codeAgain}
                    >
                        Отправить код повторно
                    </span>
                </>
            )
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <Title marginBottom={'16px'} >
                Введите код подтверждения
            </Title>

            <Fieldset
                description={'На указанную электронную почту было выслано письмо с кодом \nдля подтверждения.'}
                style={{marginBottom: 0}}
            >
                <TextField
                    value={code}
                    name='code'
                    error={Boolean(error?.code || error || '')}
                    placeholder=' '
                    required
                    fullWidth
                    code
                    onChange={(e) => setCode(e?.target?.value || '')}
                />

                { renderRepeatCodeAndError() }
            </Fieldset>

            <div className={c.buttonCodeEnter}>
                <Button
                    type='submit'
                    width='100%'
                    disabled={code.replace(/\s/gi, '').length < 5 || isFetching}
                >
                    Подтвердить
                </Button>
            </div>

        </form>
    )
};
