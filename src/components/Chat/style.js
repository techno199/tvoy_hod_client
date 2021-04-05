import { makeStyles } from "@material-ui/core";
import transparentGeometry from 'images/transparentGeometry.png'


export const useChatStyles = makeStyles(theme => ({
    sectionWrapper:{
        marginTop: 49,
        position: 'relative',
    },
    replics:{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 2
    },

    firstLine:{
        position: 'absolute',
        top: 18, left: 0,
        width: '100%',
        height: 105,
        background: `url(${transparentGeometry})`
    },

    secondLine:{
        position: 'absolute',
        top: 'calc(50% - 100px)', left: 0,
        width: '100%',
        height: 105,
        background: `url(${transparentGeometry})`
    },

    thirdLine:{
        position: 'absolute',
        top: 'calc(75%)', left: 0,
        width: '100%',
        height: 105,
        background: `url(${transparentGeometry})`
    },
}))