import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    subText: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: '19px',
        color: '#000',
        marginTop: 0,
        marginBottom: 32,
    },
    wrapField: {
        maxWidth: 432,
        marginBottom: 24,
        marginTop: 0,

        '@media(max-width: 650px)': {
            maxWidth: 'none',
        },

        '& div': {
            margin: 0,
        },

        '& .titleFieldSet': {
            marginBottom: 16,
        }
    },
    buttonWrap: {
        '& button': {
            '@media(max-width: 500px)': {
                width: '100%!important'
            },
        }
    }
});