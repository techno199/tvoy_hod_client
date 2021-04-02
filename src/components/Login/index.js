import { useTheme } from '@material-ui/core'
import { AuthContext } from 'context/AuthContext/AuthContext'
import { doRequest } from 'hooks/doRequest'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Button from 'UI/Button'
import { Fieldset } from 'UI/Fieldset'
import { SpanLink } from 'UI/SpanLink'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import { LkContext } from 'context/LkContext/LkContext';

export const Login = () => {

    const { login, getMe } = useContext(AuthContext);
    const { clearTests } = useContext(LkContext);

    const theme = useTheme();
    const [errors, setErrors] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const handleForgotClick = () => {
        history.push('/auth/forgot')
    };

    const handleFieldBlur = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (localStorage.getItem('JWT')) {
            history.push('/lk')
        } else {
            setErrors(false);
            setIsFetching(true);

            const { data: responseData } = await doRequest(login, {
                email: data?.email.toLowerCase() || '',
                password: data?.password || ''
            });

            setIsFetching(false);

            if (responseData?.token) {
                setIsFetching(true);
                await doRequest(getMe);
                setIsFetching(false);
                history.push('/lk');
                clearTests();
            } else {
                setErrors(true)
            }
        }
    };

    return (
        <form style={{ width: '100%', paddingBottom: '10%' }} onSubmit={handleSubmit}>
            <Title marginBottom={theme.spacing(5)} >
                Вход
            </Title>

            <Fieldset
                title='Электронная почта'
                noteLink={<SpanLink onClick={handleForgotClick} >Забыли пароль?</SpanLink>}
            >
                <TextField
                    name='email'
                    required
                    placeholder=' '
                    error={errors}
                    fullWidth
                    value={data.email}
                    onChange={handleFieldBlur}
                    type='email'
                />
            </Fieldset>

            <Fieldset
                title='Пароль'
            >
                <TextField
                    name='password'
                    required
                    placeholder=' '
                    error={errors}
                    fullWidth
                    value={data.password}
                    onChange={handleFieldBlur}
                    type='password'
                />
            </Fieldset>

            <Button
                type='submit'
                width='100%'
                disabled={isFetching}
                loader={isFetching}
            >
                Продолжить
            </Button>
        </form>
    )
};
