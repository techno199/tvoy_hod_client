import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import studentsBanner from 'images/studentsBanner.png';
import DialogCustom from 'components/DialogCustom';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import greeting from 'video/greeting.mp4'
import { useStyles } from './style';
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import {PixelCertificate} from "svgComponents/PixelCertificate";
import play from 'images/play.png'
import CornerPixelSlice from "UI/CornerPixelSlice/CornerPixelSlice";
import smallCloudPlank from "images/smallCloudPlank.png";

const BannerMainPage = ({ isAuth }) => {
    const classes = useStyles();
    const history = useHistory();

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div className={classes.bg}>
            <div className={classes.banner}>
                <CornerPixelSlice size={'14'} />
                <div className={classes.textContent}>
                    <div className={classes.smallCloud} >
                        <img src={smallCloudPlank} alt={''} />
                        <div>
                            Начало регистрации <br/> {' '}
                            <span>для учеников школ{' '}{' '}{' '}<kbd>26 марта</kbd> в <kbd>17:00</kbd>, </span><br/>
                            для студентов ссузов {' '}{' '}{' '}<kbd>30 марта</kbd> в <kbd>13:00</kbd>
                        </div>
                    </div>
                    <h4 className={classes.heading}>
                        <span className={classes.bigBreak} >Конкурс "Большая перемена" </span> —  место, где твоим талантам есть место
                    </h4>

                    <div className={classes.btnAndVideo}>
                        {
                            isAuth !== 1 ?
                                <ButtonPixel
                                    width='211px'
                                    height='70px'
                                    colorType={'red'}
                                    shadowColor={'#582C83'}
                                    onClick={() => history.push('/auth/signup')}
                                >
                                    Присоединиться к сообществу
                                </ButtonPixel> : null
                        }
                        <ButtonPixel
                            width='211px'
                            height='70px'
                            colorType={'violet'}
                            shadowColor={'#582C83'}
                            onClick={() => setOpenDialog(true)}
                        >
                            <img alt={'play'} src={play} className={classes.videoIcon} />
                            Видео-приветствие
                        </ButtonPixel>
                    </div>

                </div>

                <div className={classes.imageContent}>
                    <img src={studentsBanner} alt="studentsBanner"/>
                </div>
            </div>

            {
                isAuth !== 1 ?
                    <div className={classes.getCertificate}>
                        <CornerPixelSlice size={14} />
                        <div className={classes.getCertificateContent} >
                            <div className={classes.certAndText} >
                                <PixelCertificate />
                                <span >Для участников конкурса “Большая перемена - 2020”</span>
                            </div>

                            <div className={classes.certificateButton} >
                                <ButtonPixel
                                    width='214px'
                                    height='79px'
                                    mainColor={'#FEE761'}
                                    lightColor={'#fff1a3'}
                                    darkColor={'#ecd031'}
                                    shadowColor={'#3EA5A9'}
                                    textColor={'#0373A6'}
                                    onClick={() => {
                                        history.push({
                                            pathname: '/auth/signup',
                                            state: {
                                                certificate: true
                                            }
                                        })
                                    }}
                                >
                                    Получить сертификат
                                </ButtonPixel>
                            </div>
                        </div>

                    </div> : null
            }

            <DialogCustom
                widthDialog={1016}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                scroll={'body'}
                noFullScreen
            >
                <Player autoPlay className={classes.player} >
                    <source src={greeting} />
                </Player>
            </DialogCustom>
        </div>
    )
};

export default BannerMainPage;