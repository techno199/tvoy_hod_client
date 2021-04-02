import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapLk: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: '48px 54px',
        maxWidth: '100%',

        '@media(max-width: 1100px)': {
            paddingTop: 105,
            paddingLeft: 15,
            paddingRight: 15,
        }
    }
});
