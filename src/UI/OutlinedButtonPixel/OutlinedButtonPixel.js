import React from 'react';
import { useStyles } from './style';

const OutlinedButtonPixel = ({children, width = 216, height = 72, onClick = null, mainColor = '#FF7271', lightColor = '#FF9F9E', darkColor = '#F45553', shadowColor = '#CACACA', disabled, colorType, textColor, borderWidth, ...other}) => {
    const classes = useStyles({
        width,
        height,
        mainColor,
        lightColor,
        darkColor,
        shadowColor,
        disabled,
        colorType,
        textColor,
        borderWidth,
    });

    return (
        <div
            {...other}
            className={`${classes.wrapButtonPixel} wrapButtonPixel ${other.className || ''}`}
            onClick={disabled ? null : onClick}
        >
            <div className={`${classes.buttonPixel} buttonPixel`}>
                { children }
            </div>
            <div className={`${classes.innerPixel} innerPixel`} />
        </div>
    )
};

export default OutlinedButtonPixel;