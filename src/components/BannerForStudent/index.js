import React                    from 'react';
import logoOnlineCourses        from 'images/logoOnlineCourses.svg';
import imgBannerStudent         from 'images/imgBannerStudent.svg';
import { yaTarget }             from 'utils/yaTarget';
import { useStyles }            from './style';

const BannerForStudent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContent}>
                <img src={logoOnlineCourses} alt="logoOnlineCourses"/>
                <p className={classes.text}>Онлайн-обучение может быть весёлым, <br/>интересным и захватывающим</p>
                <a
                    className={classes.link}
                    href="https://bolshaya-peremena.academy"
                    rel={'noreferrer'}
                    target={'_blank'}
                    onClick={() => {
                        yaTarget('bp-lk-my-training-start');
                    }}
                >
                    Начать учиться
                </a>
            </div>
            <div className={classes.imgContent}>
                <img src={imgBannerStudent} alt="imgBannerStudent"/>
            </div>
        </div>
    )
};

export default BannerForStudent;