import React from 'react';
import { useStyles } from './style';

const CornerPixelSlice = ({ size }) => {
    const classes = useStyles({size});
    /*Тут будут костыли. Спасибо пиксельному дизайну. Без них будут белые пробелы*/
    return (
        <>
            <div className={classes.topLeft} >
                <div className={classes.white} />
                <div className={classes.white} style={{left: '-2px'}} />
                <div className={classes.white} style={{top: '-1px'}} />
                <div className={classes.empty} />
            </div>
            <div className={classes.topRight} >
                <div className={classes.white} style={{right: '-2px'}} />
                <div className={classes.white} />
                <div className={classes.empty} />
                <div className={classes.white} style={{top: '-1px'}}/>
            </div>
            <div className={classes.bottomRight} >
                <div className={classes.empty} />
                <div className={classes.white}  style={{bottom: '-1px'}} />
                <div className={classes.white} style={{right: '-2px'}} />
                <div className={classes.white} />
            </div>
            <div className={classes.bottomLeft} >
                <div className={classes.white} style={{bottom: '-1px'}} />
                <div className={classes.empty} />
                <div className={classes.white} />
                <div className={classes.white} style={{left: '-2px'}} />
            </div>

        </>
    )
};

export default CornerPixelSlice;