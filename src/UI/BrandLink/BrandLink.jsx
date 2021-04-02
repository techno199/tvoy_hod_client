import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames';

const DEFAULT_LINK_COLOR = '#3A98EF';

const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: 'none',
        color: props => theme.brandColors[props.color]?.main || DEFAULT_LINK_COLOR
    }
}))

export default function BrandLink(props) {
    const {
        color,
        className,
        target = '_blank',
        ...rest
    } = props;

    const classes = useStyles(props);

    return (
        <Link
            target={target}
            className={classnames(className, classes.root)}
            {...rest}
        />
    )
}
