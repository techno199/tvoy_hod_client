import { makeStyles } from "@material-ui/core";



export const useUntilRegistrationStyles = makeStyles(theme => ({
    countdownPlank:{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        padding: '23px 35px',
        backgroundColor: '#e1faf7',
        borderRadius: '25px',
        marginTop: 120
    },
    countdownText:{
        color: theme.brandColors.blackGray.main,
        fontSize: 23,
        fontFamily: 'Montserrat',
        marginLeft: 42,
        '& + div':{
            margin: '0 0 0 auto'
        }
    },
    button:{
        width: 258,
        height: 68,
        margin: '0 0 0 auto',
        '& span':{
            fontSize: 24
        }
    }
}))