import { makeStyles } from "@material-ui/core";
import triangle from 'images/triangle.svg'



export const ueInfoWithGamepadStyles = makeStyles(theme => ({
    sectionWrapper:{
        marginTop: 28,
        position: 'relative',
        '& > h1':{
            fontWeight: 700,
            fontFamily: 'Montserrat',
            fontSize: 64,
            marginBottom: 16
        }
    },
    instructionWithX:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stepWrapper:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    steps:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',

        '& div':{
            '&:not(:last-child)':{
                marginRight: 10
            }
        }
    },
    textBlok:{

        paddingRight: 70,

        '& *':{
            fontFamily: 'Montserrat',
            color: theme.brandColors.blackGray.main,
            fontSize: 24,
        },

        '& > div':{
            marginBottom: 32,
        },

        '& span':{
            fontWeight: 600,
        }
    },
    stepBlock:{
        width: 315,
        height: 95,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        texAlign: 'center',
        position: 'relative',
        background: 'rgba(219,223,232,.25)',
        borderRadius: 22,

        '& > div':{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: 24,
            color: theme.brandColors.brandGreen.main,
        },

        '&:after':{
            content: props => props.arrow ?  `url(${triangle})` : "''",
            position: 'absolute',
            right: -21,
            top: '50%',
            transform: 'translate(0,-50%)',
        }
    },
    winnersWrapper:{
        width:' 100%',
        height: 300,
        maxHeight: 300,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleOuter:{
        margin: '0 auto',
        height: 582,
        width: 582,
        background: 'rgba(57,222,200,.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
    },
    circleInner:{
        width: 218,
        height: 218,
        borderRadius: '100%',
        background: theme.brandColors.brandGreen.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    number:{
        fontWeight: 700,
        fontSize: 72,
        textAlign:'center',
        color: theme.brandColors.blackGray.main,
        fontFamily: 'Montserrat'
    },
    winnersText:{
        fontWeight: 700,
        fontSize: 22,
        textAlign:'center',
        color: theme.brandColors.blackGray.main,
        fontFamily: 'Montserrat'
    },
    darkCircle:{
        position: 'absolute',
        left: 0,
        bottom: 65
    },
    darkTriangle:{
        position: 'absolute',
        right: 0,
        bottom: -50
    }
}) )