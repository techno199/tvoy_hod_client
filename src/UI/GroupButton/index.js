import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
        height: 52,
        width: '100%',
        color: 'black',
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 400,
        borderRadius: '0',
        padding: '10px 40px',
        border: '1px solid transparent',
        lineHeight: 1.5,
        backgroundColor: props => props.isActive ? '#E8F0FE' : 'transparent',
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
            backgroundColor: 'rgba(232,240,254,.5)',
            /* border: '1px solid rgba(232,240,254,.5)', */
            /* boxShadow: 'none', */
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#E8F0FE',
        },
        '&:focus': {
            backgroundColor: '#E8F0FE',
            /* border: '1px solid rgba(232,240,254,1)', */
        },
    },
    disabled: {
        backgroundColor: '#A4A6BA',
        border: '1px solid #A4A6Ba',
        color: '#fff'
    },
}), 1)

const UIKitGroupButton = ({ isActive, children, ...props }) => {
    const c = useStyles({isActive})


    return <MuiButton className={isActive ? 'activeGroupButton' : 'none'} classes={c} {...props}>
        {children}
    </MuiButton>
}

/**
 * Возвращает стилизованную кнопку для ButtonGroup из UIKit
 *  - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A7080)
 * 
 * 
 * @param {*} children - Содержание кнопки
 * @param {Boolean} isActive - Активное состояние кнопки
 * 
 * Поддерживает все пропсы Button из Material-UI
 * 
 * - [Button](https://material-ui.com/components/buttons)
 */

export const GroupButton = ({
    children,
    isActive,
    ...params
}) => {

    return (
        <UIKitGroupButton isActive={isActive} {...params}>
            {children}
        </UIKitGroupButton>
    )
}
