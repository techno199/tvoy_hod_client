import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    videoCarouselContainer:{
        width: '80%',
        margin: '0 auto',

        '@media(max-width: 450px)': {
            width: 225,
            margin: '0 auto'
        },
    },
    sect:{
        marginBottom: 100
    },
    video: {
        width: '100%',
        maxWidth: 810,

        '@media(max-width: 1200px)': {
            maxWidth: '70%'
        },

        '@media(max-width: 680px)': {
            maxWidth: 'none',
            marginLeft: -15,
            width: 'calc(100% + 30px)'
        },

        '& .video-react-big-play-button': {
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    headingVideo: {
        height: 42,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingLeft: 17,
        background: '#F1F1F1',

        '@media(max-width: 680px)': {
            display: 'none'
        },
    },
    curcle: {
        width: 10,
        height: 10,
        marginRight: 7,
        boxSizing: 'border-box',
    },
    red: {
        background: '#F96057',
    },
    yellow: {
        background: '#F8CE52',
    },
    green: {
        background: '#5FCF65',
    },
}))