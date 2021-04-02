import { makeStyles } from '@material-ui/core/styles';
import arrowBlack from 'images/arrowBlack.svg'

export const useStyles = makeStyles({
    ParticipantSlider: {
        marginBottom: 84,

        '& .slick-arrow': {
            width: '12px',
            height: '24px',

            '&:before': {
                display: 'none'
            }
        },

        '@media(max-width: 600px)':{
            paddingTop: '0'
        },

        '& .slick-track':{
            paddingTop: '50px'
        },

        '& .slick-prev': {
            left: -33,
            background: `url(${arrowBlack}) no-repeat`,
            transform: 'translateY(-12px) rotate(180deg)'
        },
        '& .slick-next': {
            right: -33,
            background: `url(${arrowBlack}) no-repeat`,
        },
        '& .slick-disabled': {
            display: 'none!important'
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
            bottom: -41,

            '& li': {
                margin: 0
            }
        }
    },
    wrapSpan: {},
    heading: {
        marginTop: 0,
        marginBottom: 48,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 172,
        position: 'relative',

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

        '& span': {
            color: '#2162ab'
        },

        '& > $wrapSpan': {
            color: '#3B3F43',
            width: '100%'
        },

        '& img': {
            position: 'absolute',
            left: 55,
            bottom: 17,

            '@media(max-width: 990px)': {
                width: 78,
                height: 'auto',
                position: 'static',
                marginBottom: 12,
            }
        }
    },
    slider: {
        '@media(max-width: 1320px)': {
            width: '90%',
            margin: '0 auto'
        },

        '@media(max-width: 960px)': {
            width: 'calc(100% + 30px)',
            marginLeft: -15
        }
    }
});