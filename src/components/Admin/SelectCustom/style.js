import {fade, makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    vpAutocompleteRoot: {
        '& .MuiFormControl-root': {
            margin: 0
        },

        '& .MuiFormHelperText-root': {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            bottom: -20,
            width: '100%',
            color: theme.palette.error.main,
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: 'normal',
            margin: 0,
            backgroundColor: '#fff'
        },
        '&:not([data-value=""]) .MuiInputBase-root': {
            backgroundColor: '#E8F0FE',
            '&:.Mui-focused': {
                backgroundColor: '#fff'
            }
        }
    },
    label: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '15px',
        color: 'rgba(113, 119, 132, 0.5)',
        marginTop: 0,
        marginBottom: 10
    },
    vp_filedRoot: {
        backgroundColor: '#fff',
        border: '1px solid rgba(113, 119, 132, 0.2)',
        borderRadius: 22,
        overflow: 'hidden',
        height: 54,
        padding: '0!important',
        paddingRight: '39px!important',
        transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',

        '&:hover': {
            backgroundColor: '#fff'
        },

        '&.Mui-disabled': {
            color: '#717784',
            backgroundColor: 'rgba(0, 0, 0, 0.12) !important'
        },

        '& input': {
            height: 45,
            paddingBottom: '0!important',
            paddingLeft: '14px!important',
            lineHeight:'45px',
            boxSizing:'border-box',
            cursor: props => props.disabled ? 'default' : props.readonly ? 'pointer' : 'text',

            '&::selection': {
                background: 'transparent'
            }
        }
    },
    vp_focused: {
        border: `1px solid ${fade(theme.brandColors.brandBlue.alternative, .4)}`,
        boxShadow: `${fade(theme.brandColors.brandBlue.alternative, .2)} 0 0 0 4px`
    },
    vp_popper: {
        '& li': {
            color: 'tomato',
            fontSize: 15,
            textShadow: 'none',
            transition: 'all .25s',

            '&:hover': {
                background: '#BDCFFD'
            }
        }
    },
    vp_errorFiled: {
        border: `1px solid ${theme.palette.error.main}`,
        backgroundColor: `${theme.palette.error.light} !important`,
        '&.Mui-focused': {
            boxShadow: `${fade(theme.palette.error.main, .2)} 0 0 0 4px`,
            backgroundColor: '#fff !important'
        }
    },
    inputLabelRoot: {
        color: 'rgba(113, 119, 132, 0.5)!important',
    },
    inputLabelMarginDense: {
        transform: 'translate(12px, 15px) scale(1)!important',
    },
    vp_inputLabelShrink: {
        transform: `translate(12px, 7px) scale(0.75)!important`
    }
}));