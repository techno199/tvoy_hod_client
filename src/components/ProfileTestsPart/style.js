import { makeStyles } from '@material-ui/core/styles';
import darkBlueBottomFon from 'images/darkBlueBottomFon.svg'
import lightBlueFon from 'images/lightBlueFon.svg'
import darkBlueFon from 'images/darkBlueFon.svg'
import violetFon from 'images/violetFon.svg'

export const useStyles = makeStyles({
    ProfileTestsPart: {
        marginTop: 48,
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 580px)': {
            width: '80%',
            fontSize: 22,
            lineHeight: '27px',
            margin: '0 auto 24px auto'
        },

        '@media(max-width: 450px)': {
            width: '100%',
        },
    },
    wrapTests: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',

        '@media(max-width: 750px)': {
            justifyContent: 'center'
        },
    },
    oneTest: {
        width: 'calc(33.33333333% - 16px)',
        marginRight: 24,
        position: 'relative',

        '@media(max-width: 750px)': {
            width: 'calc(50% - 24px)',
            marginBottom: 24
        },

        '@media(max-width: 580px)': {
            width: '80%',
            marginRight: 0
        },

        '@media(max-width: 450px)': {
            width: '100%',
        },

        '&:nth-child(3n)': {
            marginRight: 0,

            '@media(max-width: 750px)': {
                marginBottom: 0
            },
        }
    },
    procent: {
        paddingTop: '68.06%',
        height: 0,

        '@media(max-width: 580px)': {
            paddingTop: '51.64%',
        }
    },
    imgTest: {
        width: '100%',
        display: 'block',
        marginBottom: 24,
    },
    titleAndStatus: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3B3F43',

        '@media(max-width: 580px)': {
            fontSize: 18
        }
    },
    label: {
        padding: '4px 16px',
        background: 'rgba(255, 188, 57, 0.1)',
        borderRadius: 3,
        color: '#FFBC39',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: '133%',
        display: 'inline-block',
        marginBottom: 8,

        '@media(max-width: 800px)': {
            marginBottom: 0,
        }
    },
    notAvailable: {
        color: '#c4c4c4',
        background: 'rgba(196, 196, 196, 0.1)',
    },
    textProfile: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '130%',
        color: '#717784',
        marginTop: 0,
        marginBottom: 0
    },
    buttonBlock: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 32,

        '& a': {
            textDecoration: 'none'
        }
    },
    contentPasedTest: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 24
    },
    violet: {
        background: `url(${violetFon}) no-repeat calc(100% - 30px) 5px/75% #AA70CF`,

        '& > $bonus': {
            background: '#BB8DD9'
        }
    },
    lightBlue: {
        background: `url(${lightBlueFon}) no-repeat 29px 14px/78% #52A0D8`,

        '& > $bonus': {
            background: '#75B3E0'
        }
    },
    darkBlue: {
        background: `url(${darkBlueBottomFon}) no-repeat left bottom/100%, url(${darkBlueFon}) no-repeat 26% 9px/71% #2C73BF`
    },
    bonus: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 119,
        height: 22,
        background: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 12,
        paddingLeft: 12,

        '@media(max-width: 580px)': {
            width: 'auto',
            alignSelf: 'flex-start',
        },

        '&.noActive': {
            background: 'rgba(196, 196, 196, 0.2)'
        }
    },
    score: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#ffffff',

        '@media(max-width: 580px)': {
            marginRight: 28,
        },

        '&.noActive': {
            color: '#C4C4C4'
        }
    },
    moneyBonus: {
        position: 'relative',
        bottom: 4,
        left: 5,
    },
    nameChecked: {
        display: 'flex'
    },
    checkedGreen: {
        '@media(max-width:1280px)': {
            width: 30,
        },

        '@media(max-width:1100px)': {
            width: 54,
        },

        '@media(max-width:880px)': {
            width: 30,
        },

        '@media(max-width:580px)': {
            width: 54,
        },
    },
    titleAndLink: {
        marginLeft: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titlePassed: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: '24px',
        color: '#fff',
        marginTop: 0,
        marginBottom:13,

        '@media(max-width:1280px)': {
            fontSize: 15,
            marginBottom: 0,
        },

        '@media(max-width:1100px)': {
            fontSize: 20,
            marginBottom:13,
        },

        '@media(max-width:880px)': {
            fontSize: 15,
            marginBottom: 0,
        },

        '@media(max-width:580px)': {
            fontSize: 18,
            lineHeight: '22px',
            marginBottom: 8,
        },
    },
    passedLink: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '130%',
        paddingBottom: 6,
        textDecoration: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
        color: 'rgba(255, 255, 255, 0.5)',

        '@media(max-width:1280px)': {
            fontSize: 11,
        },

        '@media(max-width:1100px)': {
            fontSize: 14,
        },

        '@media(max-width:880px)': {
            fontSize: 11,
        },

        '@media(max-width:580px)': {
            fontSize: 14,
        },
    }
});