import React, { useState, useContext } from 'react';
import { Fieldset } from 'UI/Fieldset';
import TextField from 'UI/TextField';
import Button from 'UI/Button';
import AnimateLoader from 'svgComponents/AnimateLoader';
import { useStyles } from './style';
import {AuthContext} from '../../context/AuthContext/AuthContext';
import {callToast} from '../../utils/callToast';

const EditPasswordStepTwo = ({ state, handleFieldChange, setVisibleEditData }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { editPassword } = useContext(AuthContext);

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await editPassword({
                old_password: state.oldpassword,
                new_password: state.password
            });
            setVisibleEditData(false);
            callToast({
                message: 'Пароль успешно изменен',
                type: 'success'
            });
        } catch (err) {
            callToast({
                message: `[Ошибка]:${err.message}`,
                type: 'error'
            });
            throw err;
        }
    };

    return (
        <div className={classes.wrapStepTwo}>
            <p className={classes.subText}>Придумайте сложный пароль</p>
            <form onSubmit={submitHandler}>
                <div className={classes.wrapField}>
                    <Fieldset title={'Пароль'}>
                        <TextField
                            name='password'
                            placeholder=' '
                            fullWidth
                            required
                            error={Boolean(state.password && state?.password?.length < 8)}
                            helperText={state.password && state?.password?.length < 8 ? 'Минимальная длина пароля - 8 символов' : null}
                            onChange={handleFieldChange}
                            value={state.password}
                            type='password'
                        />
                    </Fieldset>
                </div>

                <div className={classes.wrapField}>
                    <Fieldset
                        title={'Подтвердите новый пароль'}
                    >
                        <TextField
                            name='repPassword'
                            placeholder=''
                            fullWidth
                            error={Boolean(state.repPassword && (state.repPassword !== state.password))}
                            helperText={state.repPassword && (state.repPassword !== state.password) && 'Пароли не совпадают'}
                            required
                            value={state.repPassword}
                            onChange={handleFieldChange}
                            type='password'
                        />
                    </Fieldset>
                </div>

                <div className={classes.buttomWrap}>
                    <Button
                        disabled={loading || state?.password?.length < 8 || state.repPassword !== state.password}
                        type='submit'
                        width='318px'
                        height='42px'
                    >
                        {loading ? 'Подождите...' : 'Сохранить'}
                        {loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default EditPasswordStepTwo;