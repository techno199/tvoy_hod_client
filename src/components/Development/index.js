import React from 'react';
import { useLocation } from 'react-router-dom';
import lock from 'images/lock.png'
import { useStyles } from './style';

const Development = () => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const path = pathname.split('/')[2];
    const title = {profile: 'Мой профиль', notification: 'Уведомления', settings: 'Настройки', team: 'Моя команда',contests: 'Мои конкурсы', achievements: 'Мои достижения', tasks: 'Мои задания', tests: 'Мои тесты', news: 'Мои новости', events: 'Мои мероприятия', certificate: 'Мой сертификат', training: 'Моё обучение'};

    return (
        <div>
            <h1 className={classes.heading}>{title[path]}</h1>
            <div className={classes.blockDevelop}>
                <img src={lock} alt="lock"/>
                <p className={classes.text}>Данный раздел <br /> находится в разработке.</p>
            </div>
        </div>
    )
};

export default Development;