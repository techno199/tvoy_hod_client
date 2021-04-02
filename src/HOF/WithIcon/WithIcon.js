import React from 'react'
import {useStyles} from './styles'
import {Hidden} from "@material-ui/core";


export const WithIcon = ({icon, topOffset, children,leftOffset}) => {

    const classes = useStyles({topOffset,leftOffset})

    return(
        <div className={classes.wrapper}>
            <div className={classes.icon}>
                <Hidden mdDown>
                    <img alt={'icon'} src={icon}/>
                </Hidden>
            </div>
            {children}
        </div>
    )
}