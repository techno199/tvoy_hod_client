import React, { useState, useContext } from 'react';
import { Fieldset } from 'UI/Fieldset';
import TextField from 'UI/TextField';
import Button from 'UI/Button';
import AnimateLoader from 'svgComponents/AnimateLoader';
import { useStyles } from './style';
import {AuthContext} from '../../context/AuthContext/AuthContext';
import {callToast} from '../../utils/callToast';

const EditPasswordStepTwo = ({ setStep, handleFieldChange, state, noVlaid, setNoValid }) => {
    const classes = useStyles();
    const { checkingOldPassword } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await checkingOldPassword({old_password: state.oldpassword});
            setLoading(false);
            if(!res) {
                setNoValid(true)
            } else {
                setStep(2)
            }
        } catch (err) {
            setLoading(false);
            callToast({
                message: `[Ошибка]:${err.message}`,
                type: 'error'
            });
            throw err;
        }
    };

    return (
        <div>
            <p className={classes.subText}>
                Чтобы продолжить, введите Ваш текущий пароль
            </p>
            <form onSubmit={submitHandler}>
                <div className={classes.wrapField}>
                    <Fieldset title={'Пароль'}>
                        <TextField
                            name='oldpassword'
                            placeholder=''
                            fullWidth
                            required
                            error={Boolean(state.oldpassword && state?.oldpassword?.length < 8)}
                            helperText={state.oldpassword && state?.oldpassword?.length < 8 ? 'Минимальная длина пароля - 8 символов' : null}
                            onChange={handleFieldChange}
                            value={state.oldpassword}
                            type='password'
                        />
                    </Fieldset>
                </div>

                {
                    noVlaid ?
                        <p className={classes.noValid}>Неправильный пароль</p> : null
                }

                <div className={classes.buttomWrap}>
                    <Button
                        disabled={state?.oldpassword?.length < 8 || loading}
                        type='submit'
                        width='318px'
                        height='42px'
                    >
                        {loading ? 'Подождите...' : 'Продолжить'}
                        {loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default EditPasswordStepTwo;