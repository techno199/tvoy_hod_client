import { makeStyles } from "@material-ui/core";

export const useCurrentStageStyles = makeStyles(theme => ({
    currentStage:{
        marginTop: 32,

        '& h1':{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: 64,
            color: theme.brandColors.blackGray.main,
        },
    },
    soonWrapper:{
        position: 'relative',
        width: '100%',
        paddingTop: 24,
    },
    soonImageFirst:{
        width: '100%',
        filter: 'blur(12px)'
    },
    soonImageSecond:{
        width: '100%',
        filter: 'blur(12px)',
        opacity: '.1',
    },
    soonText:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        fontWeight: 700,
        fontFamily: 'Montserrat',
        fontSize: 42,
        color: theme.brandColors.blackGray.main,
        opacity: '.55',

    },
    firstStage:{
        marginTop: 24,
        background: 'rgba(219,223,232,.25)',
        padding: '16px 64px',
    },
    title:{
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 22,
        color: theme.brandColors.brandGreen.main,
    },
    stages:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
    },
    popup:{
        maxWidth: 586,
        padding: '24px 32px',
        background: '#E9F3F3',
        '& kbd':{
            position: 'absolute',
            right: '32px',
            top: '24px',
        }
    },
    bodyWrapper:{
        marginTop: 13,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    body:{
        '& div':{
            paddingLeft: '16px',
            position: 'relative',
            fontFamily: 'Montserrat',
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 8,

            '&:not(:last-child)':{
                marginRight: 8,
            },

            '&:before':{
                content: '""',
                width: 8,
                height: 8,
                borderRadius: '100%',
                background: theme.brandColors.brandGreen.main,
                position: 'absolute',
                transform: 'translate(0,-50%)',
                top: '50%',
                left: 0
            }
        },
        
    }
}))

export const useStageBlockStyles = makeStyles(theme => ({
    stageBlock:{
        width: 346,
        height: 134,
        background: '#E9F3F3',
        padding: '12px 21px',

        '& *':{
            fontFamily: 'Montserrat',
        },
    },
    period:{
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '17p',
        color: theme.brandColors.blackGray.main,
    },
    title:{
        fontWeight: 700,
        color: theme.brandColors.brandGreen.main,
        fontSize: 23,
    },
    description:{
        fontWeight: 700,
        fontSize: 17,
        paddingRight: 76,
        color: theme.brandColors.blackGray.main,
    },
    link:{
        display: 'block',
        position: 'relative',
        top: -19,
        float: 'right',
        textDecoration: 'underline',
        color: theme.brandColors.brandRed.main,
        fontSize: 12,
        fontWeight: 300,
        cursor: 'pointer',

    }
}))