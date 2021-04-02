import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    WinnerBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(0px)',

        '@media(max-width: 470px)': {
            marginRight: 0,
            marginLeft: 0,
        }
    },
    img: {
        width: 184,
        height: 184,
        objectFit: 'cover',
        display: 'block',
        marginBottom: 23,

        '@media(max-width: 470px)': {
            width: 236,
            height: 236,
        },

        '@media(max-width: 344px)': {
            width: 216,
            height: 216
        },
    },
    fio: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 8,
        textAlign: 'center',

        '@media(max-width: 470px)': {
           fontSize: 20,
        },
        '@media(max-width: 344px)': {
            fontSize: 17
        },
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '140%',
        color: 'rgba(59, 63, 67, 0.5)',
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center',

        '@media(max-width: 470px)': {
            fontSize: 16,
            color: '#3B3F43',
            maxWidth: 'none'
        },

        '@media(max-width: 344px)': {
            fontSize: 14
        },
    },
    noPhoto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E8E8E8',
        marginBottom: 24,
        width: 164,
        height: 164,
        borderRadius: '50%',

        '@media(max-width: 470px)': {
            width: 236,
            height: 236,
        }
    },
    textBox:{
      padding: '11px 8px',
      border: '4px solid #2162ab',
      width: 187,
      position: 'relative',

        '@media(max-width: 990px)':{
            width: '95%',
            padding: '8px',
            maxWidth: '184px'
        },

        '@media(max-width: 470px)':{
            width: '100%',
            padding: '8px',
            maxWidth: '236px'
        },

        '@media(max-width: 344px)': {
            maxWidth: 216,
            padding: 5,
            height: 84
        },
    },
});