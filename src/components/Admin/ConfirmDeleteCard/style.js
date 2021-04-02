import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    ConfirmDeleteUserCard: {
        padding: '30px 72px'
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: '140%',
        color: '#2B3847',
        marginTop: 0,
        marginBottom: 15,
        textAlign: 'center'
    },
    warningText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '15px',
        color: 'rgba(113, 119, 132, 0.5)',
        marginTop: 0,
        marginBottom: 32,
        textAlign: 'center'
    },
    wrapButtons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
        width: 'calc(50% - 10px)',
        height: 45,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        borderRadius: 10,
        border: 0,
        textTransform: 'none',
        letterSpacing: 'normal',
        transition: 'background .3s',
    },
    deleteButton: {
        background: '#297E37',
        color: '#fff',

        '&:hover': {
            background: '#309240'
        }
    },
    cancelButton: {
        background: '#E2251D',
        color: '#fff',

        '&:hover': {
            background: '#E25E5A'
        }
    }
});