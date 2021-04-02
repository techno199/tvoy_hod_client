import makeStyles from "@material-ui/core/styles/makeStyles";


export const useStyles = makeStyles(theme => ({
    wrapper:{
        position: 'relative',
    },
    icon:{
        top: props => props.topOffset || '-50px',
        left: props => props.leftOffset || '20px',
        position: 'absolute',
    }
}))