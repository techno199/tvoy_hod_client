import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    box:{
        position: 'relative',
        maxWidth: '390px',
        width: '100%',
        height: 222,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 16,
        background: props => props.color,
        '&:after':{
            position: 'absolute',
            display: 'block',
            bottom: '-7px',
            content: "''",
            width: 'calc(100% - 55px)',
            background: props => props.color,
            height: 7,
            opacity: '.35'
        }
    },
    inner:{
       '& *':{
           color: '#fff',
           fontSize: '32px',
           fontWeight: 800,
           fontFamily: 'Inter',
           textAlign: 'center',

           '@media(max-width: 450px)':{
               fontSize: 22
           }
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
        background: 'white',
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
        background: 'white',
        display: 'flex',
        flexWrap: 'wrap',

        '& div':{
            width: 14,
            height: 14
        }
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
        opacity: '.35',

    },
    colored:{
        background: props => props.color,
    },

}))