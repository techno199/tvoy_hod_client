import { makeStyles } from "@material-ui/core";

export const useNavbarStyles = makeStyles(theme => ({
    navbarWrapper:{
        background: theme.brandColors.blackGray.main,
        flex: '0 0 auto',
        height: 100,
        width: '100%',
    },
    navbarWrapperMain: {
        background: '#fff'
    },
    obrLogo:{
        position: 'relative',
        top: '28px',

        '@media(max-width: 450px)':{
            display: 'none'
        }
    },
    between: {
        height: 100,
    },
    logoWrap: {
        position: 'relative',
        zIndex: 3457,
    },
    wrapperButtons:{
        display: "flex",
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    navlink: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#1B1B1B',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: 47,

        '&:last-of-type': {
            marginRight: 0,
        },

        '& svg': {
            marginRight: 8,
        }
    },
    wrapNavLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    button: {
        height: 52,
        width: 163,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        position: 'relative',
        marginRight: 15,
        transition: 'background .3s',

        '&:hover': {
            background: '#ececec'
        },

        '& span': {
            position: 'relative',
            zIndex: 11,
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 16,
            color: '#FF7271',
        },

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
    buttonInner: {
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
    buttonLong: {
        position: 'absolute',
        width: 'calc(100% + 30px)',
        height: 'calc(100% - 30px)',
        top: 15,
        left: -15,
        background: 'inherit'
    },
    linkNoBorderViolet: {
        color: '#5C58FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        fontFamily: 'Inter',
        fontSize: 16,
        padding: "10px 16px",
        marginRight: 24,
        border: 'none',
        background: 'none',
        outline: 'none',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    withBorderViolet: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        background: 'rgba(92, 88, 255, 0.1)',
        border: 0,
        boxSizing: 'border-box',
        color: '#5C58FF',
        fontFamily: 'Inter',
        fontSize: 16,
        padding: "10px 16px",
        outline: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all .3s',

        '&:hover': {
            background: 'rgba(92, 88, 255, 0.2)',
        }
    },
    margin:{
        marginLeft: 16
    }
}));