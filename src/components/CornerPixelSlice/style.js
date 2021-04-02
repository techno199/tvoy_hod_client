import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    CornerPixel: {
        width: props => props.size || 13,
        height: props => props.size || 13,
        display: 'flex',
        flexWrap: 'wrap',
        background: '#fff',
        position: 'absolute',

        '& > div': {
            width: '33.33333333%',
            height: '33.33333333%',
        }
    },
    topLeft:{
        width: props => props.size * 2,
        height: props => props.size * 2,
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: '111',
        position: 'absolute',
        top: 0,
        left: '-1px',
        '& > div': {
            position: 'relative',
            width: '50%',
            height: '50%',
        }
    },
    topRight:{
        width: props => props.size * 2,
        height: props => props.size * 2,
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: '111',
        position: 'absolute',
        top: 0,
        right: '-1px',
        '& > div': {
            position: 'relative',
            width: '50%',
            height: '50%',
        }
    },
    bottomLeft:{
        width: props => props.size * 2,
        height: props => props.size * 2,
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: '111',
        position: 'absolute',
        bottom: 0,
        left: '-1px',
        '& > div': {
            width: '50%',
            height: '50%',
            position: 'relative',
        }
    },
    bottomRight:{
        width: props => props.size * 2,
        height: props => props.size * 2,
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: '111',
        position: 'absolute',
        bottom: 0,
        right: '-1px',
        '& > div': {
            width: '50%',
            height: '50%',
            position: 'relative',
        }
    },
    white:{
        background: 'white'
    },
    empty:{
        background: 'transparent'
    }
});