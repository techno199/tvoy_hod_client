import React, { useCallback, useContext  }          from 'react';
import { Link }                                     from 'react-router-dom'
import ButtonPixel                                  from 'UI/ButtonPixel/ButtonPixel';
import Image                                        from 'material-ui-image'
import clock                                        from 'images/clock.svg';
import useMediaQuery                                from '@material-ui/core/useMediaQuery';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import moment                                       from 'moment'
import { vipUser }                                  from 'utils/vipUsers';
import { yaTarget }                                 from 'utils/yaTarget';
import { useStyles }                                from './style';

const OneTest = ({ title, link, img, descriptions, time, completed, dateStart }) => {
    const classes = useStyles();
    const { state : stateContext } = useContext(AuthContext);
    const isMob = useMediaQuery('(max-width:800px)');

    const dataDisabled = () => {
        return moment(dateStart).isAfter(stateContext.currentDate) && !vipUser(stateContext)
    };

    const dopClassLabel = useCallback(() => {
        return dataDisabled()
                ? classes['unavailable'] : completed.includes(link) ? classes['completed'] : '';
        // eslint-disable-next-line
    }, []);

    const createLink = useCallback(() => {
        return completed.includes(link) ? `/lk/tests/${link}/result` : `/lk/tests/${link}`
        //eslint-disable-next-line
    }, []);

    return (
        <div className={classes.OneTest}>
            <div className={classes.imgBlock}>
                {
                    isMob
                        ? <img src={img} alt="imgTest" className={classes.img}/>
                        :  <Image
                            className={classes.img}
                            src={img}
                            aspectRatio={(337/393)}
                            disableSpinner
                        />
                }
            </div>
            <div className={classes.content}>
                <div className={classes.wrapTitle}>
                     <span className={`${classes.label} ${dopClassLabel()}`}>
                        {
                            dataDisabled()
                                ? 'Недоступен'
                                :  completed.includes(link) ? 'Пройден' : 'Новый'
                        }
                    </span>

                    <h3 className={classes.title}>{ title }</h3>
                </div>

                <div className={classes.descriptions}>
                    {descriptions}
                </div>

                <div className={classes.linkWrap}>
                    <Link
                        to={createLink()}
                        className={`
                            ${classes.linkTest} ${dataDisabled() ? classes.noPointer : ''}
                        `}
                        onClick={(event) => {
                            if(dataDisabled()){
                                event.preventDefault()
                            }
                        }}
                    >
                        <ButtonPixel
                            colorType={'red'}
                            disabled={dataDisabled()}
                            onClick={() => {
                                let target;
                                switch(link) {
                                    case '20210203-170332-8692':
                                        target = 'bp-lk-your-code';
                                    break;

                                    case '20210205-152506-2643':
                                        target = 'bp-lk-your-vector';
                                    break;

                                    case '20210305-140818-8208':
                                        target = 'bp-lk-your-choice';
                                    break;

                                    default:
                                        return
                                }

                                yaTarget(target);
                            }}
                        >
                            {
                                dataDisabled()
                                    ? `Стартует ${dateStart.split('-').reverse().join('.')}`
                                    :  completed.includes(link) ? 'Смотреть результаты' : 'Приступить к тесту'
                            }
                        </ButtonPixel>
                    </Link>

                    {
                        !completed.includes(link) ?
                            <span className={classes.time}>
                                <img className={classes.imgClock} src={clock} alt="clock"/>
                                {time}
                            </span> : null
                    }
                </div>
            </div>
        </div>
    )
};

export default OneTest;

