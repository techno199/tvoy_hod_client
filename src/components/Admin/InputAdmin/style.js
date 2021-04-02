import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    vp_formControl: {
      width: '100%'
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
    vp_inputLabelRoot: {
        zIndex: 8,
        paddingLeft: 18,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 15,
        color: 'rgba(113, 119, 132, 0.5)!important',
        transform: 'translate(0, 16px) scale(1)',
        transition: 'transform .3s',
    },
    vp_inputLabelShrink: {
        transform: 'translate(0, 6.5px) scale(0.75)',
        transition: 'transform .3s'
    },
    vp_notchedOutline:{
        borderColor:  'rgba(113, 119, 132, 0.2)!important',
    },
    vp_root: {
        width: '100%',
        borderRadius: 10,

        '&:hover $vp_notchedOutline': {
            borderColor:  '#7358FF!important',
        },

        '&.Mui-error': {
            '& $vp_notchedOutline': {
                borderColor:  'tomato!important',
            }
        },

        '& input[type="number"]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },

        '& input[type="number"]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },

        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },

        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },

        '& input[type=number]': {
            '-moz-appearance': 'textfield',
        },
    },
    vp_disabled: {
        '&:hover $vp_notchedOutline': {
            borderColor:  'rgba(113, 119, 132, 0.2)!important',
        },

        '& $vp_input': {
            color: '#717784'
        }
    },
    vp_input: {
        height: 45,
        boxSizing: 'border-box',
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#2B3847',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingBottom: props => props.labelFloat && 10,
        paddingTop: props => props.labelFloat && 23,
        textTransform: props => props.capitalize && 'capitalize'
    },
    vp_focused: {
        background: '#EFEFFF',

        '& $vp_notchedOutline': {
            borderColor: '#7358FF!important',
            borderWidth: '1px!important'
        }
    },
    errorText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 10,
        color: 'tomato',
        paddingLeft: 7,
    }
});