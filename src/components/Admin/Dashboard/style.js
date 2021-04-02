import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    Dashboard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F6F6F6',
        height: '100%',
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '140%',
        color: '#2B3847',
        marginBottom: 48,
    }
});