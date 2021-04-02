import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    wrapFilterSections: {
        padding: '25px 40px'
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '140%',
        color: '#2B3847',
        marginTop: 0,
        marginBottom: 20
    },
    filterSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonBlue: {
        width: 228,
        height: 52,
        marginRight: 16,
        textTransform: 'none',
        borderRadius: 6,
        background: 'rgba(16,86,227,.1)',
        fontSize: 17,
        color: '#1056E3',
        transition: 'all .3s',

        '&:hover': {
            background: 'rgba(16,86,227,.15)',
        }
    },
    addUser: {
        width: 144,
        height: 45,
        textTransform: 'none',
        borderRadius: 10,
        background: '#7358FF',
        boxSizing: 'border-box',
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
        transition: 'all .3s',

        '&:hover': {
            background: '#856DFF'
        }
    },
    rightButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    buttonFilter: {
        width: 139,
        height: 45,
        textTransform: 'none',
        borderRadius: 10,
        background: '#EFEFFF',
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#7358FF',
        transition: 'all .3s',

        '&:hover': {
            background: '#E3E3FF',
        }
    },
    configIcon: {
        marginLeft: 10,

        '& svg': {
            width: 28,
            height: 28,
        }
    },
    wrapFilter: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 30,
        background: '#fff',
        marginTop: 20,
        borderRadius: 10,
    },
    sectionFilter: {
        width: 'calc(33.3333333% - 13.33333333px)',
        marginBottom: 15,
        marginRight: 20,

        '&:nth-child(3n)': {
           marginRight: 0
        }
    },
    vp_tooltip: {
        backgroundColor: '#000',
        fontSize: 11,
    },
    buttonsBlock: {
        width: '100%'
    },
    buttons: {
        height: 45,
        textTransform: 'none',
        borderRadius: 10,
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#fff',
        transition: 'all .3s',
    },
    buttonGreen: {
        width: 134,
        background: '#297E37',
        marginRight: 10,

        '&:hover': {
            background: '#309240'
        }
    },
    buttonRed: {
        width: 124,
        background: '#E2251D',

        '&:hover': {
            background: '#E26762'
        }
    }

}));