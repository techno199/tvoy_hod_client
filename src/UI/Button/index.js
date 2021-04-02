import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core';
import { Loader } from 'UI/Loader';
import PropTypes from 'prop-types'

const UIKitButton = withStyles(theme => ({
    root: {
        boxShadow: 'none',
        height: 50,
        color: '#fff',
        borderRadius: props => props.shape === 'rounded' ? 22 : 0,
        backgroundColor: props => theme.brandColors[props.color]?.main || theme.brandColors.brandBlue.main,
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 400,
        padding: '10px 40px',
        lineHeight: 1.5,
        '&:hover': {
            backgroundColor: props => theme.brandColors[props.color]?.main || theme.brandColors.brandBlue.main,     
        }
    },
    disabled: {
        backgroundColor: '#A4A6BA',
        border: '1px solid #A4A6Ba',
        color: '#fff'
    },
    outlined: {
        backgroundColor: 'transparent !important',
        border: '1px solid #FF7271',
    },
}))(props => {
    const { color, ...rest } = props;
    return <MuiButton color='default' {...rest}  />
});

const Button = ({
    children,
    loader,
    ...other
}) => {
    return (
        <UIKitButton
            {...other}
        >
            {loader ? <Loader /> : children}
        </UIKitButton>
    )
}

Button.propTypes = {
    /** Отображает лоадер вместо children */
    loader: PropTypes.bool,
    shape: PropTypes.oneOf(['default', 'rounded'])
}

export default Button


