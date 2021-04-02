import { makeStyles } from '@material-ui/core/styles';
import tvoy_kodHeader from 'images/tvoy_kodHeader.svg';

export const useStyles = makeStyles({
    titleTest: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 48,

        '@media(max-width: 650px)': {
           marginBottom: 24
        }
    },
    card: {
        background: '#FFFFFF',
        marginBottom: 24,
    },
    cardHeader: {
        display: 'block',
        height: 88,
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${tvoy_kodHeader})`,
        backgroundRepeat: 'repeat-x'
    },
    dopImg: {
        position: 'absolute',
        right: 75,
        bottom: 0,

        '@media(max-width: 650px)': {
            display: 'none'
        }
    },
    testContent: {
        display: 'flex',
        flexDirection: 'column',
        border: '4px solid #C4C4C4',
        padding: '20px 28px',
        position: 'relative',

        '@media(max-width: 650px)': {
            padding: '28px 20px',
        }
    },
    counter: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: '24px',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 650px)': {
            fontSize: 30,
            lineHeight: '36px',
        }
    },
    questionTitle: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: '130%',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 32,

        '@media(max-width: 650px)': {
            marginBottom: 24,
        }
    },
    buttonsBlock: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 24,

        '@media(max-width: 580px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }
    },
    backButton: {
        marginRight: 12,
        marginLeft:12,

        '@media(max-width: 650px)': {
            width: 246
        },

        '@media(max-width: 580px)': {
            marginRight: 0,
            marginLeft:0,
        }
    },
    forwardButton: {
        marginRight: 12,
        marginLeft:12,

        '@media(max-width: 650px)': {
            width: 246
        },

        '@media(max-width: 580px)': {
            marginRight: 0,
            marginLeft:0,
            marginBottom: 17,
            order: -1
        }
    }
});