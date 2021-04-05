import { makeStyles } from "@material-ui/core";

export const useMainPageStyles = makeStyles(theme => ({
    background: {
        minHeight: 'calc(100vh - 100px - 118px)',
        height: '100%',
        width: '100%',
        position: 'relative',
        marginTop: 20
    },
}));