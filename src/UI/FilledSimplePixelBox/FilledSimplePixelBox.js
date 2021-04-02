import React from 'react'
import {useStyles} from './style'


export const FilledSimplePixelBox = ({children, color ,shadow}) => {
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
                <div className={classes.bottomLeftWhite} />
            </div>
            <div className={classes.bottomRightCorner}>
                <div className={classes.bottomRightWhite} />
            </div>



            <div className={classes.inner} >{children}</div>
        </div>
    )

}