import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    ParticipantSliderBlock: {
        display: 'flex',
        height: 428,
        paddingLeft: 121,
        paddingTop: 64,
        paddingBottom: 64,
        paddingRight: 70,
        background: props => `url(${props.background}) no-repeat right center`,
        position: 'relative',

        '@media(max-width: 1024px)': {
            padding: '28px 40px',
            flexWrap: 'wrap',
        },

        '@media(max-width: 960px)': {
            padding: '28px 34px',
            flexWrap: 'wrap',
            height: 428
        },

        '@media(max-width: 685px)': {
            backgroundImage: 'none !important',
            background: props => `${props.color} !important`,
            height: '100%'
        },


    },
    rightContent: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .wrapButtonPixel':{display: 'none'},

        '@media(max-width: 960px)': {
            justifyContent: 'flex-start',
            marginTop: 0,
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',

            '& .wrapButtonPixel':{
                display: 'block'
            },
        },

        '@media(max-width: 685px)': {
            justifyContent: 'center',
            marginTop: 32,
            alignSelf: 'center',
            alignItems: 'center',
        },
    },
    wrapData: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 999,

        '@media(max-width: 960px)': {
            width: '100%',
            '& .wrapButtonPixel':{
                display: 'none'
            }
        }

    },
    subTitle: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '140%',
        color: '#FFFFFF',
        marginBottom: 3,
        display: 'inline-block',
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 32,
        lineHeight: '140%',
        color: '#fff',
        marginTop: 0,
        marginBottom: 24
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '140%',
        color: '#fff',
        marginTop: 0,
        marginBottom:35,
        maxWidth: 496,
        flexGrow: 1,

        '@media(max-width: 960px)': {
            fontSize: 16,
            marginBottom: 0,
            maxWidth: 'none'
        },

        '@media(max-width: 370px)': {
            fontSize: 15,
        }
    },
    button: {
        width: 207,
        height: 48,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        background: '#FFFFFF',

        borderRadius: 0,
        border: 0,
        textTransform: 'none',
        letterSpacing: 'normal',
        transition: 'all .3s',

        '&:hover': {
            background: '#eeeeee'
        }
    },
    studentData: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 90,
        '@media(max-width: 960px)': {
            marginBottom: '24px'
        },
    },
    img: {
        width: 200,
        height: 200,
        objectFit: 'cover',
        borderRadius: '50%',
        marginRight: 24,

        '@media(max-width: 1024px)': {
            width: 100,
            height: 100,
        },

        '@media(max-width: 980px)': {
            width: 68,
            height: 68,
        },
    },
    nameHeading: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 20,
        lineHeight: '140%',
        color: '#fff',
        marginTop: 0,
        marginBottom: 5
    },
    titleVolunteer: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: '#fff',
        marginTop: 0,
        marginBottom: props => props.additionally ? 8 : 0,
    },
    subTitleVolunteer: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '140%',
        color: 'rgba(255,255,255,.5)',
        marginTop: 0,
        marginBottom: 0
    }
});