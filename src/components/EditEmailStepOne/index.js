import React, { useState } from 'react';
import { Fieldset } from 'UI/Fieldset';
import TextField from 'UI/TextField';
import Button from 'UI/Button';
//import AnimateLoader from 'svgComponents/AnimateLoader';
import { useStyles } from './style';

const EditEmailStepOne = ({ setStep, stateContext }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');

    const submitHandler = (event) => {
      event.preventDefault();
      setStep(2)
    };

    return (
        <div>
            <p className={classes.subText}>Текущая электронная почта {stateContext.email}</p>
            <form onSubmit={submitHandler}>
                <div className={classes.wrapField}>
                    <Fieldset title={'Новая электронная почта'}>
                        <TextField
                            value={email}
                            name='email'
                            placeholder=''
                            required
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                        />
                    </Fieldset>
                </div>

                <div className={classes.buttonWrap}>
                    <Button
                        type='submit'
                        width='318px'
                        height='42px'
                    >
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default EditEmailStepOne;