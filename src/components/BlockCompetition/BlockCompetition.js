import React from 'react';
import { useStyles } from './style';

const BlockCompetition = ({ imgSrc, onClick, onMouseDown, onMouseMove }) => {
    const classes = useStyles();
  
    return (
        <img
            className={classes.img}
            src={imgSrc}
            alt="imgSrc"
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
        />
    )
};

export default BlockCompetition;