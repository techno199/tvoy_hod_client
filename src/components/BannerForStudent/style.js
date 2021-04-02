import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 364,
        background: '#FF5252',
        padding: '61px 48px',
        boxSizing: 'border-box',

        '@media(max-width: 600px)': {
            height: 'auto',
            padding: '30px 20px',
        }
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',

        '& img': {
            width: 213,
            height: 'auto',
            marginBottom: 16,
        }
    },
    text: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: '150%',
        color: '#FFFFFF',
        marginTop: 0,
        marginBottom: 32,

        '@media(max-width: 810px)': {
            '& br': {
                display: 'none'
            }
        }
    },
    link: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 159,
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
            height: 413,
            width: 'auto',

            '@media(max-width: 920px)': {
                height: 300
            },

            '@media(max-width: 720px)': {
                height: 200
            },

            '@media(max-width: 600px)': {
                display: 'none'
            }
        }
    }
});