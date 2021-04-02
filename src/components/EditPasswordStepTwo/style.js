import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    subText: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: '19px',
        color: '#000',
        marginTop: 0,
        marginBottom: 24,
        maxWidth: 660,
    },
    buttomWrap: {
        '& button': {
            '@media(max-width: 500px)': {
                width: '100%!important'
            },
        }
    },
    wrapStepTwo: {
        maxWidth: 432
    }
});
