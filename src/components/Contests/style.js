import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 48
    },
    subHeading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '110%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 40
    },
    wrapSteps: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        '@media(max-width: 1330px)': {
            flexDirection: 'column'
        }
    },
});