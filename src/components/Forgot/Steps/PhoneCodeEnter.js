import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { restoreSendPhoneCode } from 'api/AuthApi'
import { doRequest } from 'hooks/doRequest'
import Button from 'UI/Button'
import { Fieldset } from 'UI/Fieldset'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import {restoreSendEmailForCode} from '../../../api/AuthApi';

export const PhoneCodeEnter = ({
    saveToRequestData,
    nextStep,
    email,
    attemptEmail,
    setAttemptEmail,
    seconds,
    tries_left,
    c
}) => {
    let clearTimer = React.useRef(null);
    const history = useHistory();
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [timer, setTimer] = useState(null);
    const [status, setStatus] = useState(null);
    const [visible, setVisible] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(seconds) {
            startingTimer();
        }
        return () => {
            clearInterval(clearTimer.current)
        }
        //eslint-disable-next-line
    }, [seconds]);

    useEffect(() => {
        if(timer === 0) {
           clearInterval(clearTimer.current);
           setVisible(false);
        }
    }, [timer]);

    const startingTimer = () => {
        if(clearTimer.current) {clearInterval(clearTimer.current)}
        setTimer(seconds);

        clearTimer.current = setInterval(() => {
            setTimer(prev => {
                return prev - 1
            })
        }, 1000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setIsFetching(true);

        const data = await doRequest(restoreSendPhoneCode, { email, code });
        setIsFetching(false);

        if (data.success) {
            saveToRequestData({ code });
            nextStep()
        } else {
            setError(data.errors);
            setStatus(data.status);
        }
    };

    const codeAgain = async () => {
        setError(false);
        setStatus(null);
        setVisible(true);

        if(tries_left.current === 1) setLoading(true);
        const data = await doRequest(restoreSendEmailForCode, { email });
        tries_left.current = data?.data?.tries_left;

        if(data.success && data.data.tries_left === 0) {
            setAttemptEmail(false);
        } else if (data.success && data.data.tries_left > 0) {
            startingTimer();
            setAttemptEmail(true);
        }
    };

    const renderError = () => {
        if(!attemptEmail && status === 423) {
            return (
                <span
                    className={c.noAttempt}>
                    Вы исчерпали суточный лимит отправки и ввода кода. Попробуйте завтра.
                </span>
            )
        } else if (status === 423 && attemptEmail) {
            return (
                <span
                    className={c.noAttempt}
                >
                    Вы исчерпали максимальное количество попыток ввода кода.
                </span>
            )
        } else if (error) {
            return (
                <span
                    style={{color: '#1b1b1b'}}
                    className={c.repeatCode}
                >Вы неверено ввели код с почты.&nbsp;</span>
            )
        }
    };

    const renderRepeatCodeAndError = () => {
        if(tries_left.current > 0 && !loading) {
            if((timer !== 0 && attemptEmail) || (visible && attemptEmail)) {
                return (
                    <p
                        className={c.repeatCode}
                        style={{marginTop: error ? 8 : 16}}
                    >Отправить код повторно ({timer > 0 ? timer : seconds})</p>
                )
            } else if (attemptEmail) {
                return (
                    <span
                        className={`${c.repeatCode} ${c.repeatCodeBlue}`}
                        onClick={codeAgain}
                        style={{marginTop: error ? 8 : 16}}
                    >
                    Отправить код повторно
                </span>
                )
            }
        }
    };

    const renderButton = () => {
        if(!attemptEmail && status === 423) {
            return (
                <Button
                    className={c.buttonOutline}
                    variant="outlined"
                    width={'100%'}
                    onClick={() => history.push('/')}
                >
                    Перейти на главную
                </Button>
            )
        }

        return (
            <Button
                type='submit'
                width='100%'
                disabled={code.replace(/\s/gi, '').length < 1 || isFetching || status === 423}
                loader={isFetching}
            >
                Подтвердить
            </Button>
        )
    };

    return (
        <form onSubmit={handleSubmit} >
            <Title marginBottom={'16px'} >
                Восстановление пароля
            </Title>

            <Fieldset
                description={'На указанную электронную почту было выслано письмо с кодом \nдля подтверждения.'}
            >
                <TextField
                    value={code}
                    name='code'
                    placeholder=' '
                    required
                    fullWidth
                    code
                    onChange={(e) => setCode(e.target.value)}
                    error={!!error}
                />
                { renderError () }
                { renderRepeatCodeAndError() }
            </Fieldset>

            { renderButton() }
        </form>
    )
};
