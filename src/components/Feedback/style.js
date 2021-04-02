import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    Feedback: {
        display: 'flex',
        marginBottom: 80
    },
    textBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        paddingRight: 30,
        boxSizing: 'border-box',

        '@media(max-width: 750px)': {
            paddingRight: 0,
            paddingBottom: 0,
        },
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 48,
        lineHeight: '120%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 48,

        '@media(max-width: 990px)': {
            fontSize: 30,
            marginBottom: 32
        },

        '@media(max-width: 550px)': {
            fontSize: 24,
        }
    },
    imgBlock: {
        maxWidth: 547,
        display: 'flex',

        '@media(max-width: 750px)': {
            display: 'none'
        },

        '& img': {
            height: 542,
            width: 'auto',
            maxWidth: '100%',
            display: 'block',
            alignSelf: 'flex-end',

            '@media(max-width: 1200px)': {
                height: 'auto'
            },
        }
    },

    imgBlock1: {
        maxWidth: 547,
        display: 'flex',


        '& img': {
            height: 542,
            width: 'auto',
            maxWidth: '100%',
            display: 'block',
            alignSelf: 'flex-end',

            '@media(max-width: 1200px)': {
                height: 'auto',
                margin: '0 auto 32px auto',

            },
        }
    },
    contacts: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 28,

        '@media(max-width: 990px)': {
            marginBottom: 24,
        },

        '&:last-child': {
            marginBottom: '0!important',

            '& > $textLink': {
                '@media(max-width: 450px)': {
                    fontSize: 20,
                },

                '@media(max-width: 340px)': {
                    fontSize: 18,
                },
            }
        }
    },
    textLink: {
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: '39px',
        color: '#FF7271',
        textDecoration: 'none',
        marginTop: 0,
        marginBottom: 12,

        '@media(max-width: 990px)': {
            fontSize: 24,
            marginBottom: 8
        },
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 0,

        '@media(max-width: 990px)': {
            fontSize: 16,
        },
    },
    feedbackIcon:{
        marginRight: '20px',

    },
    phone:{
        marginBottom: '-17px'
    },
    gmail:{
        marginBottom: '-11px',
        marginRight: '46px',
        position: 'relative',
        left: 10
    },
    titleTop:{
        paddingLeft: '98px',
        '@media(max-width: 1280px)':{paddingLeft: 0},
    },
    titleBottom:{
        paddingLeft: '99px',
        '@media(max-width: 1280px)':{paddingLeft: 0},
    }
});