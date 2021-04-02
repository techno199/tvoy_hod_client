import React from 'react'
import MuiButtonGroup from '@material-ui/core/ButtonGroup'
import { withStyles } from '@material-ui/core';

const UIKitButtonGroup = withStyles({
    root: {
        boxShadow: 'none',
        height: 52,
        width: '100%',
        color: 'black',
        textTransform: 'none',
        borderRadius: '0',
        border: '1px solid #E9E9E9',
        backgroundColor: 'transparent',
    },
    groupedContainedPrimary: {
        '&:not(:last-child)': {
            border: 'none',
        }
    },
    groupedContainedHorizontal: {
        '&:not(:last-child)': {
            borderRight: '1px solid #E8F0FE',
        }
    }
})(MuiButtonGroup);

/**
 * 
 * Возвращает стилизованный ButtonGroup из UIKit.
 * 
 * Требуется передать: 
 * @param {React.ReactNode} children - Кнопки для группировки
 * 
 * Поддерживает пропсы ButtonGroup от Material-UI
 * - [ButtonGroup](https://material-ui.com/components/button-group/)
*/

export const ButtonGroup = ({
    children,
    error,
    ...params
}) => {
    return (
        <UIKitButtonGroup className={error ? 'errorGroup' : 'nothing'} {...params}>
            {children}
        </UIKitButtonGroup>
    )
}
