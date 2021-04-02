import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    OneOrganizer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 288,
        background: '#FFFFFF',
        border: '4px solid #eeeeee',
        position: 'relative',
        boxSizing: 'border-box',
        marginRight: props => props.last ? 0 : 12,
        marginLeft: props => props.first ? 0 : 12,
        backdropFilter: 'blur(0px)',

        '@media(max-width: 1150px)': {
           height: 200
        },

        '@media(max-width: 500px)': {
            height: 121,
        }
    },
    img: {
        '@media(max-width: 1150px)': {
            width: '47%',
            maxHeight: '75%',
        },

        '@media(max-width: 500px)': {
            width: '50%',
            maxHeight: 'none'
        },
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '140%',
        color: 'rgba(0, 0, 0, 0.5)',
        display: 'inline-block',
        marginTop: 14,
        marginBottom: 0,
        textAlign: 'center',

        '@media(max-width: 850px)': {
            fontSize: 12
        },

        '@media(max-width: 500px)': {
            display: 'none'
        },
    }
});