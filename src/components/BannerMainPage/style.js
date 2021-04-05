import { makeStyles } from '@material-ui/core/styles';
import gamepadBackground from 'images/gamepadBackground.png';
import titleBackground from 'images/titleBackground.png'

export const useStyles = makeStyles(theme => ({
    wrapper: {
        backgroundColor: theme.brandColors.blackGray.main,
        paddingTop: '16px',
        paddingBottom: '92px',

    },
    bannerWrapper: {
        position: 'relative',
    },
    player: {
        '& .video-react-big-play-button': {
            display: 'none'
        }
    },
    gamepadBackground: {
        height: 558,
        width: '100%',
        position: 'absolute',
        paddingTop: '78px',
        top: 0,
        left: 0
    },
    buttonPlank:{
        display: 'flex',
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '16px',
    },
    registrationPlank:{
        padding: '15px 30px',
        marginTop: 13,
        background: theme.brandColors.blackGray.main,
        display : 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        '& span':{
            fontWeight: 700,
        }
    },
    banner: {
        background: `linear-gradient(180deg, #DBDFE8 0%, #39DEC8 115.08%)`,
        border: '12px solid rgba(219,223,232,1)',
        borderRadius: '32px',
        height: 558,
        padding: '69px 64px',
        display: 'flex',
        position: 'relative',
        marginBottom: 48,
        overflow: 'hidden',

        '@media(max-width: 1060px)': {
            height: 'auto',
            paddingBottom: 30,
        },
        '@media(max-width: 960px)': {
            marginTop: 16,
            marginBottom: 40,
            paddingBottom: 0,
        },
        '@media(max-width: 890px)': {
            paddingTop: 40,
            paddingLeft: 32,
            paddingRight: 32,
        },
        '@media(max-width: 700px)': {
            flexWrap: 'wrap',
            backgroundPosition: 'center 79%'
        },
        '@media(max-width: 500px)': {
            backgroundPosition: 'center bottom'
        },
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
        lineHeight: '120%',
        color: '#3b3f43',
        marginTop: 0,
        marginBottom: 24,
        background: `url(${titleBackground}) no-repeat center`,
        backgroundSize: 'cover',
        width: 450,
        height: 200,
        padding: '20px 40px',

        '@media(max-width: 1150px)': {
            fontSize: 30,
        },

        '@media(max-width: 850px)': {
            fontSize: 24,
            marginBottom: 16,
            height: 153,
            width: 344
        },

        '@media(max-width: 370px)': {
            width: 249,
            height: 153,
            padding: 0,
            paddingLeft: 14,
            paddingTop: 4,
            fontSize: '20px',
            marginBottom: '16px',
            background: `url(${titleBackground}) no-repeat top`,
            backgroundSize: 'contain',
        },
    },
    bigBreak: {
        color: '#ff7271'
    },
    actionBlock: {
        marginTop: 32,

        '& > h6': {
            paddingLeft: 13
        },

        '& button': {
            width: 256,
            height: 89,

            '& span': {
                fontSize: 24
            }
        }
    },
    textContent: {
        marginTop: '-41px',

        '& *': {
            fontFamily: 'Montserrat'
        },

        '& h4': {
            fontWeight: 700,
            fontSize: 42,
            color: theme.brandColors.blackGray.main,
            lineHeight: '42px',
        },
        '& h5': {
            fontWeight: 400,
            fontSize: 32,
            color: theme.brandColors.blackGray.main,
            lineHeight: '42px',
        },

        '& h6': {
            fontWeight: 300,
            fontSize: 22,
            color: theme.brandColors.blackGray.main,
            lineHeight: '24px',
        },

        '@media(max-width: 900px)': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 'none',
            flexDirection: 'column'
        },

        '@media(max-width: 850px)': {
            paddingRight: 15
        },

        '@media(max-width: 700px)': {
            paddingRight: 0,
            marginBottom: 10,
            maxWidth: 'none'
        },

        '@media(max-width: 890px)': {
            marginTop: 12
        },
    },
    imageContent: {
        flexGrow: 1,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 0,
        right: 0,

        '@media(max-width: 960px)': {
            alignItems: 'flex-end',
        },

        '@media(max-width: 900px)': {
            display: 'none',
        },

        '& img': {
            position: 'relative',

            '@media(max-width: 1256px)': {
                height: 495,
                bottom: -32,
                right: 113
            },

            '@media(max-width: 1199px)': {
                width: '133%',
                bottom: '-32px',
                right: '-64px'
            },

            '@media(max-width: 1150px)': {
                bottom: -32,
                width: '147%'
            },

            '@media(max-width: 1060px)': {
                bottom: -13,
                width: '154%',
            },

            '@media(max-width: 1025px)': {
                height: 350,
                bottom: -85
            },

            '@media(max-width: 960px)': {
                bottom: 0
            },

            '@media(max-width: 900px)': {
                display: 'none',
            },

            /*'@media(max-width: 850px)': {
                width: '130%',
                height: 'auto'
            },

            '@media(max-width: 700px)': {
                width: '100%',
                height: 'auto',
                position: 'static',
                marginRight: 0
            }*/
        }
    },
    lightX: {
        position: 'absolute',
        left: -45,
        top: 160,
    },
    lightO: {
        position: 'absolute',
        left: '50%',
        top: -15,
    },
    lightD: {
        position: 'absolute',
        bottom: 72,
        right: -56,
    },
    transparentGeometry: {
        width: '100%',
        bottom: 0,
        left: '0',
        position: 'absolute',
    },
    countdownPlank:{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        padding: '23px 35px',
        backgroundColor: '#e1faf7',
        borderRadius: '25px',
    },
    countdownIcon:{
        marginRight: 55,
    },
    countdownText:{
        color: theme.brandColors.blackGray.main,
        fontSize: 23,
        fontFamily: 'Montserrat',
        '& + div':{
            margin: '0 0 0 auto'
        }
    },
}));