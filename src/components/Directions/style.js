import { makeStyles } from "@material-ui/core";



export const useDirectionsStyles = makeStyles(theme => ({
    sectionWrapper:{
        marginTop: 103,
        marginBottom: 100,
        '& h1':{
            fontWeight: 700,
            fontFamily: 'Montserrat',
            fontSize: 64,
            color: theme.brandColors.blackGray.main,
            lineHeight: '74px',
            marginBottom: 16,
        },

        '& > p':{
            fontFamily: 'Montserrat',
            fontSize: 21,
            color: theme.brandColors.blackGray.main,
            marginBottom: 19,
        },
    },
    darkPlank:{
        padding: 16,
        background: theme.brandColors.blackGray.main,
        color: '#fff',
        fontSize: 21,
        fontFamily: 'Montserrat',
    },

    cardsWrapper:{
        marginTop: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',

        '& #card':{
            marginBottom: 24,
            marginRight: 11,
        }
    },

    card:{
        background: 'rgba(219,223,232,.25)',
        width: 297,
        height: 172,
        padding: '20px 26px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    cardTitle:{
        fontWeight: 700,
        fontFamily: 'Montserrat',
        fontSize: 21,
        color: theme.brandColors.blackGray.main,
        textTransform: 'uppercase',
    },
    cardContent:{
        width: '100%'
    }
}))