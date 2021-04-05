
import React from 'react'
import { ueInfoWithGamepadStyles } from './styles'

export const Step = ({
    text,
    arrow=false
}) => {

    const classes = ueInfoWithGamepadStyles({arrow})

    return (
        <div className={classes.stepBlock} >
            <div>
                {text}
            </div>
        </div>
    )
}
