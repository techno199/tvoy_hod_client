import check            from 'images/check.svg';
import checkMob         from 'images/checkMob.svg';
import { makeStyles }   from '@material-ui/core/styles';

export const useStyles = makeStyles({
    OutputCheckboxes: {
        display: 'flex',

        '@media(max-width: 850px)': {
            flexWrap: 'wrap'
        }
    },
    img: {
        width: 233,
        minWidth: 233,
        height: 'auto',
        marginRight: 20,
        objectFit: 'cover',
        objectPosition: '50% 0',

        '@media(max-width: 850px)': {
            width: 350,
            display: 'block',
            margin: '0 auto 16px auto'
        },

        '@media(max-width: 450px)': {
            width: '100%',
            display: 'block',
            margin: '0 auto 16px auto'
        }
    },
    vp_label: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#717784',
        marginTop: 0,
        marginBottom: 0,
        userSelect: 'none'
    },
    vp_rootFormControlLabel: {
        marginBottom: 16,
        marginLeft: 0,
        width: props => props.onlyImage && 'calc(20% - 17.6px)',
        marginRight: props => props.onlyImage && 0,

        '@media(max-width:800px)': {
            width: props => props.onlyImage && 'calc(50% - 11px)',
        }
    },
    vp_row: {
        '& > $vp_rootFormControlLabel': {
            width: 'calc(50% - 16px)',
            alignItems: 'flex-start',
        }
    },
    vp_rootCheckbox: {
        backgroundColor: 'transparent!important',
        width: props => props.onlyImage && '100%',
        padding: 0,
        alignSelf: 'flex-start',
        marginTop: 2,

        '& svg': {
            marginRight: 8,

            '@media(max-width: 650px)': {
                width: 39,
                height: 39
            }
        }
    },
    vp_checked: {
        '& + $vp_label': {
            color: '#1B1B1B'
        }
    },
    vp_disabled: {
        '& svg': {
            fill: 'rgba(0,0,0,.38)'
        },

        '& img': {
            opacity: 0.5
        }
    },
    imgCheck: {
        width: '100%',
        display: 'block'
    },
    vp_formGroupRoot: {
        flexDirection: props => props.onlyImage && 'row',
        justifyContent: props => props.onlyImage && 'space-between',

        '@media(max-width:800px)': {
            flexWrap: 'wrap'
        }
    },
    wrapCheck: {
        position: 'relative',

        '&:before': {
            content: "''",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: `url(${check}) no-repeat center center #52A0D8`,
            backgroundSize: '39px auto',

            '@media(max-width: 800px)': {
                background: `url(${checkMob}) no-repeat center center`,
                backgroundSize: 'cover',
            }
        }
    }
});