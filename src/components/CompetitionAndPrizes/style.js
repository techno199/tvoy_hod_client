import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    CompetitionAndPrizes: {
        marginBottom: 104,

        '@media(max-width: 990px)': {
            marginBottom: 52,
        },

        '& .swiper-container': {
            paddingTop: '48px!important',
            paddingBottom: '48px!important',

            '@media(max-width: 990px)': {
                paddingTop: '24px!important',
                marginBottom: '0px!important'
            }
        },
        '& .slick-list': {
            paddingTop: 48,
            paddingBottom: 48,
        },
        '& .slick-dots li button:before': {
            fontSize: 9,
            color: 'rgba(22, 44, 78, 0.3)',
            opacity: 1,
        },
        '& .slick-dots li.slick-active button:before': {
            fontSize: 12,
            color: '#162C4E'
        },
        '& .slick-dots': {
            display:'flex!important',
            width: '100%',
            justifyContent: 'center',
            bottom: 12,

            '& li': {
                margin: 0
            }
        }
    },
    wrapSlider: {
        maxWidth: '100%',
        overflow: 'hidden',
    },
    wrapSpan: {},
    heading: {
        marginTop: 50,
        marginBottom: 0,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 213,
        position: 'relative',

        '@media(max-width: 990px)': {
            marinTop: 20,
            paddingLeft: 0,
            textAlign: 'left',
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

        '& span': {
            color: '#f67e49'
        },

        '& > $wrapSpan': {
            color: '#3B3F43',
            width: '100%'
        },

        '& img': {
            position: 'absolute',
            left: 59,
            bottom: 16,

            '@media(max-width: 990px)': {
                width: 78,
                height: 'auto',
                position: 'static',
                marginBottom: 12,
            }
        }
    },
    dateStart: {
        paddingLeft: 207,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '@media(max-width: 990px)': {
            paddingLeft: 0
        },

        '@media(max-width: 750px)': {
            flexDirection: 'column',
            textAlign: 'center'
        }
    },
    headingDateStart: {
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: '200%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 8,

        '@media(max-width: 600px)': {
            fontSize: 20,
        }

    },
    descriptionStart: {
        maxWidth: 465,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '150%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 600px)': {
            fontSize: 16,
            maxWidth: 'none'
        }
    },
    button: {
        width: 281,
        height: 48,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#fff',
        background: '#5955FB',
        borderRadius: 0,
        border: 0,
        textTransform: 'none',
        letterSpacing: 'normal',
        transition: 'all .3s',

        '@media(max-width: 600px)': {
            width: '100%'
        },

        '&:hover': {
            background: '#7370FB'
        }
    },
    blockCompetition: {
        background: '#FFFFFF',
        border: '4px solid #F67E49',
        padding: 16,
        cursor: 'pointer',
        backdropFilter: 'blur(0px)',
        width: 'auto!important',
        position: 'relative',

        '@media(max-width: 600px)': {
            width: '100%!important',
            boxSizing: 'border-box'
        }
    },
    text:{

    },
});