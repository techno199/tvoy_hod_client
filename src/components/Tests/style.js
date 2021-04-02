import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'Bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 32
    },
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    loadingPage: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});