import { fade, makeStyles } from '@material-ui/core/styles';
import headerFooterFon from 'images/headerFooterFon.svg';
import { theme } from 'UI/themeInstance';

export const useStyles = makeStyles({
    footer: {
        background: theme.brandColors.blackGray.main,
        width: '100%',
        height: '169px',
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        padding: '0 88px',

        '@media(max-width: 720px)': {
            height: 67,
            backgroundPositionY: '20px'
        },

        '@media(max-width: 460px)': {
            '& a': {
                fontSize: '15px',
            },

            padding: '0 20px'
        }
    },
    politics: {
        color: 'white',
        fontSize: '18px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 64,

        '@media(max-width: 1315px)':{
            paddingLeft: 40,
        },

        '@media(max-width: 1280px)':{
            paddingLeft: 0,
        },

        '@media(max-width: 720px)':{
            '& a': {
                textAlign: 'center',

                '&:nth-child(2)': {
                    display: 'none!important'
                }
            }
        },
    },
    sectionFooter: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        minWidth: 182,

        '&:nth-child(1)': {
            marginRight: 64,
        },

        '&:nth-child(2)': {
            minWidth: 300
        }
    },
    title: {
        fontFamily: 'Inter',
        color: '#fff !important',
        opacity: '.5',
        lineHeight: '140%',
        marginBottom: 8
    },
    subtitle: {
        fontFamily: theme.typography.fontFamily,
        color: '#fff !important',
        opacity: .5
    },
    subtitleUnderline: {
        paddingBottom: 4,
        borderBottom: `1px solid ${fade('#fff', .2)}`
    },
    link: {
        fontSize: '20px',
        color: theme.brandColors.brandGreen.main,
        textDecoration:'none',
        paddingBottom: 4,
        borderBottom: `1px solid ${fade(theme.brandColors.brandGreen.main, .4)}`
    },
    social: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: '0 0 0 auto',

        '@media(max-width: 720px)':{
            display: 'none'
        },
    }
});