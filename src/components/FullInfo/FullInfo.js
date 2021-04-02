import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useStyles } from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './customScroll.css'
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";

const FullInfo = ({ data }) => {
    const classes = useStyles();
    const isMob = useMediaQuery('(max-width:800px)');

    useEffect(() => {
        const $thVer = document.querySelector('.thumb-vertical');
        const $trVer = document.querySelector('.track-vertical');
        const $container = document.querySelector('.myScroll');
        const $view = document.querySelector('.view');

        setTimeout(() => {
           if (parseInt($thVer.style['height']) === 0 || $thVer.style['height'] === '') {
               $trVer.style.display = 'none';
               $container.style.height = 'auto';
               $view.style.position = 'static'
           }
        },0);
    },[isMob]);
  
    return (
        <div className={classes.FullInfo}>
            <div className={classes.textAndImg}>
                <img className={classes.img} src={data?.imgSrc} alt="img"/>
                <div className={classes.wrapScrollContent}>
                    <h3 className={classes.heading}>{data?.header}</h3>
                    <Scrollbars
                        className={'myScroll'}
                        //autoHeight
                        //autoHeightMax={485}
                        style={{height: 480}}
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                        renderView={props => <div {...props} className="view"/>}
                    >
                        <>
                            {data?.content && <data.content />}
                            <ButtonPixel
                                width={200}
                                height={70}
                                mainColor={data?.mainColor}
                                lightColor={data?.lightColor}
                                darkColor={data?.darkColor}
                                shadowColor={data?.shadowColor}
                            >
                                <a
                                    href={data?.link}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className={classes.link}
                                >
                                    Присоединиться к проекту
                                </a>
                            </ButtonPixel>
                        </>
                    </Scrollbars>

                </div>
            </div>

        </div>
    )
};

export default FullInfo;