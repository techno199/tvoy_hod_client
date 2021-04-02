import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 62,

        '@media(max-width: 580px)': {
            fontSize: 26,
            lineHeight: '31px',
            marginBottom: 32,
        }
    },
    banner: {
        minHeight: 308,
        border: '4px solid #C4C4C4',
        position: 'relative',
        padding: 48,
        display: 'flex',
        justifyContent: 'space-between',

        '@media(max-width: 740px)': {
            minHeight: 'auto'
        },

        '@media(max-width: 580px)': {
            padding: 32,
        }
    },
    headingBanner: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 580px)': {
            fontSize: 18,
            lineHeight: '22px',
        }
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '130%',
        color: '#717784',
        letterSpacing: '-0.0028em',
        marginTop: 0,
        marginBottom: 40,

        '@media(max-width: 580px)': {
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 25,
        }
    },
    robot: {
        marginTop: -100,

        '@media(max-width: 740px)': {
            display: 'none'
        }
    }
});