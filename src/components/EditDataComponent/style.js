import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '46px',
        color: '#1b1b1b',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 650px)': {
            fontSize: 27,
            lineHeight: '38px',
        }
    },
});
