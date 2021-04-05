import { makeStyles } from "@material-ui/core";


export const useCreateProjectStyles = makeStyles(theme => ({
    sectionWrapper:{
        position: 'relative',
        padding: '28px 0 56px 0',
    },
    banner:{
        width: '100%',
        position: 'relative',
        zIndex: 2,
        height: 415,
        backgroundColor: theme.brandColors.blackGray.main,
        borderRadius: '22px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '36px 78px 80px 78px',
    },
    textBlock:{
        paddingRight: 46,
        '& *':{
            fontFamily: 'Roboto',
        }
    },
    bigText:{
        color: 'white',
        fontWeight: 700,
        fontSize: 51,
        lineHeight: '61px',
        marginBottom: '16px'
    },
    colorText:{
        padding: '11px 13px',
        backgroundColor: theme.brandColors.brandGreen.main,
        borderRadius: '55px',
        color: theme.brandColors.blackGray.main,
        fontWeight: 400,
        fontSize: 40,
        textAlign:'center',

        '& span':{
            fontWeight: 700
        }
    },
    imageWrapper:{
        width: 438,
        height: 298,
        border: `11px solid  ${theme.brandColors.brandRed.main}`,
        borderRadius: '22px',
        position: 'relative',

        '&:before':{
            content: "''",
            width: 'calc(100% + 22px)',
            height: 'calc(100% + 22px)',
            position: 'absolute',
            top: '-11px',
            left: '-11px',
            border: `11px solid  ${theme.brandColors.brandRed.main}`,
            filter: 'blur(12px)'
        }
    },
    image:{
        width: '100%',
        height: '100%',
    },
    xodLeft:{
        position: 'absolute',
        left: '78px',
        bottom: '35px',
    },
    xodRight:{
        position: 'absolute',
        right: '78px',
        bottom: '35px',
    },
    grayGeometry:{
        position: 'absolute',
        bottom: 9,
        width: "100%"
    }
}))