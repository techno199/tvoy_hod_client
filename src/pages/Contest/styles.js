import { makeStyles } from "@material-ui/core";
import pixelBG from 'images/pixelBG.svg'

export const useContestStyles = makeStyles(theme => ({
    bannerContent:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        '@media(max-width: 910px)':{
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 8
        }
    },
    bannerTextt:{
        fontWeight: 800,
        fontSize: 30,
        color: 'black',
        '& span':{
            color: '#ff8483',

        },

        '@media(max-width: 430px)':{
            fontSize: 25
        }
    },
    background: {
        minHeight: 'calc(100vh - 100px - 118px)',
        height: '100%',
        width: '100%',
        background: '#fff',
        backgroundImage: `url(${pixelBG})`,
        backgroundRepeatX: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundSize: 'contain',
        position: 'relative',
        marginTop: 20
    },
    heading: {
        marginTop: 0,
        marginBottom: 48,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 172,
        position: 'relative',

        '& #lightRed':{
            color: '#ff8483'
        },

        '@media(max-width: 990px)': {
            paddingLeft: 0,
            textAlign: 'left',
            marginBottom: 24,
            fontSize: 30,
            display: 'flex',
            flexWrap: 'wrap',

            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 550px)': {
            textAlign: 'left',
            fontSize: 24,
        },

        '& span': {
            color: '#ffd105'
        },

        '& img':{
            position: 'absolute',
            left: 0,
            top: -19
        },
    },
}));