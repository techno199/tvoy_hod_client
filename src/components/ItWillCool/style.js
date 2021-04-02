import {makeStyles} from "@material-ui/core";
import darkBlue from 'images/darkBlue.png'
import mint from 'images/mint.png'
import purple from 'images/purple.png'


export const useStyles = makeStyles(theme => ({
    wrapper:{
        '& h3':{
            fontFamily: 'Inter',
            fontWeight: 800,
            fontSize: '48px',
            paddingLeft: 208,
            color: 'black',
            position: 'relative',
            marginBottom: 40,

            '& img':{
                '@media(max-width: 1280px)':{
                    display: 'none'
                }
            },

            '& span':{
                color: '#aa70cf'
            },
            '@media(max-width: 990px)': {
                paddingLeft: 0,
                textAlign: 'left',
                marginBottom: 24,
                fontSize: 30,
                display: 'flex',
                flexWrap: 'wrap',

                '& br': {
                    display: 'none'
                }
            },

            '@media(max-width: 550px)': {
                textAlign: 'left',
                fontSize: 24,
            },
        }
    },
    titleIcon:{
        position: 'absolute',
        top: '50%',
        left: '65px',
        transform: 'translate(0,-50%)'
    },

    bannersWrapper:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'relative',
        flexWrap: 'wrap',

        '& > div':{
            maxWidth: 391,
            maxHeight: 382,
            paddingRight: '16px',
            marginBottom: 79,

            '@media(max-width: 660px)':{
                paddingRight: 0
            }
        },

        '@media(max-width: 1255px)':{
            justifyContent: 'center'
        },

        '@media(max-width: 660px)':{
            paddingRight: 0,
            marginRight: 0
        }
    },
    blueBanner:{
        width: '100%',
        height: 382,
        backgroundImage: `url(${darkBlue})`,
        '@media(max-width: 660px)':{
            width: '300px !important',
            height: 283,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        }
    },
    mintBanner:{
        width: '100%',
        height: 382,
        backgroundImage: `url(${mint})`,
        '@media(max-width: 660px)':{
            width: '300px !important',
            height: 283,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        }
    },
    purpleBanner:{
        width: '100%',
        height: 382,
        backgroundImage: `url(${purple})`,
        '@media(max-width: 660px)':{
            width: '300px !important',
            height: 283,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        }
    },
    bannerContent:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginRight: 8,

        '@media(max-width: 828px)':{
            marginRight: 0,

        }
    },
    bigNum:{
        fontWeight: 600,
        color: '#fff',
        fontSize: 107,
        height: 150,

        '@media(max-width: 660px)':{
            height: 94,
            fontSize: 78
        }
    },
    midTitle:{
        fontWeight: 400,
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        height: 35,

        '@media(max-width: 660px)':{
           fontSize: 19,
            height: 35,
            paddingTop: 8
        }
    },
    lowTitle:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        height: 75,
        paddingTop: 8,
        '@media(max-width: 660px)':{
            fontSize: 14,
            paddingTop: 13
        }
    },
    littleBanner:{
        position: 'relative',
        marginRight: 16
    },
    flash:{
        position:'absolute',
        top: -53,
        zIndex: 1,
        left: 48
    },
    ruble:{
        position: 'absolute',
        left: 50,
        top: -55,
        zIndex: 1
    },
    cup:{
        position: 'absolute',
        left: 28,
        top: -43,
        zIndex: 1
    },
    rocket:{
        position: 'absolute',
        left: 50,
        top: -50,
        zIndex: 1
    },
    bag:{
        position: 'absolute',
        left: 50,
        top: -50,
        zIndex: 1
    },
    highTitle:{
        fontWeight: 600,
        fontSize: 48,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',

        '& span':{
            fontWeight: 400,
            fontSize: 24,
            textAlign: 'center',

            '@media(max-width: 450px)':{
                fontSize: 19
            }
        },

        '@media(max-width: 450px)':{
            fontSize: 33
        }
    },
    artekIcon:{
        position: 'relative',
        top: -10
    },
    family:{
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center',

        '& span':{
            fontSize: 23,

            '@media(max-width: 450px)':{
                fontSize: 19
            }
        },

        '@media(max-width: 450px)':{
            fontSize: 24
        }
    },

}))