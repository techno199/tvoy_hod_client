import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    headingTypeChallenge: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: '22px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 16
    },
    blockLine: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 54,
        boxSizing: 'content-box',
        background: '#fff',
        marginBottom: 8,
        position: 'relative',
        border: '4px solid #C4C4C4'
    },
    progress: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',

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
    lineTitle: {
        width: 235,
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#1B1B1B',
        position: 'relative',
        zIndex: 3,
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