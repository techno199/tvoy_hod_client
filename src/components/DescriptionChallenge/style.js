import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    descriptionChallenge: {
        marginTop: 48,
    },
    descriptionChallengeHeading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 580px)': {
            fontSize: 20,
            lineHeight: '24x',
        },
    },
    oneChallenge: {
        marginBottom: 24,
    },
    oneChallengeVal: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,

        '& svg': {
            width: 20,
            height: 20,
            marginRight: 16
        }
    },
    valueData: {
        width: 256,
        height: 38,
        boxSizing: 'content-box',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: '4px solid #C4C4C4'
    },
    valueTitle: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#1B1B1B',
        position: 'relative',
        zIndex: 3,
    },
    colorLine: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',

        '&:before': {
            content: "''",
            width: 6,
            height: 'calc(100% - 12px)',
            position: 'absolute',
            top: 6,
            right: -6,
            background: 'inherit'
        },
        '&:after': {
            content: "''",
            width: 12,
            height: 'calc(100% - 24px)',
            position: 'absolute',
            top: 12,
            right: -12,
            background: 'inherit'
        },
    },
    descriptionChallengeText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '130%',
        color: '#717784',
        marginTop: 0,
        marginBottom: 0
    },
    colorHelper: {
        position: 'absolute',
        left: 4,
        top: 4,
        display: 'block',
        width: 7,
        height: 'calc(100% - 8px)',
        zIndex: 112,
    }
});