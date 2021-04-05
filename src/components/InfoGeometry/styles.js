import { makeStyles } from "@material-ui/core";




export const useGeometryInfoStyles = makeStyles(theme => ({
    sectionWrapper:{
        marginTop: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    textBlok:{

        paddingRight: 70,

        '& *':{
            fontFamily: 'Montserrat',
            color: theme.brandColors.blackGray.main,
            fontSize: 28,
        },
        

        '& > div':{
            marginBottom: 32,
        },

        '& span':{
            background: theme.brandColors.brandGreen.main,
            fontWeight: 600,
            borderRadius: '35px',
            padding: '3px'
        }
    }
}) )