import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontSize: 32,
        lineHeight: '39px',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 59,

        '@media(max-width: 960px)': {
            marginBottom: 30
        }
    },
});
