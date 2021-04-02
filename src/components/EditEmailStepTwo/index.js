import React from 'react';
import Button from 'UI/Button';
import { useStyles } from './style';

const EditEmailStepTwo = ({ setVisibleEditData }) => {
    const classes = useStyles();

    return (
        <div>
            <p className={classes.subText}>
                На вашу новую электронную почту выслано письмо для подтверждения изменения электронной почты
            </p>
            <div className={classes.buttonWrap}>
                <Button
                    onClick={() => setVisibleEditData(false)}
                    width='318px'
                    height='42px'
                >Продолжить</Button>
            </div>

        </div>
    )
};

export default EditEmailStepTwo;
