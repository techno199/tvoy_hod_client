import React from 'react'
import MuiAutocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import TextField from 'UI/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import { fade, makeStyles } from '@material-ui/core';
import DropdownIcon from 'svgComponents/DropdownIcon';
import AnimateLoader from 'svgComponents/AnimateLoader';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #e9e9e9',
        paddingLeft: 16,
        height: 54,
        overflow: 'hidden',
        borderRadius: 'none',
        backgroundColor: props => props.value ? '#E8F0FE' : '#fff',
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
        '&:before': {
            display: 'none'
        },
        '&:after': {
            display: 'none'
        },
        '& input': {
            color: '#000!important'
        },
    },
    focused: {},
    option: {
        height: 54,
        padding: 16,
        borderRadius: 'none',
        backgroundColor: theme.light,
        fontSize: 18,
        lineHeight: '22px',
        borderTop: '1px solid #E9E9E9',

        '&:hover': {
            cursor: 'pointer',
            background: '#E8F0FE'
        }
    },
    endAdornment: {
        top: 'calc(50% - 14px)',
        right: 0,
        paddingRight: 10,
        position: 'absolute',
    },
    field:{
        '& .Mui-error':{
            border: '1px solid FF2F2F',
            background: 'rgba(255,223,223,1)'
        },
        '& .MuiFormHelperText-root': {
            background: '#fff!important'
        }
    },
    animateLoader: {
        position: 'relative',
        left: 22,
    },
    listbox: {
        '& li': {
            minHeight: 54,
            height: 'auto'
        }
    },
    vp_popper: {
        zIndex: 99999
    }
}));

const filterOptions = createFilterOptions({
    stringify: option => option.title ? option.title : option.toString()
});

function UIKitAutocomplete({textError = null, noArrow, value, placeholder = '', options, onChangeSearchField, loadingSearch, async, disablePortal = false, error, ...props}) {
    const classes = useStyles({ value: Boolean(value) });

    return (
        <MuiAutocomplete
            disablePortal={disablePortal}
            filterOptions={async ? (options, state) => options : filterOptions}
            getOptionSelected={(option, value) => value?.id ? value.id === option.id : false}
            openOnFocus
            value={value}
            disableClearable
            popupIcon={!noArrow ? <DropdownIcon /> : null}
            noOptionsText={'Не найдено'}
            {...props}
            classes={{
                option: classes.option,
                inputRoot: classes.root,
                endAdornment: classes.endAdornment,
                listbox: classes.listbox,
                popper: classes.vp_popper,
            }}
            renderOption={props.getOptionLabel}
            options={options}
            renderInput={(props) =>
                <TextField
                    error={error}
                    className={classes.field}
                    {...props}
                    onChange={onChangeSearchField ? onChangeSearchField : () => {}}
                    helperText={textError}
                    InputProps={{
                        ...props.InputProps,
                        placeholder: placeholder,
                        endAdornment: loadingSearch && async ?
                            <InputAdornment position="end">
                                <AnimateLoader className={classes.animateLoader} />
                            </InputAdornment> :
                            props.InputProps.endAdornment
                    }}
                />}
        />);
}


/**
 * 
 * Возвращает стилизованный Autocomplete из UIKit.
 * 
 * Требуется передать: 
 * @param {Array} options - массив опций
 * @param {*} value - значение
 * @param {Function} onChange - обработчик выбора опции
 * 
 * Поддерживает пропсы Autocomplete от Material-UI
 * - [Autocomplete](https://material-ui.com/components/autocomplete/)
*/


export const Autocomplete = ({
    getOptionLabel,
    error,
    ...params
}) => {
    return (
        <UIKitAutocomplete
            getOptionLabel={getOptionLabel ? getOptionLabel : (o) => o.title}
            error={!!error}
            {...params}
        />
    )
};
