import { makeStyles } from "@material-ui/core";


export const useCountdownStyles = makeStyles(theme => ({
    wrapper:{
        maxHeight: 102,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    daysButton:{
        height: 143,
        width: 110,
        position: 'relative',
        top: -42
    },
    innerButton:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    daysNumber:{
        color: theme.brandColors.blackGray.main,
        fontSize: 66,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    number:{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 44,
        color: theme.brandColors.blackGray.main,
    },
    timeType:{
        fontWeight: 300,
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Montserrat',
        color: theme.brandColors.blackGray.main,
    },
    devider:{
        margin: 'auto 15px',
        fontSize: 44,
        fontWeight: 'bold',
        color: theme.brandColors.blackGray.main,
        fontFamily: 'Montserrat'
    },
    normalButton:{
        width: 109,
        height: 101,
    }

}))