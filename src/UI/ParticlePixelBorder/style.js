import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    tripleLeft: {
        width: 28,
        height: 28,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        top: '17px',
        left: 0,
    },
    tripleRight: {
        width: 28,
        height: 28,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        top: '17px',
        right: 0,
    },
    filled:{
        width: 14,
        height: 14,
        background: props => props.color,
    },
    empty:{
        width: 14,
        height: 14,
        background: 'transparent',
    },
    singleRight:{
        position: 'absolute',
        width: 14,
        height:14,
        right: 0,
        bottom: 0,
        background: props => props.color
    },
    singleLeft:{
        position: 'absolute',
        width: 14,
        height:14,
        left: 0,
        bottom: 0,
        background: props => props.color
    }
});