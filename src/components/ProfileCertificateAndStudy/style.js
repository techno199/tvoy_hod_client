import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    ProfileCertificateAndStudy: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 100,

        '@media(max-width: 670px)': {
            flexWrap: 'wrap',
            marginTop: 48
        }
    },
    myTraining: {
        width: 'calc(50% - 11px)',
        minHeight: 272,
        background: '#272C5B',
        position: 'relative',
        padding: 32,

        '@media(max-width: 670px)': {
            width: '100%',
            marginBottom: 24,
        }
    },
    leftBlock: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',

        '@media(max-width: 1300px)': {
            width: '100%',
            height: '100%'
        }
    },
    headingLeftPart: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 16
    },
    textLeftPart: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '130%',
        color: '#fff',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 1300px)': {
            flexGrow: 1
        }
    },
    girlTraining: {
        position: 'absolute',
        bottom: 0,
        right: 30,

        '@media(max-width: 1300px)': {
            display: 'none'
        }
    },
    myCert: {
        display: 'flex',
        width: 'calc(50% - 11px)',
        border: '4px solid #272C5B',
        position: 'relative',
        padding: 28,

        '@media(max-width: 670px)': {
            width: '100%',
        }
    },
    leftCert: {
       width: '60%',

        '@media(max-width: 1300px)': {
            width: '100%',
            minWidth: '100%'
        }
    },
    rightCert: {
        width: '40%',
        display: 'flex',
        justifyContent: 'flex-end',

        '& img': {
            alignSelf: 'flex-start',

            '@media(max-width: 1300px)': {
                display: 'none'
            }
        }
    },
    certHeading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 16
    },
    certText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '130%',
        color: '#717784',
        marginTop: 0,
        marginBottom: 42,

        '@media(max-width: 670px)': {
            marginBottom: 24
        }
    },
});