const { makeStyles } = require("@material-ui/core");

export const useAuthStyles = makeStyles(theme => ({
    authContainer: {
        [theme.breakpoints.up(648)]: {
            maxWidth: 648
        }
    }
}))