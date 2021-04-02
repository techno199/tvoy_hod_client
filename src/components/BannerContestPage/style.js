import { makeStyles } from '@material-ui/core/styles';
import PixelBackgroundDesktop from 'images/PixelBackgroundDesktop.png';
import smallBackground from 'images/smallBackground.png';

import titleBackground from 'images/titleBackground.png'

export const useStyles = makeStyles({
    bg:{
        backgroundImage: 'url(images/pixelBG.png)',

    },
    player: {
        '& .video-react-big-play-button': {
            display: 'none'
        }
    },
    smallCloud:{
        width: 551,
        position: 'relative',
        left: 40,

        '& > div > br':{
            display: 'none',
            '@media(max-width: 850px)':{
                display: 'block'
            }
        },

        '@media(max-width: 370px)':{
            background: `url(${smallBackground}) no-repeat center`,
            width: '254px !important',
            backgroundSize: 'contain'
        },

        '& > img':{
            position: 'absolute',


            '@media(max-width: 900px)':{
                width: '100%',
                height: 83
            },

            '@media(max-width: 850px)':{
                textAlign: 'center',
                fontSize: 14,
                height: 86,
                width: 340,
                left: 52,
                top: 5
            },

            '@media(max-width: 370px)':{
                display: 'none'
            }
        },

        '& div':{
            padding: 12,
            fontFamily: 'Inter',
            fontSize:17,
            fontWeight: 700,
            color: '#43508E',
            height: 91,
            textAlign: 'right',
            position: 'relative',

            '@media(max-width: 900px)':{
                textAlign: 'center',
                fontSize: 14,
                height: 88
            },

            '@media(max-width: 370px)':{
                textAlign: 'center',
                fontSize: 11,
                height: 78
            }

        },
        '& kbd':{
            color: "#FF7271",
            fontFamily: 'Inter',
        },

        '@media(max-width: 900px)':{
            width: 446,
            left: 0,
        }
    },
    banner: {
        background: `url(${PixelBackgroundDesktop}) no-repeat right center`,
        height: 559,
        padding: '69px 64px',
        display: 'flex',
        position: 'relative',
        marginBottom: 48,
        overflow: 'hidden',
        /*'@media(max-width: 1150px)': {
            height: 420,
        },*/
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

        '@media(max-width: 370px)':{
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
    bigBreak:{
        color: '#ff7271'
    },
    textContent: {
        maxWidth: 493,
        marginTop: '-41px',

        '@media(max-width: 900px)': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 'none',
            flexDirection: 'column'
        },

        '@media(max-width: 890px)': {
            marginTop: 0
        },

        '@media(max-width: 850px)': {
            paddingRight: 15,
            '& > img':{
                maxWidth: 344
            }
        },

        '@media(max-width: 700px)': {
            paddingRight: 0,
            marginBottom: 10,
            maxWidth: 'none'
        },

        '@media(max-width: 370px)': {
            '& > img':{
                maxWidth: 249
            }
        },

        '& button': {
            background: '#fff!important',
            color: '#1b1b1b',
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 16,
            paddingLeft: 0,
            paddingRight: 0,
            border: '0!important',
            transition: 'all .3s',

            '&:hover': {
                background: '#eee!important',
                border: 0,
            }
        }
    },
    subTitle: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '140%',
        color: '#FFFFFF',
        marginTop: 0,
        marginBottom: 48,

        '@media(max-width: 890px)': {
            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 850px)': {
            marginBottom: 24,
        }
    },
    imageContent: {
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        '@media(max-width: 960px)': {
            alignItems: 'flex-end',
        },

        '@media(max-width: 900px)': {
            display: 'none',
        },

        '& img': {
            position: 'relative',
            bottom: '-8px',
            right: '159px',

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
    getCertificate: {
        height: 123,
        background: '#5CC0C4',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        paddingLeft: 0,
        paddingRight: 0,

        '@media(max-width: 938px)': {
            minHeight: '123px',
        },

        '@media(max-width: 880px)': {
            flexWrap: 'wrap',
            height: 'auto',
            padding: 32,
        },

    },
    getCertificateContent:{
        height: '100%',
        paddingLeft: 74,
        paddingRight: 26,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',


        '@media(max-width: 880px)': {
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: 26
        },
    },
    certAndText:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& span': {
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 20,
            marginLeft: 28,
            color: '#fff',

            '@media(max-width: 880px)': {
                width: '100%',
                marginBottom: 24,
                fontSize: 18,
                marginLeft: 0,
                textAlign: 'center'
            },
        },

        '& svg':{
            '@media(max-width: 938px)': {
                display: 'none'
            },
        },
    },
    certificateButton:{
        height: '100%',
        width: '214px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        '& button':{
            fontFamily: 'Inter',
            fontWeight: 'normal',
            border: '0!important',
            fontSize: 16,
            background: '#2484FF!important',
            paddingLeft: 0,
            paddingRight: 0,
            color: '#FFFFFF',
            transition: 'all .3s',

            '&:hover': {
                background: '#4294FF!important'
            }
        }
    },
    btnAndVideo: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '80px',


        '@media(max-width: 1220px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },

        '@media(max-width: 900px)': {
            marginTop: '6px'
        },

        '@media(max-width: 700px)': {
            flexDirection: 'column',
            alignItems: 'center'
        },

        '& button': {
            marginRight: 42,

            '@media(max-width: 1220px)': {
               marginRight: 0,
            },
        },

        '& > div':{
            marginRight: '19px',
            '@media(max-width: 900px)': {
                marginBottom: '6px'
            },

            '@media(max-width: 1220px)': {
                marginRight: '0',
            },
        },
    },
    videoHello: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '110%',
        color: '#fff',
        display: 'inline-block',
        borderBottom: '1px solid rgba(255,255,255,.4)',
        paddingBottom: 7,
        cursor: 'pointer',

        '@media(max-width: 1220px)': {
           marginTop: 22,
            border: 0,
        },
        '@media(max-width:960px)': {
           marginBottom: 30,
        },
        '@media(max-width:700px)': {
           marginBottom: 0,
        },
    },
    videoIcon:{
        marginRight: 8
    }
});