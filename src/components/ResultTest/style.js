import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    ResultTest: {
        display: 'flex',
        flexDirection: 'column'
    },
    loadingPage: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 680px)': {
            fontSize: 27,
            lineHeight: '33px',
            letterSpacing: '0.03em',
            marginBottom: 12,
        }
    },
    datePassed: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '130%',
        color: '#717784',
        marginTop: 0,
        marginBottom: 48,

        '& span': {
            color: '#1B1B1B',
        }
    },
    print: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#717784',
        marginRight: 42,
        cursor: 'pointer',

        '& svg': {
            marginLeft: 12,
        }
    },
    rightContent: {
        display: 'flex',
        alignItems: 'center',

        '@media(max-width: 900px)': {
            display: 'none'
        }
    }
});