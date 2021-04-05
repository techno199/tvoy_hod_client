import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import WrapContent from 'HOC/WrapContent/WrapContent';
import BrandButton from 'UI/BrandButton/BrandButton';

import lightXButton from 'images/lightXButton.png'
import girl from 'images/redglassesGirl.png';
import transparentGeometryBanner from 'images/transparentGeometryBanner.png'
import lightCircleButton from 'images/lightCircleButton.png'
import lightTriangleButton from 'images/lightTriangleButton.png'
import coloredLogo from 'images/coloredLogo.png'
import countdownIcon from 'images/countdownIcon.svg'

import Geometry from 'svgComponents/Geometry';
import { COUNTDOWN_UNTIL } from 'CONSTANTS';
import { Countdown } from 'components/Countdown/Countdown';


const BannerMainPage = ({ isAuth }) => {
    const classes = useStyles();
    const history = useHistory();


    return (
        <div className={classes.wrapper}>

            <div className={classes.gamepadBackground} >
                <Geometry />
            </div>

            <WrapContent>

                <div className={classes.bannerWrapper}>
                    <div className={classes.banner} >
                        <img src={transparentGeometryBanner} alt='' className={classes.transparentGeometry} />
                        <div className={classes.textContent}>
                            <img src={coloredLogo} alt='твой ход' className={classes.coloredLogo} />

                            <h4>
                                Всероссийский <br />
                                студенческий конкурс.
                            </h4>
                            <h5>Здесь нет проигравших</h5>

                            <div className={classes.actionBlock} >
                                <h6>
                                    Сделай первый шаг
                                </h6>
                                <div className={classes.buttonPlank} >
                                    <BrandButton
                                        onClick={() => history.push('/auth/signup')}
                                    >
                                        Регистрируйся
                                    </BrandButton>

                                    <div className={classes.registrationPlank} >
                                        Старт регистрации:{' '}
                                        <span>&nbsp;8 апреля</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={classes.imageContent}>
                        <img src={girl} alt="studentsBanner" />
                    </div>

                    <img src={lightXButton} alt='Х' className={classes.lightX} />
                    <img src={lightCircleButton} alt='О' className={classes.lightO} />
                    <img src={lightTriangleButton} alt='Д' className={classes.lightD} />

                </div>

                <div className={classes.countdownPlank} >
                    <img src={countdownIcon} alt='' className={classes.countdownIcon} />
                    <div className={classes.countdownText} >
                        До конца регистрации осталось:
                    </div>
                    <Countdown toDate={COUNTDOWN_UNTIL} />
                </div>
            </WrapContent>


        </div>
    )
};

export default BannerMainPage;