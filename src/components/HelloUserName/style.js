import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    helloUserName: {
        padding: 40,
        background: theme.main,
        marginBottom: 48,

        '@media(max-width: 1280px)': {
            padding: 20,
        },

        '@media(max-width: 620px)': {
            marginBottom: 24
        },
    },
    headingUser: {
        fontFamily: 'Proxima Nova Lt',
        fontWeight: 600,
        fontSize: 24,
        lineHeight: '29px',
        marginTop: 0,
        marginBottom: 8,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',

        '@media(max-width: 620px)': {
            fontSize: 20,
            lineHeight: '24px',
            marginBottom: 13,
        },

        '& img': {
            marginLeft: 11,
        },
    },
    text: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: '140%',
        color: '#ffffff',
        margin: 0,

        '@media(max-width: 620px)': {
            fontSize: 16,
        },

        '&:last-child': {
            display: 'flex',
            alignItems: 'center',

            '& img': {
                marginLeft: 11,
            }
        },

        '& a': {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
        },
    },
    bannerSchool: {
        width: '100%',
        maxWidth: '100%',
        marginBottom: 48,
    }
}));