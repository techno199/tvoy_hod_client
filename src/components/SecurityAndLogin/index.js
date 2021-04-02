import React from 'react';
import { PhoneIcon } from 'svgComponents/PhoneIcon';
import { MailIcon } from 'svgComponents/MailIcon';
import { KeyIcon } from 'svgComponents/KeyIcon';
import { formatPhone } from 'utils/formatPhone';
import { useStyles } from './style';

const SecurityAndLogin = ({ stateContext, setVisibleEditData }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={`${classes.section}`}>
                <p className={classes.icon}><PhoneIcon/></p>
                <p className={classes.title}>Номер телефона</p>
                <p className={classes.value}>{ formatPhone(stateContext.phone) || 'Не указан' }</p>
                <span
                    className={classes.activeSpan}
                    onClick={() => setVisibleEditData('phone')}
                >Изменить</span>
            </div>

            <div className={`${classes.section}`}>
                <p className={classes.icon}><MailIcon/></p>
                <p className={classes.title}>Электронная почта</p>
                <p className={classes.value}>{ stateContext.email }</p>
                <span
                    className={classes.activeSpan}
                    style={{color: 'red'}}
                    //onClick={() => setVisibleEditData('email')}
                >Временно недоступно</span>
            </div>

            <div className={`${classes.section}`}>
                <p className={classes.icon}><KeyIcon/></p>
                <p className={classes.title}>Пароль</p>
                <p className={`${classes.value} ${classes.psw}`}>********</p>
                <span
                    className={classes.activeSpan}
                    onClick={() => setVisibleEditData('password')}
                >Изменить</span>
            </div>
        </div>
    )
};

export default SecurityAndLogin;