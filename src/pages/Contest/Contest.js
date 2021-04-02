import React, { useContext } from 'react'
import {Fade, Hidden} from '@material-ui/core';
import { useContestStyles } from './styles'
import WrapContent from 'HOC/WrapContent/WrapContent';
import YaMap from 'components/YaMap/YaMap';
import CompetitionAndPrizes from 'components/CompetitionAndPrizes/CompetitionAndPrizes';
import Winners from 'components/Winners/Winners';
import StarPeople from 'components/StarPeople/StarPeople';
import Organizers from 'components/Organizers/Organizers';
import Feedback from 'components/Feedback/Feedback';
import FooterMain from 'components/FooterMain/FooterMain';
import { AuthContext } from 'context/AuthContext/AuthContext';
import {BannerContestPage} from "components/BannerContestPage/BannerContestPage";
import {EnterCotnest} from "components/EnterContest/EnterContest";
import {Challenges} from "components/Challenges/Challenges";
import {CanBeInvolved} from "components/CanBeInvolve/CanBeInvolve";
import {ContestSteps} from "components/ContestSteps/ContestSteps";
import InCountContest from "components/InCountContest/InCountContest";
import {ItWillCool} from "components/ItWillCool/ItWillCool";
import {VideoCarousel} from "components/VideoCarousel/VideoCarousel";
import pixelLikeABoss from "images/pixelLikeABoss.png";
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import {OutlinePlank} from "UI/OutlinePlank/OutlinePlank";
import { yaTarget } from 'utils/yaTarget';

export const Contest = () => {
    const classes = useContestStyles();
    const { isAuth } = useContext(AuthContext);

    return (
        <Fade in timeout={800}>
            <div className={classes.background}>
                <WrapContent>
                    <BannerContestPage isAuth={isAuth} />
                    <VideoCarousel/>
                    <CanBeInvolved/>
                    <Challenges/>
                    <EnterCotnest/>
                    <ContestSteps/>
                    <YaMap />
                    <InCountContest/>
                    <ItWillCool/>
                    <StarPeople />
                    <Winners />
                </WrapContent>

                <CompetitionAndPrizes
                    inner={
                    <h3 className={classes.heading}>
                        <Hidden mdDown><img src={pixelLikeABoss} alt="круто"/></Hidden>
                        <span>Лови</span>&nbsp;самые&nbsp;
                        <span>яркие моменты</span>
                    </h3>
                }
                    isAuth={isAuth}
                    hidePlank

                />

                <WrapContent>
                    <OutlinePlank>
                        <div className={classes.bannerContent}>
                            <div className={classes.bannerTextt} >
                                Найди тысячи <span>единомышленников</span> для новых свершений
                            </div>
                            <ButtonPixel
                                width={'200px'}
                                height={'70px'}
                                onClick={() => {
                                    yaTarget('bp-community');
                                    window.open('https://community.bolshayaperemena.online')
                                }}
                                mainColor={'rgb(121,202,223)'}
                                shadowColor={'rgb(173,221,234)'}
                                darkColor={'rgb(120,184,201)'}
                                lightColor={'rgb(155,228,248)'}
                            >
                                Перейти на страницу <br/> сообщества
                            </ButtonPixel>
                        </div>
                    </OutlinePlank>
                    <Organizers inner={
                        <h3 className={classes.heading}>
                            Наш конкурс в этом году <span id={'lightRed'} >организуют<br/> и поддерживают:</span>
                        </h3>
                    } />
                    <Feedback />
                </WrapContent>

                <FooterMain />
            </div>
        </Fade>
    )
};


