import { makeStyles } from "@material-ui/core";
import greenTriangle from 'images/greenTriangle.png'
import redCircle from 'images/redCircle.png'


export const usePrizesStyles = makeStyles(theme => ({
    sectionWrapper: {
        padding: '60px 0 138px 0',
        background: 'rgba(219,223,232,.24)',
        position: 'relative',

        '& h1': {
            fontSize: 64,
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '72px',
            color: theme.brandColors.blackGray.main,
            marginBottom: 24,

            '& > span': {
                background: theme.brandColors.brandGreen.main,
                padding: '4px',
            }
        },

        '& > div > p': {
            fontSize: 21,
            fontFamily: 'Montserrat',
            color: theme.brandColors.blackGray.main,

        },

        '& h4': {
            marginTop: 87,
            fontWeight: 700,
            fontSize: 32,
            fontFamily: 'Montserrat',
            color: theme.brandColors.blackGray.main,
        }
    },
    prizesWrapper: {
        marginTop: 31,
        marginBottom: 116,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    vuzTriangleButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        '& > div': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

            '& > img': {
                marginRight: 11,
            },

            '& div': {
                background: '#e9f3f3',
                maxWidth: 687,
                width: '100%',
                padding: '17px 23px',
                fontSize: 18,
                fontFamily: 'Montserrat',
                color: theme.brandColors.blackGray.main,
            }
        },

        '& img': {
            margin: '0 auto',
        }
    },

    collapsedItem: {
        width: '100%',
        padding: '24px 40px',
        position: 'relative',
        border: '2px solid #39DEC8',
        borderRadius: '22px',
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'column',
    },
    collapsedStage: {
        fontWeight: 700,
        fontFamily: "Montserrat",
        fontSize: 17,
        color: theme.brandColors.blackGray.main,
        marginBottom: 8,
    },
    status: {
        color: theme.brandColors.brandGreen.main,
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Montserrat',
    },
    hidden: {
        marginTop: 24,
        marginBottom: 24,
    },
    intenders: {
        fontWeight: 600,
        fontSize: 15,
        fontFamily: 'Montserrat',
        color: theme.brandColors.blackGray.main,
        marginBottom: 16,
    },
    body: {
        '& #li': {
            position: 'relative',
            paddingLeft: 16,
            fontWeight: 400,
            fontFamily: 'Montserrat',
            fontSize: 18,
            color: theme.brandColors.blackGray.main,
            marginBottom: '4px',

            '& ~ span': {
                paddingLeft: 16,
                marginLeft: 16,
                display: 'block',
                position: 'relative',
                fontWeight: 400,
                fontFamily: 'Montserrat',
                fontSize: 18,
                color: theme.brandColors.blackGray.main,

                '&:before': {
                    position: 'absolute',
                    content: `url(${greenTriangle})`,
                    top: '50%',
                    left: -8,
                    transform: 'translate(0,-50%)',
                }
            },

            '&:before': {
                content: `url(${redCircle})`,
                position: 'absolute',
                top: '50%',
                left: -8,
                transform: 'translate(0,-50%)',


            }
        }
    },
    IconButton: {
        position: 'absolute',
        top: 24,
        right: 40
    },
    oButton:{
        position: 'absolute',
        top: 229,
        left: -25,
        width: 84
    },
    xButton:{
        position: 'absolute',
        top: 145,
        right: 82,
        width: 181,
    }
}))