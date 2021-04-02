import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    personalDataForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingRight: 125,

        '@media(max-width: 990px)': {
            paddingRight: 0
        }
    },
    formGroup: {
        width: 'calc(50% - 12px)',
        marginBottom: 24,

        '@media(max-width: 650px)': {
            width: '100%'
        },

        '&  div': {
            margin: 0
        },

        '& .titleFieldSet': {
            marginBottom: 16,
        },

        '& .description': {
            marginBottom: 16,
        }
    },
    w100: {
        width: '100%'
    },
    noSearchScool: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 16,
        lineHeight: '19px',
        color: '#488BFF',
        textDecoration: 'none',
        marginTop: 16,
        display: 'inline-block',

        '&:hover': {
            textDecoration: 'underline'
        }
    },
    bottomWrap: {
        marginTop: 16,

        '@media(max-width: 500px)': {
            width: '100%'
        },

        '& .loader': {
            marginLeft: 10,
        },

        '& button': {
            '@media(max-width: 500px)': {
                width: '100%!important'
            }
        }
    },
    vp_tooltip: {
        backgroundColor: '#000',
        fontSize: 11,
    },
    buttonEdit: {
        position: 'absolute',
        right: -120,
        top: 48,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#717784',
        borderRadius: 0,
        border: 0,
        textTransform: 'none',
        letterSpacing: 'normal',
        transition: 'all .3s',

        '@media(max-width: 990px)': {
            right: 0,
            top: -5,
        },

        '@media(max-width: 500px)': {
            fontSize: 0
        },

        '&:hover': {
            background: 'transparent'
        }
    },
    description: {
        '& .description': {
            fontSize: 15,
        }
    }
});
