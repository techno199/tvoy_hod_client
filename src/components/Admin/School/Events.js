import React from 'react';
import { useStyles } from './style';

const Events = () => {
    const classes = useStyles();

    return (
        <div className={classes.Events}>
            Hello Events!
        </div>
    )
};

export default Events;