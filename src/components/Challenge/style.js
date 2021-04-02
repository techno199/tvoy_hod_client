import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    Challenge: {
        marginBottom: 104,

        '@media(max-width: 600px)': {
            marginBottom: 52,
        },
    },
    fireImage:{
        position: 'absolute',
        top: '-115px',
        right: '22px'
    },
    heading: {
        marginTop: 0,
        marginBottom: 48,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 207,

        '@media(max-width: 990px)': {
            paddingLeft: 0,
            marginBottom: 24,
            fontSize: 30,

            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 900px)': {
            textAlign: 'center'
        },

        '@media(max-width: 550px)': {
            textAlign: 'left',
            fontSize: 24,
        },

        '& span': {
            color: '#2162ab',
            position: 'relative'
        }
    },
});