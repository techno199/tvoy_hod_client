import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: 522,
        background: theme.main,
        padding: '61px 48px',
        boxSizing: 'border-box',

        '@media(max-width: 800px)': {
            height: 'auto',
            padding: '30px 20px',
        }
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',

        '& img': {
            width: 192,
            height: 'auto',
            marginBottom: 24,
        }
    },
    text: {
        maxWidth: 443,
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: '150%',
        color: '#FFFFFF',
        marginTop: 0,
        marginBottom: 40,

        '@media(max-width: 800px)': {
            maxWidth: 'none'
        }
    },
    link: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 54,
        minHeight: 54,
        background: '#fff',
        color: '#1b1b1b',
        textDecoration: 'none',
        transition: 'all .3s',

        '&:hover': {
            background: '#eee'
        }
    },
    imgContent: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        '& img': {
            height: 364,
            width: 'auto',

            '@media(max-width: 930px)': {
               height: 280
            },

            '@media(max-width: 800px)': {
                display: 'none'
            }
        }
    }
}));