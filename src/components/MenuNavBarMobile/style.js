import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    politics:{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 16,

        '& *':{
            color: 'rgba(80,112,161,.5)',
            fontSize: '14px',
            textAlign: 'center',
            textDecoration: 'none'
        }
    },
    buttonClose: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#EFEFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'absolute',
        top: 25,
        right: 15,
    },
    enterAndRegister: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 73,
    },
    enter: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 30,
        lineHeight: '36px',
        color: '#4C49E7',
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 0
    },
    register: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 30,
        lineHeight: '36px',
        color: '#4C49E7',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 0
    },
    phoneAndEmail: {
        marginBottom: 48
    },
    phone: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 24,
    },
    email: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: 'rgba(80,112,161, .5)',
        marginBottom: 8,
        textAlign: 'center'
    },
    textPhone: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '22px',
        color: '#5C58FF',
        textDecoration: 'none',
        textAlign: 'center'
    },
    emailText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '22px',
        color: '#5C58FF',
        textDecoration: 'none',
        textAlign: 'center'
    },
    socialBlock: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        height: 40,
        justifyContent: 'center',
        marginBottom: 48,

        '& a': {
            width: 40,
            height: 40,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 0,
        }
    },

});
