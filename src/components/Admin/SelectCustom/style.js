import {fade, makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    vpAutocompleteRoot: {
        '& .MuiFormControl-root': {
            margin: 0
        },

        '& .MuiFormHelperText-root': {
            color: '#ff6347',
            fontSize: 10,
            fontFamily: 'Inter',
            fontWeight: 'normal',
            paddingLeft: 7,
            marginLeft: 0,
            marginRight: 0
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
        background: '#fff!important',
        border: '1px solid rgba(113, 119, 132, 0.2)',
        borderRadius: 22,
        overflow: 'hidden',
        height: 54,
        padding: '0!important',
        paddingRight: '39px!important',
        transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',

        '&:hover': {
            background: '#fff',
        },

        '&.Mui-disabled': {
            color: '#717784'
        },

        '& input': {
            height: 45,
            paddingTop: props => props.label ? '12px!important' : '0!important',
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
        border: '1px solid tomato!important'
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