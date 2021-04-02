import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        marginTop: 0,
        marginBottom: 39,
        color: '#1b1b1b',

        '@media(max-width: 1280px)': {
            marginBottom: 15
        }
    },
});
