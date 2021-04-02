import { makeStyles } from "@material-ui/core";
import fonSidebar1 from 'images/fonSidebar1.svg';
import fonSidebar2 from 'images/fonSidebar2.svg';
import fonSidebar3 from 'images/fonSidebar3.svg';
import fonSidebar4 from 'images/fonSidebar4.svg';
import fonSidebar5 from 'images/fonSidebar5.svg';
import fonSidebar7 from 'images/fonSidebar7.svg';

export const useSidebarStyles = makeStyles(() => ({
    sidebarwrapper: {
        width: 292,
        minWidth: 292,
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        zIndex: 287,

        '& .thumb-vertical': {
            background: 'rgba(255,255,255,.3)!important',
            marginLeft: -2,
        },

        '& .track-vertical': {
            width: '4px!important'
        }

    },
    sidebarLogo: {
        padding: '12px 40px 12px 40px',
        background: '#3F85C3',
        width: 'calc(100% - 4px)',

        '& svg': {
            cursor: 'pointer'
        }
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 120,
        paddingTop: 50,
        background: `
            url(${fonSidebar1}) no-repeat -150px calc(100% + 1px),
            url(${fonSidebar7}) no-repeat 210px calc(100% - 95px) #3F85C3
        `
    },
    techSupport: {
        paddingLeft: 31,
        background: `
        url(${fonSidebar2}) no-repeat left -34px, 
        url(${fonSidebar3}) no-repeat left 104px,
        url(${fonSidebar4}) no-repeat 30px 195px,
        url(${fonSidebar7}) no-repeat 64px 68px #79539D
        `,
        paddingBottom: '280px'
    },
    techSupportText: {
        fontFamily: 'Inter',
        fontSize: 16,
        lineHeight: '19px',
        color: '#fff',
        marginBottom: 16,
    },
    techSupportInfo: {
        fontFamily: 'Inter',
        fontSize: 16,
        color: '#fff',
        fontWeight: 500,
        marginBottom: 8,
    },
    tabItem: {
        width: '100%',
        cursor: 'pointer',
        height: 46,
        marginBottom: 14,
        borderLeft: '4px solid transparent',
        transition: '.3s',

        '&:hover': {
            background: 'rgba(255,255,255,.05)',
            transition: '.3s'
        }
    },
    activeTabitem: {
        borderLeft: '4px solid #A1FFF4',

        '& > div div': {
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 16,
            color: '#A1FFF4'
        }
    },
    tabContent: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: 27,
        alignItems: 'center',
    },
    icon: {
        width: 29,
        marginRight: 27,
        display: 'flex',
        justifyContent: 'center'
    },
    tabTitle: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#fff',
    },
    noWork: {
      opacity: 0.4
    },
    divider: {
        backgroundColor: 'rgba(255,255,255,.1)',
        marginBottom: 16
    },
    logout: {
        background: `url(${fonSidebar2}) no-repeat left calc(100% + 34px) #3A4699`,
        paddingTop: 21,
        paddingBottom: 52,

        '& hr:last-of-type': {
            marginBottom: 0
        }
    },
    topLogout: {
        height: 69,
        background: `url(${fonSidebar5}) no-repeat -15px 28px #2162AB`
    },
    techSupportWrap: {
        position: 'relative',
        bottom: 30,
    },
    wrapTablinks: {
        maxHeight: '100%',
        overflow: 'auto',

        '&::-webkit-scrollbar': { //
            width: 4,
        },
        '&::-webkit-scrollbar-track': {
            background: '#3F85C3'      /* цвет дорожки */
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,.3)',    /* цвет плашки */
            borderRadius: 20,       /* закругления плашки */
        }
    }
}));

export const useMobileStyles = makeStyles(theme => ({
    sidebarwrapper: {
        zIndex: 9999,
        width: '100%',
        height: '100%',
        background: '#3F85C3',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        '-webkit-overflow-scrolling': 'touch',
        position: 'relative',
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',

        '& .tabItem': {
            marginTop: 8,
            marginBottom: 8
        }
    },
    mobileOpener: {
        marginTop: '72px',
        paddingTop: '40px',
        background: theme.main,
    },
    tabItem: {
        width: '100%',
        cursor: 'pointer',
        height: 46,
        marginBottom: 8,
        marginTop: 8,
        transition: '.3s',

        '&:hover': {
            background: 'rgba(255,255,255,.05)',
            transition: '.3s'
        }
    },
    activeTabitem: {
        borderLeft: '4px solid #A1FFF4',

        '& > div div': {
            fontWeight: 600
        }
    },
    tabContent: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: 32,
        alignItems: 'center',
    },
    icon: {
        marginRight: theme.spacing(2),
        display: 'flex'
    },
    tabTitle: {
        fontWeight: 'normal',
        fontSize: 18,
        color: theme.light,
    },
    divider:{
        background: 'rgba(255,255,255,.1)',
        color: 'rgba(255,255,255,.1)',
        margin: 0,

        '&:last-of-type': {
            marginBottom: 0
        }
    },
    mobileWrapper:{
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,.1)',
        height: '78px !important',
        top: '0',
        zIndex: 8999,
        left: '0',
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
    },
    mobileDrawer:{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        background: '#3F85C3',
        zIndex: '9999999',
        display: props => props.open ? 'block' : 'none',
    },
    openMenuIcon: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    logoutWrap: {
        '& > div': {
            marginTop: 14
        }
    },
    logoBlock: {
        paddingTop: 22,
        paddingBottom: 16,
        paddingLeft: 40,
        display: 'flex',
        position: 'relative',

        '& > svg': {
            position: 'absolute',
            right: 22,
            top: 27
        }
    },
    bonus: {
        background: '#EAF3FF',
        position: 'relative',

        '&:before': {
            content: "''",
            position: 'absolute',
            left: -5,
            top: 5,
            width: 5,
            background: 'inherit',
            height: 'calc(100% - 10px)'
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            left: -10,
            top: 10,
            width: 10,
            background: 'inherit',
            height: 'calc(100% - 20px)'
        },
    },
    bonusSpan: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#3F94F6',
        display: 'flex',
        alignItems: 'center',
        height: 39,
        padding: '12px 9px',
        position: 'relative',
        zIndex: 17,

        '& img': {
            marginLeft: 8
        }
    },
    inner: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'inherit',

        '&:before': {
            content: "''",
            position: 'absolute',
            right: -5,
            top: 5,
            width: 5,
            background: 'inherit',
            height: 'calc(100% - 10px)'
        },

        '&:after': {
            content: "''",
            position: 'absolute',
            right: -10,
            top: 10,
            width: 10,
            background: 'inherit',
            height: 'calc(100% - 20px)'
        },
    },
    techSupportInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    techSupportHeading: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '19px',
        color: '#fff',
        marginTop: 24,
        marginBottom: 12,
        marginLeft: 30,
    },
    textLink: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '19px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 24,
        textDecoration: 'none',
        marginLeft: 30,
    }
}));