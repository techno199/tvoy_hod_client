import React from 'react'
import {useStyles} from './style'


export const FilledPixelBox = ({inner, color ,shadow}) => {
    const classes = useStyles({color, shadow});

    return(
        <div className={classes.box} >

            <div className={classes.topLeftCorner}>
                <div className={classes.topLeftColored} />
            </div>
            <div className={classes.topRightCorner}>
                <div className={classes.topRightColored}/>
            </div>
            <div className={classes.bottomLeftCorner}>
                <div className={classes.shadowColored} />
                <div className={classes.colored}/>
                <div />
                <div className={classes.shadowColored}/>
            </div>
            <div className={classes.bottomRightCorner}>
                <div className={classes.colored}/>
                <div className={classes.shadowColored} />
                <div className={classes.shadowColored} />
                <div />
            </div>



            <div className={classes.inner} >{inner}</div>
        </div>
    )

}