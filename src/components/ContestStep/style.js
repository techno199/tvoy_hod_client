import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    oneStep: {
        width: 'calc(50% - 45px)',
        minHeight: 225,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 90,
        paddingLeft: 70,
        paddingTop: 20,
        paddingBottom: 20,

        '@media(max-width: 1330px)': {
            width: '100%',
            maxWidth: 700,
            margin: '0 auto 90px auto',

            '&.step1': {
                order: -3
            },

            '&.step2': {
                order: -2
            },

            '&.step4': {
                order: -1
            }
        },

        '@media(max-width: 580px)': {
            paddingLeft: 30,
            paddingBottom: 80
        },

        '&.step1': {
            '@media(max-width: 580px)': {
                paddingBottom: 20
            },

            '& .arrowStepConest': {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: -73,
                left: 'auto',

                '@media(max-width: 1330px)': {
                    position: 'absolute',
                    top: 'auto',
                    bottom: -73,
                    transform: 'translateX(50%) rotate(90deg)',
                    right: '50%',
                    left: 'auto',
                },
            }
        },

        '&.step2': {
            '& .arrowStepConest': {
                position: 'absolute',
                top: 'auto',
                bottom: -73,
                right: '22%',
                left: 'auto',
                transform: 'rotate(90deg)',

                '@media(max-width: 1330px)': {
                    position: 'absolute',
                    top: 'auto',
                    bottom: -73,
                    transform: 'translateX(50%) rotate(90deg)',
                    right: '50%',
                    left: 'auto'
                }
            }
        },

        '&.step3': {
            '& .arrowStepConest': {
                position: 'absolute',
                top: 'auto',
                bottom: -73,
                left: '22%',
                right: 'auto',
                transform: 'rotate(90deg)',

                '@media(max-width: 1330px)': {
                    position: 'absolute',
                    top: 'auto',
                    bottom: -73,
                    transform: 'translateX(50%) rotate(90deg)',
                    right: '50%',
                    left: 'auto'
                }
            }
        },

        '&.step4': {
            '& .arrowStepConest': {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%) rotate(180deg)',
                left: -73,
                right: 'auto',

                '@media(max-width: 1330px)': {
                    position: 'absolute',
                    top: 'auto',
                    bottom: -73,
                    transform: 'translateX(50%) rotate(90deg)',
                    right: '50%',
                    left: 'auto'
                }
            },

            '& img': {
                '@media(max-width: 580px)': {
                    width: '30%'
                }
            }
        },

        '&:last-child': {
            '& > img': {
                top: -20,
            }
        },

        '& svg': {
            width: 54,
            height: 54,
            position: 'absolute',
            left: 7,
            top: -15,
            zIndex: 201
        }
    },
    img: {
        position: 'absolute',
        right: 20,
        top: 20,

        '@media(max-width: 580px)': {
            width: '20%'
        }
    },
    bonus: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 119,
        height: 22,
        background: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 12,
        paddingLeft: 12,

        '@media(max-width: 580px)': {
            width: 'auto',
            alignSelf: 'flex-start',
            marginLeft: 35,
            whiteSpace: 'nowrap'
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
        bottom: 4,
        left: 5,
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: '28px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 11
    },
    date: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: '21px',
        color: '#FDE659',
        marginTop: 0,
        marginBottom: 6,
    },
    textButton: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '21px',
        color: '#fff',
        marginTop: 0,
        marginBottom: 0,
        paddingRight: 160,

        '@media(max-width: 580px)': {
            width: '100%',
            paddingRight: 0
        }
    },
    buttonPixelContest: {
        minWidth: 122,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        height: 44,
        fontSize: 10,
        fontWeight: 'normal',
        marginRight: 16,
        position: 'absolute',
        right: 16,
        bottom: 20,

        '@media(max-width: 580px)': {
            width: 'calc(100% - 40px)',
            left: 20,
            right: 'aut0'
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
    layout: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: 255,
        background: 'rgba(255, 255, 255, 0.6)',
    },
});