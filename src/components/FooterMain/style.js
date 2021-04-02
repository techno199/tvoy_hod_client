import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    FooterMain: {
        borderTop: '1px solid #E9E9E9',
        paddingTop: 30,

        '@media(max-width: 870px)': {
            paddingTop: 0,
            borderTop: 0
        }
    },
    topFooter: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    bottomFooter: {
        display: 'flex',
        paddingTop: 32,
        paddingBottom: 32,
    },
    topPart: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 64,

        '&:last-child': {
            marginRight: 0,
            flex: 1
        }
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: 'rgba(59,63,67,.5)',
        marginTop: 0,
        marginBottom: 8
    },
    navlink: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#1B1B1B',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        marginBottom: 20,

        '&:last-of-type': {
            marginBottom: 0,
        },

        '& svg': {
            marginRight: 8,
        }
    },
    socialBlock: {
        display: 'flex',
        justifyContent: 'flex-end',

        '& a': {
            width: 40,
            height: 40,
            marginLeft: 16,
        }
    },
    store: {
        marginBottom: 8,

        '&:last-of-type': {
            marginBottom: 0
        }
    },
    textLink: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: '24px',
        color: '#3B3F43',
        textDecoration: 'none',
        marginTop: 0,
        marginBottom: 16,
        borderBottom: '1px solid rgba(59,63,67, .4)',
        paddingBottom: 4,

        '&:last-of-type': {
            marginBottom: 0
        }
    },
    downloadLink: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '17px',
        color: 'rgba(59, 63, 67, 0.5)',
        marginTop: 0,
        marginBottom: 0,
        marginRight: 24,
        textDecoration: 'none',

        '&:last-of-type': {
            marginRight: 0,
        }
    },
    goToAdmin: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '17px',
        color: 'rgba(59, 63, 67, 0.5)',
        marginTop: 0,
        marginBottom: 0,
        marginRight: 112,
        textDecoration: 'none',
        borderBottom: '1px solid rgba(59, 63, 67, 0.2)',
        paddingBottom: 8,

        '@media(max-width: 960px)': {
            marginRight: 24,
        }
    },
    goToTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 98,
        borderTop: '1px solid rgba(143,149,200,.4)',
    },
    toTopText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 0
    }
});