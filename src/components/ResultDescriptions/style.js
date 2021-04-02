import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    resultDescriptions: {
        marginTop: 40
    },
    headingResult: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 580px)': {
            fontSize: 20,
            lineHeight: '24px',
        },
    },
    suitable: {
        display: 'flex',
        background: '#FFFFFF',
        border: '4px solid #C4C4C4',
        position: 'relative',
    },
    textContent: {
        padding: '47px 24px',
        flexGrow: 1,

        '@media(max-width: 580px)': {
            padding: 24,
        },
    },
    diagramBlock: {
        display: 'flex',
        alignItems: 'center'
    },
    percent: {
        display: 'flex',
        position: 'relative',

        '&:before': {
            content: "attr(data-per)'%'",
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 8
        }
    },
    diagramText: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 12,

        '& span': {
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: '22px',
            marginTop: 0,
            marginBottom: 0
        },
    },
    top: {
        color: '#1B1B1B',
    },
    bottom: {
        color: '#48A467'
    },
    mainText: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    headingMainText: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: '17px',
        color: '#000',
        marginTop: 0,
        marginBottom: 8
    },
    editChallenge: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: '15px',
        color: '#717784',
        marginTop: 0,
        marginBottom: 16
    },
    textChallenge: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '130%',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 0
    },
    imgContent: {
        width: '30%',
        minWidth: '30%',
        padding: 16,
        display: 'flex',
        justifyContent: 'flex-end',
        background: props => `url(${props.imageSrc}) no-repeat center center`,
        backgroundSize: '80%!important',

        '@media(max-width: 880px)': {
          display: 'none'
        },
    }
});