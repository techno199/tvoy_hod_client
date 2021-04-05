import { makeStyles } from "@material-ui/core";
import redCircle from 'images/redCircle.png'


export const useMonthsStyle = makeStyles(theme => ({
    sectionWrapper:{
        marginTop: 43,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    ethaps:{
        maxWidth: 590,
    },
    title:{
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 28,
        lineHeight: '34px',
        color: theme.brandColors.blackGray.main,
        marginBottom: '31px',
    },
    ul:{
        listStyleImage: `url(${redCircle})`,
        paddingLeft: '12px',
        fontSize: 21,
        fontFamily: 'Montserrat',

        '& li':{
            fontSize: 21,
            color: theme.brandColors.blackGray.main,
        }
    },
    triangles:{
        margin: '0 16px',
    },
    months:{
        maxWidth: 581,        
    },
    monthsDescribe:{
        fontSize: 21,
        fontFamily: 'Montserrat',

        '& span':{
            fontWeight: 600
        }
    }
}))