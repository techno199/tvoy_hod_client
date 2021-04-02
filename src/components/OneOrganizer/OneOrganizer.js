import React from 'react';
import { useStyles } from './style';
import CornerPixel from "UI/CornerPixel/CornerPixel";

const OneOrganizer = ({ imgSrc, text, first, last }) => {
    const classes = useStyles({first, last});

    return (
        <div className={classes.OneOrganizer}>
            <CornerPixel color={'#eeeeee'} />
            <img src={imgSrc} className={classes.img} alt="organizer"/>
            {
                text ?
                    <span className={classes.text}>{text}</span> : null
            }
        </div>
    )
};

export default OneOrganizer;