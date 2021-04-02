import React from 'react';
import logoTeacherBanner from 'images/logoTeacherBanner.svg';
import imgBannerTeacher from 'images/imgBannerTeacher.svg';
import { useStyles } from './style';

const BannerForTeacher = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContent}>
                <img src={logoTeacherBanner} alt="logoOnlineCourses"/>
                <p className={classes.text}>На платформе вас ждёт полезный контент, лекции и мастер-классы от звёздных гостей и признанных профессионалов. По итогам программы вы познакомитесь с современными форматами и инструментами работы и научитесь применять полученный опыт в своей профессиональной деятельности.</p>
                <a className={classes.link} href="https://bolshayaperemena.team" rel={'noreferrer'} target={'_blank'}>Зарегистрироваться</a>
            </div>
            <div className={classes.imgContent}>
                <img src={imgBannerTeacher} alt="imgBannerTeacher"/>
            </div>
        </div>
    )
};

export default BannerForTeacher;