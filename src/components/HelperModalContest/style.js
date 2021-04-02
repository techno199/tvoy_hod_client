import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    HelperModalContest: {
        width: 600,
        padding: '35px 45px',
        border: '5px solid #2162AB',
        position: 'absolute',
        background: '#fff',
        right: 16,
        top: 'calc(100% + 20px)',
        zIndex: 232,

        '@media(max-width: 650px)': {
            right: 0,
            width: '100%'
        },

        '@media(max-width: 580px)': {
            padding: 25
        }
    },
    moreStep: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 29,

        '@media(max-width: 580px)': {
           flexDirection: 'column'
        },

        '&:last-child': {
            marginBottom: 0
        }
    },
    numBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 53,
        height: 53,
        background: '#F3F3F6',
        position: 'relative',
        marginRight: 22,

        '@media(max-width: 580px)': {
            marginRight: 0,
            marginBottom: 5,
        },
    },
    textBlock: {
        display: 'flex',
        flexDirection: 'column',

        '@media(max-width: 580px)': {
            width: '100%',
            alignItems: 'center',
        },
    },
    textBlockHeading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: '120%',
        color: '#3F85C3',
        marginTop: 0,
        marginBottom: 5
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: '120%',
        color: '#43508E',
        marginTop: 0,
        marginBottom: 10,

        '@media(max-width: 580px)': {
            textAlign: 'center'
        },
    },
    date: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: '120%',
        color: '#FF7271',
        marginTop: 0,
        marginBottom: 0
    },
    closeIcon: {
        position: 'absolute',
        width: '15px!important',
        height: '15px!important',
        top: '-17px!important',
        right: '-22px!important',
        left: 'auto!important',
        cursor: 'pointer',

        '@media(max-width: 650px)': {
            display: 'none'
        }
    },
    arrowStep: {
        position: 'absolute',
        top: -20,
        right: '23%',
        width: 20,
        height: 20,
        background: '#fff',
        display: 'flex',
        flexWrap: 'wrap',

        '& > div': {
            width: 5,
            height: 5,
        },
    },
    fill: {
        background: '#2162AB'
    },
    buttonPixelContest: {
        minWidth: 122,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        height: 44,
        fontSize: 10,
        fontWeight: 'normal',
        display: 'none',

        '@media(max-width: 580px)': {
            display: 'block',
            width: '100%',
        },

        '&:active': {
            '& .buttonPixel': {
                boxShadow: '0px 4px 0px 0px transparent'
            },
        },

        '& .buttonPixel': {
            borderTopWidth: 4,
            borderBottomWidth: 4,
            boxShadow: 'rgb(202 202 202) 0px 4px 0px 0px'
        },

        '& .innerPixel': {
            top: 8,
            height: 'calc(100% - 20px)',

            '&:before': {
                top: -4,
                left: 4,
                width: 'calc(100% - 8px)',
                height: 4
            },

            '&:after': {
                left: 4,
                width: 'calc(100% - 8px)',
                bottom: -4,
                height: 4,
                boxShadow: 'rgb(202 202 202) -4px 0px 0px 0px, rgb(202 202 202) 4px 0px 0px 0px, rgb(202 202 202) 0px 4px 0px 0px',
            }
        }
    },
});