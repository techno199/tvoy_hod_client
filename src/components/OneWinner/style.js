import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    OneWinner: {
        display: 'flex',
        padding: 40,
        boxSizing: 'border-box',

        '@media(max-width: 700px)': {
            flexDirection: 'column'
        }
    },
    img: {
        width: 110,
        minWidth: 110,
        height: 110,
        borderRadius: '50%',
        marginRight: 16,

        '@media(max-width: 700px)': {
            width: 82,
            minWidth: 82,
            height: 82,
        }
    },
    noPhoto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        minWidth: 110,
        height: 110,
        borderRadius: '50%',
        marginRight: 16,
        background: '#e7e7e7',

        '& img': {
            width: 40,
            height: 'auto'
        }
    },
    content: {
        flexGrow: 1,
    },
    fio: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 13
    },
    region: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 700px)': {
            marginBottom: 0
        }
    },
    titleLong: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '140%',
        color: 'rgba(59, 63, 67, 0.5)',
        marginTop: 0,
        marginBottom: 16
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 0
    },
    wrapImg: {
        '@media(max-width: 700px)': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 8
        }
    }
});