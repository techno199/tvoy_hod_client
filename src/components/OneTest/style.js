import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    OneTest: {
        display: 'flex',
        marginBottom: 48,

        '@media(max-width: 800px)': {
            flexWrap: 'wrap',

            '&:last-child': {
                marginBottom: 0,
            }
        }
    },
    imgBlock: {
        width: 323,
        minWidth: 323,

        '@media(max-width: 800px)': {
            width: '100%',
            minWidth: 'auto'
        }
    },
    img: {
        height: 'auto!important',

        '@media(max-width: 800px)': {
            display: 'block',
            margin: '0 auto',
            maxWidth: '375px',
        },

        '@media(max-width: 400px)': {
            display: 'block',
            maxWidth: 'none',
            width: '100%'
        },
    },
    content: {
        marginLeft: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        '@media(max-width: 800px)': {
           marginLeft: 0,
        },
    },
    label: {
        padding: '4px 16px',
        background: 'rgba(255, 188, 57, 0.1)',
        borderRadius: 3,
        color: '#FFBC39',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: '133%',
        display: 'inline-block',
        marginBottom: 8,

        '@media(max-width: 800px)': {
            marginBottom: 0,
        }
    },
    completed: {
        color: '#74CD63',
        background: 'rgba(116, 205, 99, 0.1)',
    },
    unavailable: {
        color: '#c4c4c4',
        background: 'rgba(196, 196, 196, 0.1)'
    },
    wrapTitle: {
        '@media(max-width: 800px)': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            marginTop: 16,
        }
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '29px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 800px)': {
            order: -1,
            marginBottom: 0
        }
    },
    descriptions: {
        maxWidth: 540,
        flexGrow: 1,

        '@media(max-width: 800px)': {
            maxWidth: 'none'
        },

        '& p': {
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: '130%',
            color: '#717784',
            marginTop: 0,
            marginBottom: 12
        }
    },
    linkWrap: {
       display: 'flex',

        '@media(max-width: 800px)': {
           marginTop: 12,
        },

        '@media(max-width: 520px)': {
            width: '100%',
            flexWrap: 'wrap',
        }
    },
    completedLink: {
        color: '#FF5252',
        background: 'rgba(255, 82, 82, 0.1)',
    },
    time: {
        display: 'flex',
        alignItems: 'flex-end',
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#A4A6BA',
        marginLeft: 70,
        paddingBottom: 13,

        '@media(max-width: 520px)': {
            order: -1,
            width: '100%',
            justifyContent: 'center',
            marginBottom: 17,
            marginLeft: 0,
            paddingBottom: 0,
        }
    },
    imgClock: {
        marginRight: 8
    },
    linkTest: {
        textDecoration: 'none',

        '@media(max-width: 520px)': {
            width: 245,
            margin: '0 auto',

            '& .wrapButtonPixel': {
                width: '100%',
            }
        }
    },
    noPointer: {
        cursor: 'default'
    }
});