import { makeStyles } from "@material-ui/core";


export const useFieldSetStyles = makeStyles(theme => ({
    fieldSet: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: props => props.dense ? 0 : theme.spacing(3),
        width: '100%',
        position: 'relative',

        '& input[type="number"]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },

        '& input[type="number"]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },

        '& input[type="number"]': {

        }
    },
    title: {
        fontWeight: props => props.thin ? 400 : 600,
        fontFamily: 'Proxima Nova Rg, sans-serif',
        fontSize: props => props.dense ? 16 : 18,
        lineHeight: '22px',
        marginBottom: props => props.dense ? 0 : theme.spacing(2),
        color: props => props.dark ? 'white' : theme.palette.text.primary,
    },
    subtitle: {
        marginLeft: theme.spacing(0.5),
        color: '#A4A6BA',
        fontWeight: 'normal',
        fontSize: props => props.dense ? 16 : 18,
    },
    description: {
        marginBottom: theme.spacing(2),
        color: props => props.dark ? theme.light : theme.dark,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '19px',

    },
    underfield: {
        fontSize: 16,
        lineHeight: '19px',
        fontWeight: 'normal',
        marginTop: theme.spacing(2)

    },
    noteLink: {
        position: 'absolute',
        bottom: '-46px',
        right: 0,
        zIndex: 99
    },
    error: {
        fontSize: 16,
        lineHeight: '19px',
        fontWeight: 'normal',
        marginTop: theme.spacing(2)
    },
}));