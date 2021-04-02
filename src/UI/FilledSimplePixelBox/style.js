import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    box:{
        position: 'relative',
        width: 390,
        height: 222,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        background: props => props.color,
        '&:after':{
            position: 'absolute',
            display: 'block',
            bottom: '-7px',
            content: "''",
            width: 'calc(100% - 55px)',
            background: props => props.color,
            height: 7,
        },

        '@media(max-width: 660px)':{
            width: 300
        }
    },
    inner:{
       '& *':{
           color: '#fff',
           /*fontSize: '32px',
           fontWeight: 800,*/
           fontFamily: 'Inter',
           textAlign: 'center',
       }
    },
    topLeftCorner:{
        position: 'absolute',
        top: -1,
        left: -1,
        height: 28,
        width: 28,
        background: 'white',

        '& div':{
            width: 14,
            height: 14
        }
    },
    topRightCorner:{
        position: 'absolute',
        top: -1,
        right: -1,
        height: 28,
        width: 28,
        background: 'white',

        '& div':{
            width: 14,
            height: 14
        }
    },
    bottomLeftCorner:{
        position: 'absolute',
        bottom: -1,
        left: -1,
        height: 28,
        width: 28,
        background: 'transparent',
        display: 'flex',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14
        }
    },
    bottomRightCorner:{
        position: 'absolute',
        bottom: -1,
        right: -1,
        height: 28,
        width: 28,
        background: 'transparent',
        display: 'flex',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14
        }
    },
    bottomRightWhite:{
        background: 'white',
        position: 'absolute',
        bottom: -1,
        right: -1
    },
    bottomLeftWhite:{
        background: 'white',
        position: 'absolute',
        bottom: -1,
        left: -1
    },
    topLeftColored:{
        position: 'absolute',
        right: -1,
        bottom: -1,
        background: props => props.color,
    },
    topRightColored:{
        position: 'absolute',
        bottom: -1,
        left: -1,
        background: props => props.color
    },
    shadowColored:{
        background: props => props.color,

    },
    colored:{
        background: props => props.color,
    },

}))