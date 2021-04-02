import React from 'react'
import { useStyles } from './style'
import CornerPixel from "UI/CornerPixel/CornerPixel";
import { Fade } from "@material-ui/core";


export const InfoBox = ({
    icon,
    description,
    subDescriptions,
    title,
    color='#272C5B'
}) => {

    const classes = useStyles()

    return(
        <Fade in timeout={400}>
            <div className={classes.wrapper} >
                <CornerPixel color={color} />
                <img className={classes.icon} src={icon} alt={'icon'}/>
                {!!title && (<h5 className={classes.title}>{title}</h5>)}
                <p className={classes.description} style={{
                    marginTop: !!title ? '' : '15px'
                }} >{description}</p>

                {
                    subDescriptions ?
                        <p className={classes.subDescriptions}>{subDescriptions}</p> : null
                }
            </div>
        </Fade>
    )
};