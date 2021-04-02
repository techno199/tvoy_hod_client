import { makeStyles } from '@material-ui/core/styles';

const linksStyle = {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: 12,
    color: 'rgba(113, 119, 132, 0.5)',
    marginTop: 0,
    marginBottom: 0,
};

export const useStyles = makeStyles({
    Breadcrumbs: {
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        ...linksStyle,
        textDecoration: 'none'
    },
    noLink: {
        ...linksStyle,
        color: 'rgba(113, 119, 132, .8)',
    },
    slash: {
        ...linksStyle,
        color: 'rgba(113, 119, 132, .8)',
        marginRight: 5,
        marginLeft: 5,
    }
});