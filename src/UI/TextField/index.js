import React, { useState } from 'react'
import MuiTextField from '@material-ui/core/TextField'
import { fade, IconButton, makeStyles } from '@material-ui/core';
import { DateMask, PhoneMask, CodeMask } from 'utils/Masks';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStylesReddit = makeStyles((theme) => ({
    root: {
        border: '1px solid #e9e9e9',
        verticalAlign: 'middle',
        padding: 16,
        height: 54,
        overflow: 'hidden',
        borderRadius: 'none',
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {},
        '&:not(:focused):not(:palceholder-show)': {
            backgroundColor: '#E8F0FE',
            border: 'none',
        },
        '&$focused': {
            backgroundColor: '#fff ',
            boxShadow: `${fade('#488Bff', 0.25)} 0 0 0 2px `,
            border: '1px solid #488Bff',
        },

        '& input': {
            height: 51,
            paddingTop: 10,
            paddingBottom: 10,
            boxSizing: 'border-box',
            textTransform: props => props.capitalize && 'capitalize'
        },

        '& button': {
            '@media(max-width: 700px)': {
                padding: 0
            }
        }
    },
    focused: {},
    error: {
        background: '#FFDFDF !important',
        border: '1px solid #FF2F2F !important',
        margin: 0,
    },
    disabled: {
        backgroundColor: '#e1e1e1'
    }
}));

function UIKitTextField(props) {
    const classes = useStylesReddit({ capitalize: props.capitalize});

    return (
        <MuiTextField
            inputProps={{
                autoComplete: 'off'
            }}
            InputProps={{
                ...props.iprops,
                classes,
                disableUnderline: true
            }}
            {...props}
        />
    )
}


/** Возвращает стилизованный TextField из UIKit 
 * - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=647%3A1529)
 * 
 * 
 * Кастомные пропсы:
 * 
 * @param {Boolean} code - Добавляет расстояние между символами и увеличивает их размер. [Пример](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A8695)
 * @param {Boolean} phoneMask - Добавляет маску для телефона. [Пример](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A7080)
 * @param {String} type - Тип поля. При 'password' - добавляет кликабельный глазик в конце. [Пример](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A8855)
 * 
 * Поддерживает все пропсы TextField от Material-UI
 * - [TextField](https://material-ui.com/api/text-field/#props)
 * 
 */


const TextField = ({
    code,
    phoneMask,
    date,
    capitalize,
    type,
    ...params
}) => {

    let ips = {}

    const [newType, setNewType] = useState(type || 'text')
    const [empty, setEmpty] = useState(() => !!params?.value || !!params?.defaultValue)


    const handleAdornClick = () => {
        setNewType((oldType) => {
            return oldType === 'password' ? 'text' : 'password'
        })
    }

    if (phoneMask) {
        Object.assign(ips, {
            inputComponent: PhoneMask
        })
    }

    if (date) {
        Object.assign(ips, {
            inputComponent: DateMask
        })
    }

    if (code) {
        Object.assign(ips, {
            inputComponent: CodeMask
        })
    }

    if (type === 'password') {
        Object.assign(ips, {
            endAdornment: newType === 'password' ? <IconButton onClick={handleAdornClick}> <VisibilityIcon style={{ color: 'black' }} /> </IconButton> : <IconButton onClick={handleAdornClick}> <VisibilityOffIcon style={{ color: 'black' }} /> </IconButton>
        })
    }

    const handleBlur = e => {
        if (params.onBlur) {
            params.onBlur(e)
        }
        setEmpty(!!e?.target?.value)
    };

    return (
        <UIKitTextField
            {...params}
            iprops={ips}
            data-notempty={empty}
            onBlur={handleBlur}
            data-code={code ?? false}
            type={newType}
            capitalize={capitalize}
        />
    )
};

export default TextField
