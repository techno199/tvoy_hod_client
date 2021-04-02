import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core';
import { Loader } from 'UI/Loader';


const UIKitButton = withStyles({
    root: {
        boxShadow: 'none',
        height: 50,
        color: '#fff',
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 400,
        borderRadius: '0',
        padding: '10px 40px',
        border: '1px solid #FF7271',
        lineHeight: 1.5,
        backgroundColor: '#FF7271',
        fontFamily: [
            'Proxima Nova Rg',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#FF5857',
            border: '1px solid #FF5857',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#FF3F3D',
            border: '1px solid #FF3F3D',
        },
        '&:focus': {
            backgroundColor: '#FF3F3D',
            border: '1px solid #FF3F3D',
        },
        '&:disabled': {
            color: '#fff'
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
    }
})(MuiButton);

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
    width = 'auto',
    height = '50px',
    ...other
}) => {
    return (
        <UIKitButton
            style={{ width, height }}
            {...other}
        >
            {loader ? <Loader /> : children}
        </UIKitButton>
    )
}


export default Button


