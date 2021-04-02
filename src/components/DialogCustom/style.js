import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    vp_dialogRoot: {
        zIndex: '99999!important',

        '& .MuiBackdrop-root': {
            background: 'rgba(43, 56, 71, 0.5)'
        }
    },
    vp_paper: {
        boxSizing: 'border-box',
        width: props => props.widthDialog,
        maxWidth: 'calc(100% - 78px)',
        display: props => props.scroll === 'paper' && 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        marginTop: props => props.noFullScreen ? 50 : 0,
        marginBottom: props => props.noFullScreen ? 40 : 0,

        '@media(max-width: 800px)': {
            maxWidth:  props => props.noFullScreen ? 'calc(100% - 60px)' : '100%!important',
            margin: 0,
            minHeight: props => props.noFullScreen ? 'auto' : '100%',
        },

        '@media(max-width: 550px)': {
            maxWidth:  '100%!important'
        }
    },
    closeIcon: {
        position: 'absolute',
        top: 0,
        right: -35,
        cursor: 'pointer',
        color: '#fff',
        transition: 'all .3s',

        '@media(max-width: 1150px)': {
            right: 0,
            top: -30,
        },

        '@media(max-width: 550px)': {
            right: 20,
        },

        '&:hover': {
            transform: 'scale(1.1)'
        }
    }
});