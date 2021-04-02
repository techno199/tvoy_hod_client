import React from 'react';
import { useStyles } from './style';
import CornerPixel from "UI/CornerPixel/CornerPixel";

const OneStar = ({ imageSrc, fio, title }) => {
    const classes = useStyles();
  
    return (
        <div className={classes.OneStar}>
            <img className={classes.img} src={imageSrc} alt="photoStar"/>

            <div className={classes.textBox} >
                <CornerPixel color={'#6edd9e'} />
                <h5 className={classes.fio}>{fio}</h5>
                <p className={classes.title}>{title}</p>
            </div>
        </div>
    )
};

export default OneStar;