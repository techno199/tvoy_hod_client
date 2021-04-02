import { makeStyles }           from '@material-ui/core/styles';
import plashkVk                 from 'images/plashkVk.svg';

export const useStyles = makeStyles({
    vk_widget: {
        background: `url(${plashkVk}) no-repeat calc(100% - 50px) center #2787F5`,
        position: 'relative',
        marginRight: 28,
        marginLeft: 28,

        '&:before': {
            content: "''",
            position: 'absolute',
            left: -14,
            top: 14,
            width: 14,
            background: 'inherit',
            height: 'calc(100% - 28px)'
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            left: -28,
            top: 28,
            width: 28,
            background: 'inherit',
            height: 'calc(100% - 56px)'
        },

        '@media(max-width: 960px)': {
            background: `#2787F5`,
        },
    },
    vk_widgetContent: {
        padding: 40,
        position: 'relative',
        background: 'inherit',

        '&:before': {
            content: "''",
            position: 'absolute',
            right: -14,
            top: 14,
            width: 14,
            background: 'inherit',
            height: 'calc(100% - 28px)'
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            right: -28,
            top: 28,
            width: 28,
            background: 'inherit',
            height: 'calc(100% - 56px)'
        },

        '@media(max-width: 620px)': {
            padding: '32px 0'
        }
    },
    headingWidget: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 40,
        maxWidth: 535,

        '@media(max-width: 1250px)': {
            maxWidth: 440,
        },

        '@media(max-width: 1100px)': {
            maxWidth: 535,
        },

        '@media(max-width: 620px)': {
            fontSize: 20,
            lineHeight: '24px',
            marginBottom: 40,
        },
    },
    widgetText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '140%',
        color: '#fff',
        marginTop: 0,
        marginBottom: 24,
        maxWidth: 700,

        '@media(max-width: 1420px)': {
            maxWidth: 560,
        },

        '@media(max-width: 1280px)': {
            maxWidth: 370,
        },

        '@media(max-width: 1100px)': {
            maxWidth: 560,
        },

        '@media(max-width: 620px)': {
            fontSize: 16,
        },
    },
    buttonPixel: {
        '& .buttonPixel': {
            color: '#3F94F6',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 14,
        },

        '& .innerPixel': {
            '&:after': {
                boxShadow: '#2070CC -7px 0px 0px 0px, #2070CC 7px 0px 0px 0px, #2070CC 0px 6px 0px 0px'
            }
        }
    },
    arrowSmall: {
        marginLeft: 16,
    },
});