import React from 'react';
import fly from 'images/boat.png';
import money from 'images/treasure.png';
import finalist from 'images/pixelFace.png';
import finalistMoney from 'images/coin.png';
import { useStyles } from './style';
import { Player, LoadingSpinner } from 'video-react';
import "video-react/dist/video-react.css";
import video from 'video/video.mp4'
import pixelGlasses from 'images/pixelGlasses.svg'
import CornerPixel from "UI/CornerPixel/CornerPixel";
import {Hidden} from "@material-ui/core";
import videoBanner from 'images/videoBanner.png'

const VideoBlock = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.VideoBlock}>
            <h3 className={classes.heading}>
                <Hidden mdDown>
                    <img alt={'очки'} src={pixelGlasses} />
                </Hidden>
               <span>
                   Скорее смотри, как прошёл <br/>
                   <span>суперфинал в Артеке</span>
               </span>
            </h3>

            <div className={`${classes.wrapContent} ${classes.smallContent}`}>
                <div className={classes.video}>
                    <div className={classes.headingVideo}>
                        <span className={`${classes.curcle} ${classes.red}`} />
                        <span className={`${classes.curcle} ${classes.yellow}`}  />
                        <span className={`${classes.curcle} ${classes.green}`} />
                    </div>

                    <Player autoPlay={false} src={video} poster={videoBanner} preload={"none"}>
                        <LoadingSpinner />
                    </Player>
                </div>
            </div>

            <div className={classes.result}>
                <div className={classes.itemResult}>
                    <CornerPixel color={'#ff7271'} />
                    <div className={`${classes.imgIcon} ${classes.img1}`}>
                        <img  src={fly} alt="fly"/>
                    </div>
                    <p className={classes.descriptions}>
                        <span className={classes.number} >
                            1 200
                        </span>
                        финалистов отправились на Суперфинал в АРТЕК
                    </p>
                </div>

                <div className={classes.itemResult}>
                    <CornerPixel color={'#ff7271'} />
                    <div className={`${classes.imgIcon} ${classes.img2}`}>
                        <img  src={money} alt="money"/>
                    </div>
                    <p className={classes.descriptions}>
                        <span className={classes.number} >
                            20
                        </span>
                        школ получили по 2 млн руб. на свое развитие
                    </p>
                </div>

                <div className={classes.itemResult}>
                    <CornerPixel color={'#ff7271'} />
                    <div className={`${classes.imgIcon} ${classes.img3}`}>
                        <img src={finalist} alt="finalist"/>
                    </div>
                    <p className={classes.descriptions}>
                        <span className={classes.number} >
                            300
                        </span>
                        победителей из 8-9 классов получили по 200 000 ₽
                    </p>
                </div>

                <div className={classes.itemResult}>
                    <CornerPixel color={'#ff7271'} />
                    <div className={`${classes.imgIcon} ${classes.img4}`}>
                        <img src={finalistMoney} alt="finalistMoney"/>
                    </div>
                    <p className={classes.descriptions}>
                        <span className={classes.number} >
                            300
                        </span>
                        победителей из 10 классов получили по 1 000 000 ₽
                    </p>
                </div>
            </div>

            <div className={`${classes.wrapContent} ${classes.largeContent}`}>
                <div className={classes.video}>
                    <div className={classes.headingVideo}>
                        <span className={`${classes.curcle} ${classes.red}`} />
                        <span className={`${classes.curcle} ${classes.yellow}`}  />
                        <span className={`${classes.curcle} ${classes.green}`} />
                    </div>

                    <Player autoPlay={false} src={video} poster={videoBanner} preload={"none"}>
                        <LoadingSpinner />
                    </Player>
                </div>
            </div>
        </div>
    )
};

export default VideoBlock;