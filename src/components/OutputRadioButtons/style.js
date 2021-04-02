import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    vp_label: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#717784',
        marginTop: 0,
        marginBottom: 0,
        userSelect: 'none'
    },
    vp_radioRoot: {
        backgroundColor: 'transparent!important',
        alignSelf: 'flex-start',

        '& svg': {
            fill: '#717784',

            '@media(max-width: 650px)': {
                width: 39,
                height: 39
            }
        }
    },
    vp_checked: {
        '& + $vp_label': {
            color: '#1b1b1b'
        }
    }
});