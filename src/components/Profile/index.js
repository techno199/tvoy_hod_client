import React, { useContext, useState, useEffect }   from 'react';
import { Fade }                                     from '@material-ui/core';
import DialogCustom                                 from 'components/DialogCustom';
import VkAuth                                       from 'components/VkAuth/VkAuth';
import BannerOrStageContest                         from 'components/BannerOrStageContest/BannerOrStageContest'
import ProfileTestsPart                             from 'components/ProfileTestsPart/ProfileTestsPart'
import ProfileCertificateAndStudy                   from 'components/ProfileCertificateAndStudy/ProfileCertificateAndStudy'
import HelloUserName                                from 'components/HelloUserName/HelloUserName';
import CircularProgress                             from '@material-ui/core/CircularProgress';
import VkWidget                                     from 'components/VkWidget/VkWidget';
import vkMobMenu                                    from 'images/vkMobMenu.svg'
import { callToast }                                from 'utils/callToast';
import { visibleTest }                              from 'utils/visibleTest';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { LkContext }                                from 'context/LkContext/LkContext';
import { useStyles }                                from './style';

const Profile = () => {
    const classes = useStyles();
    const { state:stateContext } =useContext(AuthContext);
    const { completedTests, postIdVk } = useContext(LkContext);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(openDialog) {
            //eslint-disable-next-line
            VK.Widgets.Auth("vk_auth", {
                "onAuth":function(data) {
                    postIdVk(data['uid']).then(() => {
                        setOpenDialog(false);
                        callToast({message: 'Страница ВКонтакте успешно привязана'});
                    })
                }}
            );
        }
        //eslint-disable-next-line
    }, [openDialog]);

    useEffect(() => {
        if(visibleTest(stateContext)) {
            setLoading(true);
            (async function() {
                try {
                    await completedTests();
                    setLoading(false)
                } catch (err) {
                    setLoading(false);
                    throw err;
                }
            })();
        }
        //eslint-disable-next-line
    }, []);

    if(loading) {
        return (
            <div className={classes.loadingPage}>
                <CircularProgress disableShrink  size={50}/>;
            </div>
        )
    }

    return (
        <Fade in timeout={800}>
            <div className={classes.Profile}>
                <h3 className={classes.heading}>
                    Мой профиль
                    {
                        stateContext.vk_id ?

                            <a href={' https://vk.com'} className={classes.bonus} rel="noreferrer" target={'_blank'}>
                                <span className={classes.inner} />
                                <span className={classes.bonusSpan}>
                                <img src={vkMobMenu} alt="vkMobMenu"/>
                                </span>
                            </a> : null
                    }
                </h3>

                <HelloUserName
                    stateContext={stateContext}
                />

                <VkWidget
                    stateContext={stateContext}
                    setOpenDialog={setOpenDialog}
                />

                {
                    visibleTest(stateContext) ?
                        <BannerOrStageContest
                            stateContext={stateContext}
                        /> : null
                }

                {
                    visibleTest(stateContext) ?
                        <ProfileTestsPart /> : null
                }

                <ProfileCertificateAndStudy />

                <DialogCustom
                    widthDialog={200}
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    noFullScreen
                    scroll={'body'}
                >
                    <VkAuth />
                </DialogCustom>
            </div>
        </Fade>
    )
};

export default Profile;