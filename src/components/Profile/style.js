import { makeStyles }           from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginBottom: 48,
        marginTop: 0,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',

        '@media(max-width: 1280px)': {
            fontSize: 27,
            lineHeight: '38px',
        },

        '@media(max-width: 620px)': {
            marginBottom: 37,
            justifyContent: 'space-between'
        },
    },
    Profile: {
        '& .flat_button': {
            background: 'red'
        }
    },
    bonus: {
        position: 'relative',
        background: '#EAF3FF',
        marginLeft: 62,

        '@media(max-width: 1100px)': {
            display: 'none'
        },

        '@media(max-width: 620px)': {
            marginRight: 14
        },

        '&:before': {
            content: "''",
            top: 7,
            left: -7,
            width: 7,
            height: 'calc(100% - 14px)',
            position: 'absolute',
            background: 'inherit'
        },

        '&:after': {
            content: "''",
            top: 14,
            left: -14,
            width: 14,
            height: 'calc(100% - 28px)',
            position: 'absolute',
            background: 'inherit'
        }
    },
    inner: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: 'inherit',

        '&:before': {
            content: "''",
            top: 7,
            right: -7,
            width: 7,
            height: 'calc(100% - 14px)',
            position: 'absolute',
            background: 'inherit'
        },
        '&:after': {
            content: "''",
            top: 14,
            right: -14,
            width: 14,
            height: 'calc(100% - 28px)',
            position: 'absolute',
            background: 'inherit'
        }
    },
    bonusSpan: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 60,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#3F94F6',
        fontSize: 14,
        padding: '12px 9px',
        position: 'relative',
        zIndex: 17,

        '& img': {
            width: 24,
            height: 24
        }
    },
    loadingPage: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));