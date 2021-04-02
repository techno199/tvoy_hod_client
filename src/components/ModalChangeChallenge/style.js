import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    ModalChangeChallenge: {
        padding: '32px 48px',
        maxHeight: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',

        '@media(max-width: 580px)': {
            padding: 24,
        }
    },
    wrapScroll: {
        maxHeight: '100%',
        overflow: 'auto',
        height: '100%',
        flexGrow:1,
        paddingRight: 35,

        '&::-webkit-scrollbar': {
            width: 8,
        },
        '&::-webkit-scrollbar-track': {
            background: '#E9E9E9'      /* цвет дорожки */
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#3F85C3',    /* цвет плашки */
        }
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1b1b1b',
        marginTop: 0,
        marginBottom: 24
    },
    subTitle: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: '17px',
        color: '#717784',
        marginTop: 0,
        marginBottom: 16,
        display: 'block'
    },
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
        padding: 0,
        paddingRight: 10,
    },
    vp_checked: {
        '& + $vp_label': {
            color: '#1B1B1B'
        }
    },
    vp_formControlLabelRoot: {
      marginLeft: 0,
    },
    radioWrap: {
        display: 'flex',
        marginBottom: 24,
    },
    iconBlock: {
        width: 30,
        minWidth: 30,
        height: 30,
        marginRight: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& svg': {
            width: 20,
            height: 20
        }
    },
    descText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '130%',
        color: '#717784',
        marginTop: 8,
        marginBottom: 0,
    },
    buttonBlock: {
        marginTop: 8,

        '@media(max-width: 580px)': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
    },
});