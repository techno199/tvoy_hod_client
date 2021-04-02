import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    section: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 32,
    },
    icon: {
        width: 38,
        margin: 0,
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#000',
        width: 260,
        margin: 0,

        '@media(max-width: 650px)': {
            display: 'none'
        }
    },
    value: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 18,
        color: 'rgba(0,0,0,.4)',
        width: 300,
        margin: 0,
        display: 'flex',
        alignItems: 'center',

        '@media(max-width: 650px)': {
            width: 'auto',
            marginRight: 15,
            color: '#1b1b1b',
            fontSize: 15,
            whiteSpace: 'nowrap',
        }
    },
    activeSpan: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#488BFF',
        cursor: 'pointer',

        '@media(max-width: 650px)': {
            flexGrow: 1,
            textAlign: 'right',
            fontSize: 15,
        }
    },
    psw: {
        position: 'relative',
        top: 5
    }
});
