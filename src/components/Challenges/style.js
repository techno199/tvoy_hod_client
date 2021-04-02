import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
    heading: {
        marginTop: 100,
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

        '@media(max-width: 810px)': {
            marginTop: 34
        },

        '@media(max-width: 550px)': {
            textAlign: 'left',
            fontSize: 24,
        },

        '& span': {
            color: '#ff7271'
        },
    },
    challengesBlock:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',

        '@media(max-width: 790px)': {
            flexDirection: 'column'
        },
    },
    imageContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        '&:not(:last-child)':{
            marginRight: 32,

            '@media(max-width: 790px)': {
                marginRight: 0
            },
        },

        '& img':{
            marginBottom: 48,
            cursor: 'pointer',

            '@media(max-width: 450px)':{
                width: 285
            },

            '&:hover':{
                transition: '.2s',
                filter: 'brightness(110%)',
                transform: 'scale(1.05)'
            }
        }
    },
    popup:{
        maxWidth: 500,
        padding: 33,
        position: 'relative',

        '@media(max-width: 450px)':{
            maxWidth: 300
        },

        '& > p':{
            fontSize: 24,
            fontWeight: 800,
            color: '#fff',
            paddingRight: 10,
            fontFamily: 'Inter',

            '@media(max-width: 450px)':{
                display: 'none'
            },
        },

        '& > kbd':{
            display: 'none',
            right: 10,
            top: 10,
            cursor: 'pointer',
            position: 'absolute',

            '@media(max-width: 450px)':{
                maxWidth: 300,
                display: 'block'
            },

            '&:hover':{
                filter: 'brightness(98%)',
                transition: '.2s'
            }
        }
    },

    popupContent:{
        fontSize: 14,
        color: '#fff',
        fontWeight: 400,
        fontFamily: 'Inter',

        '& *':{
            fontSize: 14,
            color: '#fff',
            fontWeight: 400,
            fontFamily: 'Inter'
        }
    }
});