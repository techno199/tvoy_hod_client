import { makeStyles } from '@material-ui/core/styles';
import bannerProfile from 'images/bannerProfile.svg'
import red_rectangle from 'images/red_rectangle.svg'

export const useStyles = makeStyles({
    BannerOrStageContest: {
        background: `url(${bannerProfile}) no-repeat left top, url(${red_rectangle}) no-repeat right calc(100% - 50px) #F3F3F6`,
        position: 'relative',
        marginTop: 48,

        '& div[class*="bottomLeft"]': {
            display: 'none',

            '@media(max-width: 580px)': {
                display: 'flex',
            }
        }
    },
    innerBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 30,
        paddingRight: 64,
        minHeight: 300,

        '@media(max-width: 1350px)': {
            background: 'rgba(255,255, 255, .6)'
        },

        '@media(max-width: 960px)': {
            background: 'rgba(243,243,246, .85)',
            justifyContent: 'flex-start',
        },

        '@media(max-width: 580px)': {
            padding: '32px 16px',
            minHeight: 'auto'
        }
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#2C73BF',
        marginTop: 0,
        marginBottom: 16,

        '@media(max-width: 580px)': {
            fontSize: 18,
            lineHeight: '22px',
        }
    },
    content: {
        maxWidth: 368,
        display: 'flex',
        flexDirection: 'column',

        '@media(max-width: 580px)': {
            maxWidth: 'none',
            width: '100%'
        }
    },
    subTitle: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '150%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 16,
        flexGrow: 1,

        '@media(max-width: 580px)': {
            fontSize: 14,
            marginBottom: 32
        }
    },
    stageContest: {
        display: 'flex',
        marginTop: 48,

        '@media(max-width: 1410px)': {
            flexWrap: 'wrap'
        },

        '@media(max-width: 580px)': {
            width: '80%',
            margin: '48px auto 0 auto'
        },

        '@media(max-width: 450px)': {
            width: '100%',
        }
    },
    step: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        width: 153,
        height: 102,
        background: '#6EDD9E',
        flexGrow: 1,
        paddingLeft: 16,
        paddingRight: 16,
        maxWidth: 197,
        marginBottom: 30,

        '&:nth-child(1)': {
            alignItems: 'center'
        },

        '@media(max-width: 580px)': {
            maxWidth: 'none',
            width: '100%',
            marginBottom: 0,
            height: 129,
            paddingLeft: 50,

            '&:nth-child(1)': {
                alignItems: 'flex-start'
            }
        },

        '&.noActive': {
            background: '#F3F3F6'
        }
    },
    arrow: {
        width: 59,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,

        '@media(max-width: 580px)': {
            width: '100%',
            height: 57,
            marginBottom: 0,

            '& svg': {
                transform: 'rotate(90deg)'
            }
        },
    },
    checkedWrap: {
        display: 'flex',
        alignItems: 'center',

        '& svg': {
            minWidth: 28,

            '@media(max-width: 580px)': {
                width: 34,
                minWidth: 34,
                height: 34,
            }
        }
    },
    titleDate: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 4,

        '@media(max-width: 580px)': {
            marginLeft: 20
        }
    },
    title: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: '15px',
        color: '#fff',
        marginBottom: 4,
        display: 'inline-block',
        whiteSpace: 'nowrap',

        '@media(max-width: 580px)': {
            fontSize: 18,
            lineHeight: '22px',
        },

        '&.noActive': {
            color: '#C4C4C4'
        }
    },
    date: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '15px',
        color: '#fff',
        display: 'inline-block',

        '@media(max-width: 580px)': {
            fontSize: 14,
            lineHeight: '17px',
        },

        '&.noActive': {
            color: '#C4C4C4'
        }
    },
    bonus: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 22,
        background: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 12,
        paddingLeft: 12,

        '@media(max-width: 580px)': {
            width: 'auto',
            alignSelf: 'flex-start',
        },

        '&.noActive': {
            background: 'rgba(196, 196, 196, 0.2)'
        }
    },
    score: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#ffffff',

        '@media(max-width: 580px)': {
           marginRight: 28,
        },

        '&.noActive': {
            color: '#C4C4C4'
        }
    },
    moneyBonus: {
        position: 'relative',
        bottom: 4
    },
    buttonContest: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 2,

        '@media(max-width: 580px)': {
            marginTop: 49
        }
    },
    butonPixel: {
        '@media(max-width: 580px)': {
           margin: '0 auto'
        }
    }
});