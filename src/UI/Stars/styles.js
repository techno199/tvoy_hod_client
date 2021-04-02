import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    stars:{
        position: 'absolute',
        top: '-47px',
        zIndex: '1',
        width: '50%',
        height: '100%',

        '@media(max-width: 960px)':{
            display: 'none'
        }
    }
}))