import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import WrapContent from 'HOC/WrapContent/WrapContent';
import cubok from 'images/cubok.png';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlockCompetition from 'components/BlockCompetition/BlockCompetition';
import competition1 from 'images/competition1.png';
import competition1small from 'images/competition1small.png';
import competition2 from 'images/competition2.png';
import competition2small from 'images/competition2small.png';
import competition3 from 'images/competition3.png';
import competition3small from 'images/competition3small.png';
import competition4 from 'images/competition4.png';
import competition4small from 'images/competition4small.png';
import competition5 from 'images/competition5.png';
import competition5small from 'images/competition5small.png';
import competition6 from 'images/competition6.png';
import competition6small from 'images/competition6small.png';
import competition7 from 'images/competition7.png';
import competition7small from 'images/competition7small.png';
import competition8 from 'images/competition8.png';
import competition8small from 'images/competition8small.png';
import competition9 from 'images/competition9.png';
import competition9small from 'images/competition9small.png';
import FsLightbox from 'fslightbox-react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { settingsForSwipeSlider } from 'utils/settingsForSliders';
import { useStyles } from './style';
import {settingsPrize} from "../../utils/settingsForSliders";
import CornerPixel from "UI/CornerPixel/CornerPixel";
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import {Hidden} from "@material-ui/core";

const CompetitionAndPrizes = ({ isAuth, inner, hidePlank }) => {
    const classes = useStyles();
    const history= useHistory();
    const isMob = useMediaQuery('(max-width:600px)');

    const imageArrSmall = useRef([competition1small, competition2small, competition3small, competition4small, competition5small, competition6small, competition7small, competition8small, competition9small]);
    const imageArr = useRef([competition1, competition2, competition3, competition4, competition5, competition6, competition7, competition8, competition9]);

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <div className={classes.CompetitionAndPrizes}>
            <WrapContent>
                {inner || <h3 className={classes.heading}>
                    <Hidden mdDown><img src={cubok} alt="cubok"/></Hidden>
                    <span className={classes.wrapSpan}>Участвуй в конкурсе <br/>
                    Большая перемена <br/><span>и получай крутые призы</span></span>
                </h3>}
            </WrapContent>

            <div className={classes.wrapSlider}>
                {
                    !isMob ?
                        <Swiper {...settingsForSwipeSlider}>
                        {
                            imageArrSmall.current.map((item, ind) => (
                            <div
                                className={classes.blockCompetition}
                                key={ind}
                                onClick={() => {
                                    openLightboxOnSlide(ind+1)
                                }}
                            >
                                <CornerPixel color={'#F67E49'} />
                                <BlockCompetition
                                    imgSrc={item}
                                />
                            </div>
                        ))
                }
                    </Swiper> :
                    <Slider {...settingsPrize} className={classes.slider}>
                        {
                            imageArrSmall.current.map((item, ind) => (
                                <div
                                    className={classes.blockCompetition}
                                    key={ind}
                                    onClick={() => {
                                        openLightboxOnSlide(ind+1)
                                    }}
                                >
                                    <CornerPixel color={'#F67E49'} />
                                    <BlockCompetition
                                        imgSrc={item}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={imageArr.current}
                slide={lightboxController.slide}
            />

            {!hidePlank && (
                <WrapContent>
                    <div className={classes.dateStart}>
                        <div className={classes.text} >
                            <h5 className={classes.headingDateStart}>
                                Стартуем 26 марта 2021 года
                            </h5>
                            {
                                isAuth !== 1 ?
                                    <>
                                        <p className={classes.descriptionStart}>
                                            Скоро появятся подробности о конкурсе 2021 года, а пока присоединяйся к сообществу.
                                        </p>
                                    </> : null
                            }
                        </div>

                        {isAuth !== 1 && (
                            <ButtonPixel
                                width={214}
                                height={70}
                                onClick={() => history.push('/auth/signup')}
                            >
                                Присоединиться к сообществу
                            </ButtonPixel>
                        )}
                    </div>
                </WrapContent>
            )}

        </div>
    )
};

export default CompetitionAndPrizes;
