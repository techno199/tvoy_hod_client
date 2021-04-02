import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    NoSchoolData: {
        padding: 48,

        '@media(max-width: 650px)': {
            padding: 20,
            paddingTop: 48,
        },
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: '29px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 32,

        '@media(max-width: 650px)': {
            fontSize: 18,
            lineHeight: '22px',
        },

        '@media(max-width: 500px)': {
            fontSize: 16,
            lineHeight: '19px',
        },

        '& img': {
            marginLeft: 23,

            '@media(max-width: 500px)': {
                order: -1,
                marginLeft: 0,
                marginRight: 10,
                width: 18,
                height: 'auto'
            },
        }
    },
    personalDataForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
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
    w100: {
        width: '100%'
    },
    buttonBlock: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    button: {
        height: 50,
        width: 'calc(50% - 12px)',
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 18,
        textTransform: 'none',
        letterSpacing: 'normal',
        transition: 'background .3s',

        '@media(max-width: 500px)': {
            width: '100%'
        }
    },
    save: {
        background: '#FF7271',
        color: '#fff',

        '@media(max-width: 500px)': {
            marginBottom: 15
        },

        '&:hover': {
            background: '#FF6060'
        }
    },
    logout: {
        border: '1px solid #FF7271',
        color: '#1b1b1b'
    }
});