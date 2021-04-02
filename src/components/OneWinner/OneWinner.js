import React from 'react';
import noPhoto from 'images/noPhoto.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './style';

const OneWinner = ({ data }) => {
    const classes = useStyles();
    const isMob = useMediaQuery('(max-width:700px)');

    return (
        <div className={classes.OneWinner}>
            {
                data?.imgSrc ?
                    <div className={classes.wrapImg}>
                        <img className={classes.img} src={data?.imgSrc} alt="photoWinner"/>
                        {
                            isMob ?
                                <div>
                                    <h5 className={classes.fio}>{data?.fio}</h5>
                                    <p className={classes.region}>{data?.region}</p>
                                </div> : null
                        }
                    </div> :
                    <div className={classes.wrapImg}>
                        <div className={classes.noPhoto}>
                            <img src={noPhoto} alt="noPhoto"/>
                        </div>
                    </div>
            }

            <div className={classes.content}>
                {
                    !isMob ?
                        <>
                            <h5 className={classes.fio}>{data?.fio}</h5>
                            <p className={classes.region}>{data?.region}</p>
                        </> : null
                }
                <p className={classes.titleLong}>{data?.titleLong}</p>
                <p className={classes.text}>{data?.text}</p>
            </div>
        </div>
    )
};

export default OneWinner;