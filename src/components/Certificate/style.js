import { makeStyles } from "@material-ui/core";

export const useCertificateCardStyles = makeStyles(theme => ({
    certCard: {
        width: '100%',
        maxWidth: 546,
        maxHeight: 622,
        position: 'relative',
        padding: 42,
        backgroundColor: theme.main,
        minWidth: 309,
        minHeight: 400,

        '@media (max-width: 1020px)': {
            maxHeight: 640
        },

        '@media (max-width: 799px)': {
            maxHeight: 620
        },

        '@media(max-width: 680px)': {
            maxWidth: 'none',
            minWidth: 'auto',
            maxHeight: 'none',
        },

        '@media(max-width: 550px)': {
            padding: 15,
            boxSizing: 'border-box'
        }
    },
    subTitle: {
        marginBottom: theme.spacing(3),
        fontWeight: 400,
        fontSize: 18,
        color: theme.light
    },
    hiddentTop:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',

    },
    downloadCerf: {
        color: 'white',
        background: '#FF7271',
        padding: '14px 55px',
        textDecoration: 'none'
    },
     noValue: {
         margin: 0,
         marginTop: 8,
         color: 'rgba(255,255,255,.5)',
         fontSize: 14,
     },
    editData: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FF7271',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    wrapEditData: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: 160,
        zIndex: 219,

        '& p': {
            margin: 0,
            marginTop: 10,
            fontFamily: 'Proxima Nova Rg',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: '15px',
            color: '#FFFFFF'
        }
    },
    wrapHeading: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapLoader: {
        height: 78,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));