import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    changeChallenge: {
        marginTop: 48,
    },
    headingChangeChallenge: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: '22px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 16
    },
    changeChallengeText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '130%',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 16
    },
    buttonBlock: {
        marginTop: 24,

        '@media(max-width: 580px)': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
    },
});