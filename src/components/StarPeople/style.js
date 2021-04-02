import { makeStyles } from '@material-ui/core/styles';
import arrowBlack from 'images/arrowBlack.svg';

export const useStyles = makeStyles({
    StarPeople: {
        marginBottom: 104,
        marginTop: '150px',

        '@media(max-width: 990px)': {
           marginBottom: 52,
           marginTop: 50
        },

        '& .slick-arrow': {
            width: '12px',
            height: '24px',
            top: 118,

            '&:before': {
                display: 'none'
            }
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
        }
    },
    heading: {
        marginTop: 0,
        marginBottom: 48,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 207,
        position: 'relative',

        '@media(max-width: 990px)': {
            paddingLeft: 0,
            marginBottom: 24,
            fontSize: 30,

            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 550px)': {
            textAlign: 'left',
            fontSize: 24,
        },

        '& svg':{
            position: 'absolute',
            left: '51px',
            top: '-77px'
        },

        '& span': {
            color: '#6edd9e'
        },
    },
    slider: {
        '@media(max-width: 1320px)': {
            width: 'calc(100% - 100px)',
            margin: '0 auto'
        },

        '@media(max-width: 470px)': {
            width: 'calc(100% - 70px)',
        }
    }
});