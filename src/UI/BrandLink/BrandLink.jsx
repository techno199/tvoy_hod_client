import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames';

const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: 'none',
        color: props => theme.brandColors[props.color]?.main || theme.brandColors.brandBlue.alternative
    }
}))

export default function BrandLink(props) {
    const {
        color,
        className,
        blank = false,
        target,
        ...rest
    } = props;

    const classes = useStyles(props);

    return (
        <Link
            target={blank ? '_blank' : target}
            className={classnames(className, classes.root)}
            {...rest}
        />
    )
}
