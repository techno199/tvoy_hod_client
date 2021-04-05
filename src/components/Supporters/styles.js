import { makeStyles } from "@material-ui/core";



export const useSupportersStyles = makeStyles(theme => ({
    sectionWrapper:{
        marginBottom: 64,

    },
    container:{
        marginTop: 76,

        '& > h3':{
            textAlign: 'center',
            fontWeight: 800,
            fontFamily: 'Montserrat',
            fontSize: 48,
            marginBottom: 36,
            color: theme.brandColors.blackGray.main,
        },

        '& > div':{
            maxWidth: 790,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: '0 auto'
        },
    },

    imgContainer:{
        marginBottom: 16,
        padding: 32,
        height: 161,
        width: 170,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e9f3f3',
        borderRadius: 22,

        '& > img':{
            width: 148,
        }
    },

    bigImgContainer:{
        marginBottom: 16,
        padding: 32,
        height: 233,
        width: 246,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e9f3f3',
        borderRadius: 22,

        '& > img':{
            width: 197
        }
    }
}))