import React, { useContext } from 'react'
import { Fade } from '@material-ui/core';
import { useMainPageStyles } from './styles'
import WrapContent from 'HOC/WrapContent/WrapContent';
import BannerMainPage from 'components/BannerMainPage/BannerMainPage';
import Feedback from 'components/Feedback/Feedback';
import FooterMain from 'components/FooterMain/FooterMain';
import { AuthContext } from 'context/AuthContext/AuthContext';
import { InfoGeometry } from 'components/InfoGeometry/InfoGeometry';
import { CreateProjectBanner } from 'components/CreateProjectBanner/CreateProjectBanner';
import { TexWithPlank } from 'components/TextWithPlank/TexWithPlank';
import { Chat } from 'components/Chat/Chat';
import { Months } from 'components/Months/Months';
import { CurrentStage } from 'components/CurrentStage/CurrentStage';
import { InfoWithGamepad } from 'components/InfoWithGamepad/InfoWithGamepad';
import { UntilRegistrationBanner } from 'components/UntilRegistrationBanner/UntilRegistrationBanner';
import { Directions } from 'components/Directions/Directions';
import { Prizes } from 'components/Prizes/Prizes';
import { Supporters } from 'components/Supporters/Supporters';

const Main = () => {
    const classes = useMainPageStyles();
    const { isAuth } = useContext(AuthContext);

    return (
        <Fade in timeout={800}>
            <div className={classes.background}>
                <BannerMainPage isAuth={isAuth} />

                <WrapContent>
                    <InfoGeometry />
                </WrapContent>

                <CreateProjectBanner />
                <TexWithPlank />
                <Chat />
                <Months />
                <CurrentStage />
                <InfoWithGamepad />
                <UntilRegistrationBanner />
                <Directions />
                <Prizes />
                <Supporters />

                <WrapContent>
                    <Feedback />
                </WrapContent>

                <FooterMain />
            </div>
        </Fade>
    )
};

export default Main

