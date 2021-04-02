import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    SidebarAdmin: {
        width: 302,
        minWidth: 302,
        background: '#250C4F',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        position: 'sticky',
        top: 0,
    },
    sidebarLogo: {
        paddingTop: 25,
        paddingLeft: 32,
        marginBottom: 84,

        '& svg': {
            cursor: 'pointer'
        }
    },
    tabItem: {
        width: '100%',
        cursor: 'pointer',
        height: 35,
        marginBottom: 25,
        borderLeft: '7px solid transparent',

    },
    activeTabitem: {
        borderLeft: '7px solid #7358FF',

        '& > div div': {
            fontWeight: 500
        }
    },
    tabContent: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: 20,
        alignItems: 'center',
    },
    icon: {
        width: 27,
        marginRight: 5,
        display: 'flex'
    },
    tabTitle: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: props => props.isActive ? '#fff' : 'rgba(255,255,255,.5)',
    },
    exit: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 32,
        paddingRight: 32,
        marginTop: 'auto',
        marginBottom: 40,
        paddingTop: 30,
    },
    fio: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: '22px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 8
    },
    role: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: '12px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 0
    },
    buttonExit: {
        width: 94,
        height: 45,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5);',
        background: 'rgba(239, 239, 255, 0.1)',
        borderRadius: 10,
        border: 0,
        textTransform: 'none',
        letterSpacing: 'normal',
        transition: 'all .3s',

        '&:hover': {
            background: 'rgba(239, 239, 255, 0.15)',
        }
    }
}));