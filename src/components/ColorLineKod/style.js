import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#1b1b1b',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 580px)': {
            fontSize: 20,
            lineHeight: '24px',
        }
    },
    lineWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#ffffff',
        marginBottom: 16,
        position: 'relative',
        border: '4px solid #C4C4C4',
    },
    fullLineColor: {
        position: 'absolute',
        top: 0,
        height: '100%'
    },
    blockLine: {
        width: 'calc(50% - 10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 54,
        position: 'relative',

        '&:last-child': {
            marginBottom: 0,
        },

        '&:nth-last-child(2)': {
            marginBottom: 0,
        }
    },
    middle: {
        width: 20,
        height: 54,
        position: 'relative',

        '&:before': {
            content: "''",
            position: 'absolute',
            top: 8,
            left: -8,
            height: 'calc(100% - 16px)',
            width: 'calc(100% + 16px)',
            background: 'inherit',
            zIndex: 11,
        },

        '&:after': {
            content: "''",
            position: 'absolute',
            top: 16,
            left: -16,
            height: 'calc(100% - 32px)',
            width: 'calc(100% + 32px)',
            background: 'inherit',
            zIndex: 11,
        }
    },
    progressLeft: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: '100%',
        background: '#ffffff',
    },
    progressRight: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        background: '#ffffff',
    },
    lineTitle: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#1B1B1B',
        position: 'relative',
        zIndex: 17,
    },
    rightTitle: {
        width: 150
    },
    blockLeft: {
        paddingLeft: 24,
        justifyContent: 'flex-start'
    },
    colorRight: {
        '&:before': {
            content: "''",
            width: 8,
            height: 'calc(100% - 16px)',
            position: 'absolute',
            top: 8,
            right: -8,
            background: 'inherit'
        },
        '&:after': {
            content: "''",
            width: 16,
            height: 'calc(100% - 32px)',
            position: 'absolute',
            top: 16,
            right: -16,
            background: 'inherit'
        },
    },
    colorLeft: {
        '&:before': {
            content: "''",
            width: 8,
            height: 'calc(100% - 16px)',
            position: 'absolute',
            top: 8,
            left: -8,
            background: 'inherit'
        },
        '&:after': {
            content: "''",
            width: 16,
            height: 'calc(100% - 32px)',
            position: 'absolute',
            top: 16,
            left: -16,
            background: 'inherit'
        },
    }
});