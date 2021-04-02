import React from 'react';
import { useStyles } from './style';
import CornerPixel from "UI/CornerPixel/CornerPixel";

export const PixelBox = ({
    color,
    icon,
    topOffset,
    iconPosition,
    number,
    title,
    mobileTopOffset
}) => {
    const classes = useStyles({color, iconPosition,topOffset,mobileTopOffset});

    return (
        <div className={classes.boxWrapper} >
            <CornerPixel color={color} />

            <div className={classes.icon}><img alt={'иконка'} src={icon} /></div>
            <div className={classes.number}>{new Intl.NumberFormat('ru-RU').format(number)}</div>
            <div className={classes.title}>{title}</div>
        </div>
    )
};
