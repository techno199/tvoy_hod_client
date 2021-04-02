import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    img: {
        display: 'block',
        height: 276,
        width: 'auto',
        objectFit: 'cover',
        backdropFilter: 'blur(0px)',

        '@media(max-width: 600px)': {
            width: '100%',
        }

    }
});