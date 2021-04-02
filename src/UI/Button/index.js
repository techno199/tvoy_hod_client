import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core';
import { Loader } from 'UI/Loader';


const UIKitButton = withStyles(theme => ({
    root: {
        boxShadow: 'none',
        height: 50,
        color: '#fff',
        backgroundColor: props => theme.brandColors[props.color]?.main || theme.brandColors.brandBlue.main,
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 400,
        borderRadius: 22,
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
}))(MuiButton);

/**
 * @method Button -Возвращает стилизованную кнопку из UIKit
 * @param {*} children -Содержимое кнопки 
 * @param {String | Number} width - ширина. По умолчанию `auto`
 * @param {Boolean} loader - лоадер внутри кнопки
 * 
 * Поддерживает любые параметры Button из Material-UI
 * - [Button](https://material-ui.com/components/buttons/)
 */

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


export default Button


