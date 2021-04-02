import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    AdminLogin: {
        minHeight: '100vh',
        background: '#F6F6F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formWrap: {
        textAlign: 'center',

        '& svg': {
            marginBottom: 50,
            cursor: 'pointer'
        }
    },
    form: {
        background: '#fff',
        borderRadius: 10,
        padding: '30px 58px'
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: '140%',
        color: '#2B3847',
        marginTop: 0,
        marginBottom: 15
    },
    formGroup: {
        width: 281,
        textAlign: 'left',
        marginBottom: 16,
    },
    button: {
        width: '100%',
        height: 45,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#fff',
        background: '#7358FF',
        borderRadius: 10,
        border: 0,
        textTransform: 'none',
        letterSpacing: 'normal',
        marginTop: 16,
        transition: 'all .3s',

        '& svg': {
            marginBottom: 0
        },

        '&:hover': {
            background: '#8D76FF'
        }
    },
    error: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'tomato',
    }

});