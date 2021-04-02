const { makeStyles } = require("@material-ui/core");


export const useAuthStyles = makeStyles(theme => ({
    authContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}))