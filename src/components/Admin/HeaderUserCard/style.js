import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    headerUserCard: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    leftPart: {
        display: 'flex',
        flexDirection: 'column'
    },
    rightPart: {
      display: 'flex'
    },
    userFio: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '140%',
        color: '#2B3847',
        marginTop: 0,
        marginBottom: 8
    },
    dataReg: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '15px',
        color: 'rgba(113, 119, 132, 0.5)',
        marginTop: 0,
        marginBottom: 16
    },
    button: {
        width: 189,
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
        background: 'transparent',
        color: 'rgba(43, 56, 71, 0.5)',

        '&:hover': {
            background: 'transparent',
        }
    },
    editButton: {
        background: '#EFEFFF',
        color: '#7358FF',
        marginLeft: 15,

        '&:hover': {
            background: '#EAEAFF',
        },

        '& svg': {
            width: 18,
            height: 'auto'
        }
    },
    saveButton: {
        width: 150,
        background: '#297E37',
        color: '#fff',

        '&:hover': {
            background: '#2F903F',
        },
    },
    cancelButton: {
        width: 150,
        background: '#E2251D',
        color: '#fff',
        marginLeft: 10,

        '&:hover': {
            background: '#E2605B',
        }
    }
});