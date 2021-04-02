import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    tabsMenu: {
        marginBottom: 32,

        '@media(max-width: 700px)': {
            borderBottom: '1px solid rgba(27, 27, 27, 0.1)',
        },
    },
    vp_tabRoot: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        textTransform: 'none',
        whiteSpace: 'nowrap',
        fontSize: 18,
        color: '#000',
        padding: 0,
        minWidth: 'auto',
        minHeight: 52,
        marginRight: 40,

        '&:last-of-type': {
            marginRight: 0,
        }
    },
    vp_indicator: {
        height: 3,
        background: '#FF7271'
    },
    vp_flexContainer: {
        borderBottom: '1px solid rgba(27, 27, 27, 0.1)',

        '@media(max-width: 700px)': {
            border: 0
        }
    }
});
