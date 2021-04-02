import React from 'react'
import {useStyles} from './style'

export const OutlinePlank = ({children}) => {

    const classes = useStyles()

    return(
        <div
            className={classes.border}
        >

            <div className={classes.topLeftCorner} >
                <div className={classes.empty}/>
                <div className={classes.empty}/>
                <div className={classes.empty} />
                <div className={classes.colored} />
            </div>
            <div className={classes.topRightCorner} >
                <div className={classes.empty} style={{position: 'relative', right: '-1px'}} />
                <div className={classes.empty}/>
                <div className={classes.filled} />
                <div className={classes.empty} />
            </div>
            <div className={classes.bottomLeftCorner} >
                <div className={classes.shadowed} />
                <div className={classes.colored}/>
                <div className={classes.empty} />
                <div className={classes.shadowed} />
            </div>
            <div className={classes.bottomRightCorner} >
                <div className={classes.colored} />
                <div className={classes.empty} style={{position: 'relative', bottom: '-1px'}}/>
                <div className={classes.empty} style={{position: 'relative', right: '-1px'}} />
                <div className={classes.empty} />
            </div>

            <div className={classes.content} >
                {children}
            </div>
        </div>
    )
}