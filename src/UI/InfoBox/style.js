import makeStyles from "@material-ui/core/styles/makeStyles";


export const useStyles = makeStyles(theme => ({
    wrapper:{
        position: 'relative',
        maxWidth: 264,
        width: '100%',
        marginRight: '8px',
        marginBottom: '8px',
        height: 231,
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: '4px solid #FF7271',
        borderRadius: '2px',

        '@media(max-width: 575px)': {
            width: '100%',
            height: 150
        },
    },
    title:{
        fontSize: '48px',
        fontWeight: 600,
        color: '#FF7271',

        '@media(max-width: 575px)': {
            fontSize: 25
        },
    },
    description:{
        fontSize: '14px',
        textAlign: 'center',

        '@media(max-width: 575px)': {
            fontSize: 10
        },
    },
    icon:{
        height: 80,

        '@media(max-width: 575px)': {
            height: 39
        },
    },
    subDescriptions: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 8,
        lineHeight: '150%',
        color: '#000',
        marginTop: 8,
        textAlign: 'center',
        marginBottom: 0
    },
}));