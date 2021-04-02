import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    InCount: {
        marginTop: 104,
        marginBottom: 52,

        '@media(max-width: 990px)': {
            marginTop: 52,
        }
    },
    heading: {
        marginTop: 0,
        marginBottom: 134,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 74,

        '@media(max-width: 990px)': {
            paddingLeft: 0,
            textAlign: 'center',
            marginBottom: 93,
            fontSize: 30,

            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 550px)': {
            textAlign: 'left',
            fontSize: 24,
        },

        '& span': {
            color: '#2162ab'
        }
    },
    countBlocks: {
        display: 'flex',
        justifyContent: 'space-between',

        '@media(max-width: 1200px)': {
            flexWrap: 'wrap',
            justifyContent: 'space-around',

            '& > div:not(:last-child)':{
                marginRight: '8px',
            },
            '& > div':{
                marginBottom: 60,
            }
        },
    }
});