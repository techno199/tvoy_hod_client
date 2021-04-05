import { Container } from '@material-ui/core';
import React from 'react';
import { useStyles } from './style';

const WrapContent = ({ children }) => {
    const classes = useStyles();

    return (
        <Container>
            { children }
        </Container>
    )
};

export default WrapContent;