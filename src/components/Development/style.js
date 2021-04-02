import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    blockDevelop: {
        border: '1px solid #DDE0E1',
        boxSizing: 'border-box',
        height: 310,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 18,
        color: '#1b1b1b',
        marginTop: 32,

        '@media(max-width: 650px)': {
            textAlign: 'center'
        },

        '& br': {
            display: 'none',

            '@media(max-width: 650px)': {
                display: 'block'
            }
        }
    },
    heading: {
        fontSize: 32,
        lineHeight: '39px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 39,
        color: '#1b1b1b'
    },
});
