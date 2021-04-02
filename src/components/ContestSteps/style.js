import {makeStyles} from "@material-ui/core";
import stepArrow from 'images/stepArrow.png'


export const useStyles = makeStyles(theme => ({
    bannerContent:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        '@media(max-width: 910px)':{
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 8
        }
    },
    bannerTextt:{
        fontWeight: 800,
        fontSize: 30,
        color: 'black',
        '& span':{
            color: '#ff8483',

        },

        '@media(max-width: 430px)':{
            fontSize: 25
        }
    },
    sect:{
        marginBottom: 100
    },
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
            marginTop: 50,
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
            color: '#864ac6'
        },

        '& img': {
            position: 'absolute',
            top: '50%',
            left: 35,
            transform: 'translate(0,-50%)',

            '@media(max-width: 1280px)': {
                display: 'none'
            },
        },
    },
    stepBlock:{
        position: 'relative',
        padding: '21px',

        '@media(max-width: 600px)': {
            width: '100% !important',
            maxWidth: 562,
        },
    },
    registration:{
        width: 562,
        background: 'rgba(98,171,249,1)',
        height: 225,
        position: 'relative',
        marginRight: '100px',
        marginBottom: '65px',

        '&:before':{
            content: stepArrow,
            position: 'absolute',
            top: '50%',
            right: '-30px'

        },


        '& h6':{
            marginTop: 34,

            '@media(max-width: 515px)': {
                marginTop: 0,
            },
        },



        '@media(max-width: 1255px)': {
            marginRight: 0
        },
        '@media(max-width: 600px)': {
            width: '100% !important',
            maxWidth: 562,
        },
        '@media(max-width: 415px)': {
            height: 166
        },

    },

    textBlock:{
        height: '100%',
        marginRight: '120px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',

        '& h6':{
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: 500,
            color: '#fff'
        },

        '& *':{
            '@media(max-width: 515px)': {
                fontSize: '14px !important',
            },
        }

    },
    dateComment:{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    date:{
        fontSize: '18px',
        fontWeight: 500,
        fontFamily: 'Inter',
        color: 'rgb(253,230,89)'
    },
    comment:{
        marginTop: '14px',
        fontSize: '18px',
        color: '#fff',
        fontWeight: 400,
        fontFamily: 'Inter'
    },
    meeting:{
        width: 562,
        background: 'rgba(98,171,249,1)',
        height: 225,
        position: 'relative',
        marginBottom: '65px',

        '@media(max-width: 600px)': {
            width: '100% !important',
            maxWidth: 562,
        },

        '@media(max-width: 415px)': {
            height: 166
        },

        /*'&:before':{
            content: stepArrow,
            position: 'absolute',
            top: '50%',
            right: '-30px'

        }*/

        '& h6':{
            marginTop: 34,

            '@media(max-width: 415px)': {
                marginTop: 0,
            },
        }
    },
    final:{
        width: 345,
        height: 166,
        background: 'rgb(33,98,171)',
        marginRight: 90,
        '@media(max-width: 600px)': {
            width: '100% !important',
            maxWidth: 562,
        },

        '& > #textblock':{
            width: '100%'
        },

        '@media(max-width: 1255px)': {
            width: 562,
            order: 5,
            marginTop: 70,
            marginRight: 0
        },
    },
    bigGame:{
        width: 345,
        height: 166,
        background: 'rgb(18,122,234)',
        marginRight: 90,

        '& > #textblock':{
            width: '100%'
        },

        '@media(max-width: 600px)': {
            width: '100% !important',
            maxWidth: 562,
        },

        '@media(max-width: 1255px)': {
            width: 562,
            order: 4,
            marginTop: 70,
            marginRight: 0
        },
    },
    team:{
        width: 345,
        height: 166,
        background: 'rgb(52,135,223)',
        '& > #textblock':{
            width: '100%'
        },

        '@media(max-width: 600px)': {
            width: '100% !important',
            maxWidth: 562,
        },

        '@media(max-width: 1255px)': {
            order: 3,
            width: 562,
        },

    },
    stepsWrapper:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

        '@media(max-width: 1255px)': {
            flexDirection: 'column',
        },
    },
    calendar:{
        position: 'absolute',
        right: 70,
        top: '50%',
        transform: 'translate(0,-50%)',

        '@media(max-width: 375px)': {
           top: '35%',
            height: 76
        },
    },
    pc:{
        position: 'absolute',
        right: 50,
        top: '50%',
        transform: 'translate(0, -50%)',

        '@media(max-width: 415px)': {
            height: 95
        },

        '@media(max-width: 375px)': {
            top: '56%',
            height: 70
        },
    },
    chess:{
        position: 'absolute',
        right: '55px',
        top: '-34px',

        '@media(max-width: 415px)': {
            top: '12%'
        },
    },
    bobot: {
        position: 'absolute',
        right: 22,
        bottom: 26,
        height: 106
    },
    loud:{
        position: 'absolute',
        right: 16,
        bottom: -18
    },
    meetingArrow:{
        position: 'absolute',
        top: '50%',
        left: '-59px',
        transform: 'translate(0,-50%)',

        '@media(max-width: 1255px)': {
            top: -53,
            left: '50%',
            transform: 'translate(-50%,0) rotate(90deg)'
        },
    },
    finalArrow:{
        position: 'absolute',
        top: '50%',
        right: '-55px',
        transform: 'translate(0,-50%) rotate(180deg)',

        '@media(max-width: 1255px)': {
            top: -52,
            left: '50%',
            transform: 'translate(-50%,0) rotate(90deg)'
        },

    },
    teamArrow:{
        position: 'absolute',
        top: '-50px',
        right: '50%',
        transform: 'translate(50%,0) rotate(90deg)'
    },
    banned:{
        width: '100%',
        background: '#6EDD9E',
        borderRadius: '5px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '32px 64px',
        marginTop: 100,

        '@media(max-width: 930px)': {
            marginTop: 45,
            flexDirection: 'column'
        },

        '@media(max-width: 715px)': {
            padding: '16px 64px 44px 64px',
        },
    },
    button:{
        '@media(max-width: 930px)': {
            position: 'absolute',
            bottom: -38
        },
    },
    bannerText:{
        color: '#fff',
        fontSize: '64px',
        fontWeight: 800,
        '& span':{
            color: '#8765a7'
        },

        '@media(max-width: 715px)': {
            fontSize: 39,
            textAlign: 'center',
            width: 185
        },
        '@media(max-width: 370px)': {
            fontSize: 27,
            width: 131
        },
    },
    buttonText:{
        fontWeight: 700,
        color: '#fff',
        fontSize: '14px'
    },
}));