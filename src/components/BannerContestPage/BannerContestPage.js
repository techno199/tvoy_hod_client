import React  from 'react';
import { useHistory } from 'react-router-dom';
import studentsBanner from 'images/studentsBanner.png';
import "video-react/dist/video-react.css";
import { useStyles } from './style';
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import CornerPixelSlice from "UI/CornerPixelSlice/CornerPixelSlice";
import smallCloudPlank from 'images/smallCloudPlank.png';
import { yaTarget } from 'utils/yaTarget';

export const BannerContestPage = ({ isAuth }) => {
    const classes = useStyles();
    const history = useHistory();

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
                        <span className={classes.bigBreak} >Конкурс "Большая перемена"</span> —  место, где твоим талантам есть место
                    </h4>

                    <div className={classes.btnAndVideo}>
                        <ButtonPixel
                            width='258px'
                            height='85px'
                            colorType={'red'}
                            shadowColor={'#582C83'}
                            onClick={() => {
                                yaTarget('registration-mb');
                                history.push('/auth/signup')
                            }}
                        >
                            <span style={{fontSize: '24px', fontWeight: 700, color: '#fff'}} >Регистрируйся!</span>
                        </ButtonPixel>
                    </div>
                </div>

                <div className={classes.imageContent}>
                    <img src={studentsBanner} alt="studentsBanner"/>
                </div>
            </div>


        </div>
    )
};
