import React from 'react'
import {useStyles} from './style'

import eeeRock from 'images/eeeRock.png'
import pixelFlash from 'images/pixelFlash.png'
import artek from 'images/organizer14.png'
import pixelRuble from 'images/pixelRuble.png'
import pixelCup from 'images/pixelCup.png'
import pixelRocket from 'images/pixelRocket.png'
import pixelBag from 'images/pixelBag.png'

import {FilledSimplePixelBox} from "UI/FilledSimplePixelBox/FilledSimplePixelBox";

export const ItWillCool = () => {

    const classes = useStyles()

    return(
        <section className={classes.wrapper} >
            <h3 className={classes.heading}>
                <img src={eeeRock} alt={''} className={classes.titleIcon} />
                В этом году будет&nbsp; <br/> <span>ещё круче:</span>

            </h3>

            <div className={classes.bannersWrapper}>
                <div className={`${classes.bannerContent} ${classes.blueBanner}`} >
                    <div className={classes.bigNum} >3</div>
                    <div className={classes.midTitle} >группы участников</div>
                    <div className={classes.lowTitle} >Ученики 5-10 классов, <br/> студенты СПО </div>
                </div>
                <div className={`${classes.bannerContent} ${classes.mintBanner}`} >
                    <div className={classes.bigNum} >12</div>
                    <div className={classes.midTitle} >вызовов</div>
                    <div className={classes.lowTitle} >актуальных в современном мире</div>
                </div>
                <div className={`${classes.bannerContent} ${classes.purpleBanner}`} >
                    <div className={classes.bigNum} >5-7</div>
                    <div className={classes.midTitle} >классы</div>
                    <div className={classes.lowTitle} >конкурс в формате онлайн - игры</div>
                </div>
            </div>

            <div className={classes.bannersWrapper} >

                <div className={classes.littleBanner} >
                    <img src={pixelFlash} className={classes.flash} alt={'pixelFlash'}/>
                    <FilledSimplePixelBox
                        color={'#F7D548'}
                        shadow={'#FEAE34'}
                    >
                        <div className={classes.family} >
                            Семейный конкурс
                            <br/>
                            <span>для участников</span>
                        </div>
                    </FilledSimplePixelBox>
                </div>

                <div className={classes.littleBanner} >
                    <FilledSimplePixelBox
                        color={'#6EDD9E'}
                        shadow={'#60CC8F'}
                    >
                        <div className={classes.artek} >
                            <img src={artek} alt={'артек'} className={classes.artekIcon} />
                            <div className={classes.highTitle}><span>финал в МДЦ «Артек»</span></div>
                        </div>
                    </FilledSimplePixelBox>
                </div>

                <div className={classes.littleBanner} >
                    <img src={pixelRuble} className={classes.ruble} alt={'pixelRuble'} />
                    <FilledSimplePixelBox
                        color={'#FF7271'}
                        shadow={'#F45553'}
                    >
                        <div className={classes.highTitle} >
                            805 млн руб.
                            <br/>
                            <span>призовой фонд</span>
                        </div>
                    </FilledSimplePixelBox>
                </div>

                <div className={classes.littleBanner} >
                    <img src={pixelCup} className={classes.cup} alt={'pixelCup'} />
                    <FilledSimplePixelBox
                        color={'#2162AB'}
                        shadow={'#15559C'}
                    >
                        <div className={classes.highTitle} >
                            1300
                            <br/>
                            <span>победителей среди <br/> учеников и студентов</span>
                        </div>
                    </FilledSimplePixelBox>
                </div>

                <div className={classes.littleBanner} >
                    <img src={pixelRocket} className={classes.rocket} alt={'pixelRocket'} />
                    <FilledSimplePixelBox
                        color={'#4995E7'}
                        shadow={'#117AEA'}
                    >
                        <div className={classes.highTitle} >
                            1300
                            <br/>
                            <span>победителей <br/> наставников</span>
                        </div>
                    </FilledSimplePixelBox>
                </div>

                <div className={classes.littleBanner} >
                    <img src={pixelBag} className={classes.bag} alt={'pixelBag'} />
                    <FilledSimplePixelBox
                        color={'#2162AB'}
                        shadow={'#15559C'}
                    >
                        <div className={classes.highTitle} >
                            50
                            <br/>
                            <span>учебных организаций <br/> победителей</span>
                        </div>
                    </FilledSimplePixelBox>
                </div>

            </div>

        </section>
    )
}