import React from 'react'

import pixelCalendar from 'images/pixelRegisterCalendar.png'
import pixelPC from 'images/pixelPC.png'
import pixelChess from 'images/pixelChess.png'
import pixelBobot from 'images/pixelBobot.svg'
import pixelLowCalendar from 'images/pixelCalendar.png'
import pixelLoud from 'images/pixelLoud.png'
import stepArrow from 'images/stepArrow.png'

import { useStyles } from './style'
import CornerPixelSlice from "UI/CornerPixelSlice/CornerPixelSlice";
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import {OutlinePlank} from "UI/OutlinePlank/OutlinePlank";
import { yaTarget } from 'utils/yaTarget';

export const ContestSteps = () => {

    const classes = useStyles();

    return(
        <section className={classes.sect} >
            <h3 className={classes.heading}>
                <img src={pixelLowCalendar} alt={''} />
                Как будет проходить <br/> <span>{' '}конкурс?</span>
            </h3>

            {/*<Banner />*/}

            <div className={classes.stepsWrapper} >
                <div className={`${classes.stepBlock} ${classes.registration}`} >
                    <CornerPixelSlice size={6} />
                    <div className={classes.textBlock} >
                        <h6>
                            Регистрация
                        </h6>
                        <div className={classes.dateComment} >
                            <div className={classes.date} >
                                26.03-15.06
                            </div>
                            <div className={classes.comment} >
                                Стань участником <br/> в конкурсе
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBlock}>
                        <img className={classes.calendar} src={pixelCalendar} alt={'регистрация'} />
                    </div>
                </div>
                <div className={`${classes.stepBlock} ${classes.meeting}`} >
                    <CornerPixelSlice size={6} />
                    <img src={stepArrow} className={classes.meetingArrow} alt={''} />
                    <div className={classes.textBlock} >
                        <h6>
                            Дистанционный этап <br/> "Знакомство"
                        </h6>
                        <div className={classes.dateComment} >
                            <div className={classes.date} >
                                26.03-30.06
                            </div>
                            <div className={classes.comment} >
                                Расскажи о себе
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBlock}>
                        <img className={classes.pc} src={pixelPC} alt={'Знакомство'} />
                    </div>
                </div>
                <div className={`${classes.stepBlock} ${classes.final}`} >
                    <CornerPixelSlice size={6} />
                    <img src={stepArrow} className={classes.finalArrow} alt={''} />
                    <div id={'textblock'} className={classes.textBlock} >
                        <h6>
                            Очный этап <br/> "Финальный ход"
                        </h6>
                        <div className={classes.dateComment} >
                            <div className={classes.date} >
                                До 27 ноября
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBlock}>
                        <img className={classes.chess} src={pixelChess} alt={'Финальный ход'} />
                    </div>
                </div>

                <div className={`${classes.stepBlock} ${classes.bigGame}`} >
                    <CornerPixelSlice size={6} />
                    <img src={stepArrow} className={classes.finalArrow} alt={''} />
                    <div id={'textblock'}  className={classes.textBlock} >
                        <h6>
                            Очный этап <br/> "Большая игра"
                        </h6>
                        <div className={classes.dateComment} >
                            <div className={classes.date} >
                                27.08-06.10
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBlock}>
                        <img className={classes.bobot} src={pixelBobot} alt={'регистрация'} />
                    </div>
                </div>

                <div className={`${classes.stepBlock} ${classes.team}`} >
                    <CornerPixelSlice size={6} />
                    <img src={stepArrow} className={classes.teamArrow} alt={''} />
                    <div id={'textblock'} className={classes.textBlock} >
                        <h6>
                            Дистанционный этап <br/> "Командное состязание"
                        </h6>
                        <div className={classes.dateComment} >
                            <div className={classes.date} >
                                01.07-05.08
                            </div>
                        </div>
                    </div>

                    <div className={classes.imageBlock}>
                        <img className={classes.loud} src={pixelLoud} alt={'регистрация'} />
                    </div>
                </div>
            </div>

            <OutlinePlank>
                <div className={classes.bannerContent}>
                    <div className={classes.bannerTextt} >
                        Чем отличается конкурс для <span>5-7 классов?</span>
                    </div>
                    <ButtonPixel
                        width={'200px'}
                        height={'70px'}
                        onClick={() => {
                            yaTarget('bp-game');
                            window.open('https://start.bolshayaperemena.online')
                        }}
                        mainColor={'rgb(121,202,223)'}
                        shadowColor={'rgb(173,221,234)'}
                        darkColor={'rgb(120,184,201)'}
                        lightColor={'rgb(155,228,248)'}
                    >
                        Перейти на страницу <br/> игры
                    </ButtonPixel>
                </div>
            </OutlinePlank>

            {/*<div className={classes.banned} >
                <CornerPixelSlice size={14} />
                <div className={classes.bannerText} >
                    Нас уже {' '}
                    <span>500 000 !</span>
                </div>
                <div className={classes.button} >
                    <ButtonPixel
                        width={'200px'}
                        height={'70px'}
                        shadowColor={'#E43D3B'}
                    >
                    <span className={classes.buttonText} >
                        Принять участие <br/> в конкурсе
                    </span>
                    </ButtonPixel>
                </div>
            </div>*/}

        </section>
    )
}