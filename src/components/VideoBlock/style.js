import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    VideoBlock: {
        marginBottom: 104,

        '@media(max-width: 990px)': {
            marginBottom: 52,
        }
    },
    heading: {
        marginTop: 0,
        marginBottom: 48,
        paddingLeft: 207,
        position: 'relative',

        '& img':{
            position: 'absolute',
            left: '61px',
            bottom: '27px'
        },

        '& *':{
            fontFamily: 'Inter',
            fontWeight: 800,
            fontSize: 48,
            lineHeight: '140%',
            color: '#3B3F43',
        },

        '@media(max-width: 990px)': {
            paddingLeft: 0,
            marginBottom: 24,


            '& *':{
                fontSize: 30,
            },

            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 550px)': {

            '& *':{
                textAlign: 'left',
                fontSize: 24,
            },
        },

        '& span': {
            color: '#ff7271'
        },
    },
    wrapContent: {
      marginTop: 0,
      display: 'flex',
        justifyContent: 'center',

        '@media(max-width: 1200px)': {
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center'
        }
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
    img: {
        width: '100%',
        height: 'auto',
        display: 'block'
    },
    result: {
        flexGrow: 1,
        paddingTop: 54,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',

        '@media(max-width: 1200px)': {
            width: '100%',
            paddingLeft: 0
        },

        '@media(max-width: 1085px)': {
            justifyContent: 'space-around'
        },

        '@media(max-width: 680px)': {
            width: '100%',
            paddingTop: 36,
        },

        '@media(max-width: 557px)': {
            justifyContent: 'center',
            paddingTop: '81px'
        },
    },
    itemResult: {
        display: 'flex',
        alignItems: 'center',
        padding: '57px 24px 40px 24px',
        marginBottom: '61px',
        border: '4px solid #ff7271',
        position: 'relative',
        height: 231,
        width: 264,

    },
    imgIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        top: '-42px',
        height: 84,

        /*'@media(max-width: 680px)': {
            width: 67,
            minWidth: 67,
            height: 67,
            marginRight: 16,
        },*/

        '& img': {
            /*'@media(max-width: 680px)': {
                width: 33,
                height: 'auto',
            },*/
        }
    },
    img1:{
        top: '-56px',
        left: '68px'
    },
    img2:{
        top: '-44px',
        left: '84px'
    },
    img3:{
        top: '-55px',
        left: '99px'
    },
    img4:{
        top: '-47px',
        left: '90px'
    },
    descriptions: {
        fontFamily: 'Inter',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 0
    },
    number:{
        fontWeight: 600,
        fontSize: '48px',
        color: '#FF7271',
        marginBottom: '32px',
        textAlign: 'center',
        display: 'block'

    },
    smallContent:{
        display: 'none',
        '@media(max-width: 557px)':{
            display: 'flex'
        }
    },
    largeContent:{
        display: 'flex',
        '@media(max-width: 557px)':{
            display: 'none'
        }
    }
});