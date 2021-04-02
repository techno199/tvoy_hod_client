import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    ChallengeBlock: {
        display: 'flex',
        flexDirection: props => !props.even ? 'row' : 'row-reverse',
        alignItems: 'center',
        marginBottom: 80,

        '@media(max-width: 900px)': {
            flexDirection: 'column!important',
            marginBottom: 40,
        },

        '@media(max-width: 500px)': {
            padding: 26,
        },

        '&:last-child': {
            marginBottom: 0,
        }
    },
    imgWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 396,
        minWidth: 396,
        height: 396,
        background: 'transparent',
        marginRight: props => !props.even ? 20 : 0,
        marginLeft:  props => !props.even ? 0 : 20,

        '@media(max-width: 900px)': {
            marginRight: '0!important',
            marginLeft:  '0!important',
            marginBottom: 26,
        },
        '@media(max-width: 500px)': {
            height: 'auto',
            width: '100%',
            minWidth: 'auto',
            padding: 0,
            boxShadow: 'none',
        },

        '& img': {
            width: 336,
            height: 336,
            objectFit: 'cover',

            '@media(max-width: 500px)': {
                width: '100%',
                height: 'auto',
                display: 'block'
            },
        }
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 500px)': {
            fontSize: 24,
        },

        '@media(max-width: 450px)': {
            fontSize: 22,
        },
    },
    text: {
        '& p': {
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: '140%',
            color: '#3B3F43',
            marginTop: 0,
            marginBottom: 15,
            maxWidth: 600,

            '&:last-of-type': {
                marginBottom: 32,

                '@media(max-width: 500px)': {
                    marginBottom: 24
                }
            }
        }
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 14,
        color: '#3F94F6',

        '@media(max-width: 500px)': {
            width: '100%'
        },

        '& svg': {
            width: 18,
            height: 18,
            marginLeft: 10
        }
    },
    data: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '140%',
        color: 'rgba(59, 63, 67, 0.5)',
        marginTop: 8,
        marginBottom: 0,

        '@media(max-width: 900px)': {
            textAlign: 'center',
            width: '100%',
            display: 'inline-block'
        },

        '& span':{
            marginRight: 10,
            marginBottom: '-3px',

        }
    },
    textContent: {
        '@media(max-width: 900px)': {
            width: '100%',
            '& .wrapButtonPixel':{
                margin: '0 auto'
            }
        },
    }
});