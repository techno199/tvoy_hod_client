import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapContent: {
        maxWidth: 1224,
        margin: '0 auto',
        boxSizing: 'border-box',

        '@media(max-width: 1254px)': {
            paddingLeft: 15,
            paddingRight: 15,

        }
    },
});
