import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    BlockCount: {
        width: 'calc(33.3333333% - 16px)',
        height: 207,
        background: '#FFFFFF',
        border: '1px solid #E9E9E9',
        boxSizing: 'border-box',
        padding: 32,

        '@media(max-width: 1000px)': {
            minWidth: 345,
            marginBottom: 20,
            marginRight: 10,
            marginLeft: 10
        },

        '@media(max-width: 760px)': {
            minWidth: 'auto',
            width: '70%',
            marginRight: 0,
            marginLeft: 0
        },

        '@media(max-width: 550px)': {
            width: '100%',
        }
    },
    heading: {
        marginTop: 0,
        marginBottom: 8,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43'
    },
    textAndIcon: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: '140%',
        color: '#3B3F43',
        margin: 0,
        width: '77%',

        '@media(max-width: 1280px)': {
           fontSize: 18,
        }
    },
    img: {
        position: 'relative',
        left: 8,
        top: props => props.flag ? 29 : 20,
    }
});