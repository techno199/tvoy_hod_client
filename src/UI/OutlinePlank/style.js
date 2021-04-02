import {makeStyles} from "@material-ui/core";
import transparentPixel from 'images/transparentPixel.png'

export const useStyles = makeStyles(theme => ({
    border: {
        marginBottom: 100,
        marginTop: 60,
        padding: '8px 32px 8px 12px',
        width: '100%',
        height: 140,
        border: '14px solid rgba(121,202,223,0.6)',
        borderRadius: '5px',
        backgroundColor: 'transparent',
        position: 'relative',
        backgroundImage: `url(${transparentPixel})`,
        backgroundSize: 'contain',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:before':{
            content: "''",
            width: 'calc(100% - 25px)',
            position: 'absolute',
            top: -1,
            height: 14,
            left: 14,
            background: 'rgb(228,244,249)'
        },
        '&:after':{
            content: "''",
            width: 'calc(100% - 25px)',
            position: 'absolute',
            bottom: '-27px',
            height: 14,
            left: 14,
            background: 'rgb(228,244,249)'
        },
        '@media(max-width:910px)':{
            height: 'auto',
            padding: '8px 10px 8px 12px'
        }
    },
    topLeftCorner:{
        position: 'absolute',
        top: -15,
        left: -15,
        width: 28,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14,
            maxWidth: 14,
            minWidth: 14,
            maxHeight: 14,
            minHeight: 14,
        }
    },

    topRightCorner:{
        position: 'absolute',
        top: -15,
        right: -15,
        width: 28,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14,
            maxWidth: 14,
            minWidth: 14,
            maxHeight: 14,
            minHeight: 14,
        }
    },
    bottomLeftCorner:{
        position: 'absolute',
        bottom: -15,
        left: -15,
        width: 28,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14,
            maxWidth: 14,
            minWidth: 14,
            maxHeight: 14,
            minHeight: 14,
        }
    },
    bottomRightCorner:{
        position: 'absolute',
        bottom: -15,
        right: -15,
        width: 28,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14,
            maxWidth: 14,
            minWidth: 14,
            maxHeight: 14,
            minHeight: 14,
        }
    },
    filled:{
        background: 'rgba(121,202,223,0.6)'
    },
    colored:{
        background: 'rgba(121,202,223,0.6)'
    },
    shadowed:{
        background: '#e4f4f9'
    },
    empty: {
        background: 'white'
    },
    content:{
        width: '100%'
    }
}))