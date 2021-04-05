import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    sectionWrapper:{
        paddingTop: 70,
        '& *':{
            fontFamily: 'Montserrat',
        },

        '& > h1':{
            fontWeight: 700,
            fontSize: 64,
            color: theme.brandColors.blackGray.main,
            lineHeight: '100%',
        },

        '& > h6':{
            marginTop: 30,
            fontSize: 28,
            lineHeight: '33px',
            fontWeight: 'normal',
            color: theme.brandColors.blackGray.main,
        }
    },

    plank:{
        marginTop: 50,
        backgroundColor: '#E9F3F3',
        padding: '45px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text:{
        paddingRight: '25px',
        paddingLeft: '32px',
        fontSize: 21,
        color: theme.brandColors.blackGray.main,

    }
}))