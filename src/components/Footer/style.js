import { makeStyles } from '@material-ui/core/styles';
import headerFooterFon from 'images/headerFooterFon.svg';

export const useStyles = makeStyles({
    footer: {
        background: `url(${headerFooterFon}) repeat-x left bottom #3A4699`,
        width: '100%',
        height: '118px',
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
        color: 'white',
        opacity: '.5',
        fontSize: '16px',
        lineHeight: '140%',
        marginBottom: 8
    },
    link: {
        fontSize: '20px',
        color: 'white',
        textDecoration:'none',
        paddingBottom: 4,
        borderBottom: '1px solid rgba(255, 255, 255, .4)'
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