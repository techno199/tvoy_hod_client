import React from 'react';
import { useStyles } from './style';

const WrapContent = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapContent}>
            { children }
        </div>
    )
};

export default WrapContent;