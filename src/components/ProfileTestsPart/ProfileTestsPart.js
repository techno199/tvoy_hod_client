import React, { useContext, useCallback }               from 'react';
import { Link }                                         from 'react-router-dom';
import ButtonPixel                                      from 'UI/ButtonPixel/ButtonPixel';
import CornerPixelSlice                                 from 'components/CornerPixelSlice/CornerPixelSlice';
import { TEST_ONLINE }                                  from '../../CONSTANTS';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import { LkContext }                                    from 'context/LkContext/LkContext';
import moment                                           from 'moment'
import moneyBonus                                       from 'images/moneyBonus.svg';
import checkedGreen                                     from 'images/checkedGreen.svg';
import { useStyles }                                    from './style';

const ProfileTestsPart = () => {
    const classes = useStyles();
    const { passedTests } = useContext(LkContext);
    const { state : stateContext } = useContext(AuthContext);

    const dopClassLabel = useCallback((dateStart) => {
        return moment(dateStart).isAfter(stateContext.currentDate) ? classes['notAvailable'] : '';
        // eslint-disable-next-line
    }, []);

    const currentTest = useCallback((link) => {
        const keys = Object.keys(passedTests);
        return keys.includes(link)
        // eslint-disable-next-line
    }, [passedTests]);

    const getdataTest = (link) => {
        switch(link) {
            case '20210203-170332-8692':
                return {
                    classes: classes.violet,
                    bonus: 5
                };

            case '20210205-152506-2643':
                return {
                    classes: classes.lightBlue,
                    bonus: 5
                };

            default:
                return {
                    classes: classes.darkBlue,
                    bonus: 5
                }
        }
    };

    return (
        <div className={classes.ProfileTestsPart}>
            <h3 className={classes.heading}>Мои тесты</h3>

            <div className={classes.wrapTests}>
                {
                    TEST_ONLINE.map((item, ind) => {
                        return (
                            <React.Fragment key={ind}>
                                {
                                    !currentTest(item.link)
                                        ? <div className={classes.oneTest} >
                                               <img
                                                   className={classes.imgTest}
                                                   src={item.imgMob}
                                                   alt="imgTest"
                                               />
                                               <div className={classes.titleAndStatus}>
                                                    <span className={classes.title}>
                                                        {item.title}
                                                    </span>

                                                    <span className={`${classes.label} ${dopClassLabel(item.dateStart)}`}>
                                                        {moment(item.dateStart).isAfter(stateContext.currentDate) ? 'Недоступен' : 'Новый'}
                                                    </span>
                                               </div>

                                               <p className={classes.textProfile}>
                                                   {item.textProfile}
                                               </p>
                                           </div>
                                        : <div className={classes.oneTest}>
                                            <div className={classes.procent}/>
                                            <CornerPixelSlice  size={14}/>
                                            <div
                                                className={`${classes.contentPasedTest} ${getdataTest(item.link).classes}`}
                                            >
                                                <div className={classes.bonus}>
                                                    <span className={classes.score}>{getdataTest(item.link).bonus} баллов</span>
                                                    <img
                                                        className={classes.moneyBonus}
                                                        src={moneyBonus}
                                                        alt="moneyBonus"
                                                    />
                                                </div>

                                                <div className={classes.nameChecked}>
                                                    <img
                                                        className={classes.checkedGreen}
                                                        src={checkedGreen}
                                                        alt="checkedGreen"
                                                    />
                                                    <div className={classes.titleAndLink}>
                                                        <span className={classes.titlePassed}>
                                                            {item.title}
                                                        </span>

                                                        <Link
                                                            to={`/lk/tests/${item.link}/result`}
                                                            className={classes.passedLink}
                                                        >
                                                            Посмотреть результаты
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                          </div>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>

            <div className={classes.buttonBlock}>
                <Link to={'/lk/tests'}>
                    <ButtonPixel>
                        Перейти в раздел
                    </ButtonPixel>
                </Link>
            </div>
        </div>
    )
};

export default ProfileTestsPart;