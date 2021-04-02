import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    personalDataForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    formGroup: {
        width: 'calc(50% - 12px)',
        marginBottom: 24,

        '@media(max-width: 650px)': {
            width: '100%'
        },

        '&  div': {
            margin: 0
        },

        '& .titleFieldSet': {
            marginBottom: 16,
        }
    },
    bottomWrap: {
        marginTop: 16,

        '@media(max-width: 500px)': {
            width: '100%'
        },

        '& .loader': {
            marginLeft: 10,
        },

        '& button': {
            '@media(max-width: 500px)': {
                width: '100%!important'
            }
        }
    },
    lastName: {
        '@media(max-width:650px)': {
            order: -1
        }
    }
});
