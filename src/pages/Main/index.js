import React, { useContext } from 'react'
import { Fade } from '@material-ui/core';
import { useMainPageStyles } from './styles'
import WrapContent from 'HOC/WrapContent/WrapContent';
import BannerMainPage from 'components/BannerMainPage/BannerMainPage';
import InCount from 'components/InCount/InCount';
import YaMap from 'components/YaMap/YaMap';
import ParticipantSlider from 'components/ParticipantSlider/ParticipantSlider';
import Challenge from 'components/Challenge/Challenge';
import CompetitionAndPrizes from 'components/CompetitionAndPrizes/CompetitionAndPrizes';
import Winners from 'components/Winners/Winners';
import StarPeople from 'components/StarPeople/StarPeople';
import VideoBlock from 'components/VideoBlock/VideoBlock';
import Organizers from 'components/Organizers/Organizers';
import Feedback from 'components/Feedback/Feedback';
import FooterMain from 'components/FooterMain/FooterMain';
import { AuthContext } from 'context/AuthContext/AuthContext';

const Main = () => {
    const classes = useMainPageStyles();
    const { isAuth } = useContext(AuthContext);

    return (
        <Fade in timeout={800}>
            <div className={classes.background}>
                <WrapContent>
                    <BannerMainPage isAuth={isAuth} />
                    <InCount />
                    <YaMap />
                    <ParticipantSlider />
                    <Challenge />
                </WrapContent>

                <CompetitionAndPrizes isAuth={isAuth}/>

               <WrapContent>
                    <Winners />
                    <StarPeople />
                    <VideoBlock />
                    <Organizers />
                    <Feedback />
               </WrapContent>

                <FooterMain />
            </div>
        </Fade>
    )
};

export default Main

