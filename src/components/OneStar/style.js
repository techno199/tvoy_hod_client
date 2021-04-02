import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    OneStar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(0px)'
    },
    img: {
        width: 263,
        height: 263,
        display: 'block',
        marginBottom: 24,

        '@media(max-width: 361px)': {
            width: 241,
            height: 241
        },

    },
    fio: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 8,

        '@media(max-width: 367px)': {
            fontSize: 16
        },
    },
    title: {
        maxWidth: 276,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center',


        '@media(max-width: 367px)': {
            fontSize: 14
        },
    },
    textBox:{
        height: '140px',
        width: '263px',
        border: '4px solid #6edd9e',
        padding: '16px 13px',
        flexDirection: 'column',
        display: 'flex',
        position: 'relative',

        '@media(max-width: 367px)': {
            width: '239px',
            height: 137,
            padding: '8px'
        },

        '@media(max-width: 361px)': {
            width: 220,
            height: 105,
            padding: 6
        },
    },
});