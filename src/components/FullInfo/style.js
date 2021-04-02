import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    FullInfo: {
        padding: 40,

        '@media(max-width: 800px)': {
            padding: 20,
        }
    },
    wrapScrollContent: {
      flexGrow: 1,

    '& .view': {
        boxSizing: 'border-box',
        padding: '0!important'
    }
    },
    link: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '19px',
        color: 'white',
        marginBottom: 0,
        textDecoration: 'none'
    },
    textAndImg: {
        display: 'flex',

        '@media(max-width: 800px)': {
            flexDirection: 'column'
        }
    },
    img: {
        display: 'block',
        width: 298,
        height: 'auto',
        marginRight: 32,
        alignSelf: 'flex-start',

        '@media(max-width: 800px)': {
            width: '100%',
            marginRight: 0,
            maxHeight: 400,
            objectFit: 'cover',
            marginBottom: 24,
        },

        '@media(max-width: 500px)': {
            maxHeight: 250,
        }
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 16
    }
});