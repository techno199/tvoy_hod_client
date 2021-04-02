import React, { useRef, useContext, useState }  from 'react';
import { useHistory, Link }                     from 'react-router-dom';
import ButtonPixel                              from 'UI/ButtonPixel/ButtonPixel';
import CornerPixelSlice                         from 'components/CornerPixelSlice/CornerPixelSlice';
import { StepChecked }                          from 'svgComponents/StepChecked';
import moneyBonus                               from 'images/moneyBonus.svg';
import AnimateLoader                            from 'svgComponents/AnimateLoader';
import { LkContext }                            from 'context/LkContext/LkContext';
import { AuthContext }                          from 'context/AuthContext/AuthContext';
import { errorHandler }                         from 'utils/errorHandler';
import { getContestant }                        from 'utils/adminPermissions';
import { yaTarget }                             from 'utils/yaTarget';
import { useStyles }                            from './style';

const BannerOrStageContest = ({ stateContext }) => {
    const classes = useStyles();
    const { becomeParticipant } = useContext(LkContext);
    const { getMe } = useContext(AuthContext);
    const history = useHistory();

    const steps = useRef([
        {
            id: 1,
            title: 'Регистрация',
            date: '26.03-01.06',
            active: true,
            checked: true,
            bonus: false
        },
        {
            id: 2,
            title: 'Знакомство',
            date: '26.03-17.06',
            active: true,
            checked: false,
            bonus: true
        },
        {
            id: 3,
            title: 'Командная гонка',
            date: '18.06-25.07',
            active: false,
            checked: false,
            bonus: true
        },
        {
            id: 4,
            title: 'Полуфинал',
            date: '28.08-06.10',
            active: false,
            checked: false,
            bonus: true
        },
        {
            id: 5,
            title: 'Финал',
            date: '02.11 - 27.11',
            active: false,
            checked: false,
            bonus: true
        }
    ]);
    const [loading, setLoading] = useState(false);

    const getClasses = (item, field) => {
        return `${classes[field]} ${!item.active ? 'noActive' : ''}`
    };

    const clickHandler = async () => {
        yaTarget('bp-lk-start');
        setLoading(true);
        try {
            await becomeParticipant();
            await getMe();
            history.push('/lk/contests');//тут перход на страницу с конкурсами
        } catch (err) {
            setLoading(false);
            errorHandler(err);
        }
    };
  
    return (
        <>
            {
                !getContestant(stateContext.role)
                    ?  <div className={classes.BannerOrStageContest}>
                            <CornerPixelSlice  size={13}/>
                            <div className={classes.innerBlock}>
                                <div className={classes.content}>
                                    <h3 className={classes.heading}>Конкурс «Большая перемена» стартовал!</h3>
                                    <p className={classes.subTitle}>Участвуй и получай бомбические призы.</p>
                                    <ButtonPixel
                                        className={classes.butonPixel}
                                        disabled={loading}
                                        shadowColor={'#cacaca'}
                                        onClick={clickHandler}
                                        colorType={'red'}
                                    >
                                        {
                                            loading
                                                ?  <>Подождите... <AnimateLoader className={'loader'} color={'#fff'} /></>
                                                :  <>
                                                    Стать участником
                                                    <svg style={{marginLeft: 20}} width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 4H4V8H8V4Z" fill="white"/>
                                                        <path d="M4 0H0V4H4V0Z" fill="white"/>
                                                        <path d="M4 16H0V20H4V16Z" fill="white"/>
                                                        <path d="M8 12H4V16H8V12Z" fill="white"/>
                                                        <path d="M12 8H8V12H12V8Z" fill="white"/>
                                                    </svg>
                                                </>
                                        }
                                    </ButtonPixel>
                                </div>
                            </div>
                        </div>
                    :   <>
                            <div className={classes.stageContest}>
                                {
                                    steps.current.map((item, ind) => {
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div className={getClasses(item, 'step')}>
                                                    <CornerPixelSlice  size={7}/>

                                                    {
                                                        ind !== 0
                                                            ?   <div className={getClasses(item, 'bonus')}>
                                                                    <span className={getClasses(item, 'score')}>0 баллов</span>
                                                                    <img
                                                                        className={classes.moneyBonus}
                                                                        src={moneyBonus}
                                                                        alt="moneyBonus"
                                                                    />
                                                                </div>
                                                            : null
                                                    }

                                                    <div className={classes.checkedWrap}>
                                                        <StepChecked
                                                            color={!item.active ? '#C4C4C4' : '#ffffff'}
                                                            checked={item.checked}
                                                        />
                                                        <div className={classes.titleDate}>
                                                            <span className={getClasses(item, 'title')}>{item.title}</span>
                                                            <span className={getClasses(item, 'date')}>{item.date}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {
                                                    ind + 1 !== steps.current.length
                                                        ?  <div className={classes.arrow}>
                                                            <svg  width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.3992 8.19995L8.19922 8.19995L8.19922 16.4H16.3992V8.19995Z" fill={!item.active ? '#c4c4c4' : '#6EDD9E'}/>
                                                                <path d="M8.2 0L0 0L0 8.2L8.2 8.2L8.2 0Z" fill={!item.active ? '#c4c4c4' : '#6EDD9E'}/>
                                                                <path d="M8.2 32.8H0L0 41H8.2L8.2 32.8Z" fill={!item.active ? '#c4c4c4' : '#6EDD9E'}/>
                                                                <path d="M16.3992 24.5999H8.19922L8.19922 32.7999H16.3992V24.5999Z" fill={!item.active ? '#c4c4c4' : '#6EDD9E'}/>
                                                                <path d="M24.5984 16.4001H16.3984V24.6001H24.5984V16.4001Z" fill={!item.active ? '#c4c4c4' : '#6EDD9E'}/>
                                                            </svg>
                                                        </div>
                                                        : null
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                            <div className={classes.buttonContest}>
                                <Link to={'/lk/contests'} style={{textDecoration: 'none'}}>
                                    <ButtonPixel shadowColor={'#cacaca'}>
                                        Перейти в раздел
                                    </ButtonPixel>
                                </Link>
                            </div>
                        </>
            }
        </>
    )
};

export default BannerOrStageContest;