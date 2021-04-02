import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    sectionsContent: {
        background: '#fff',
        boxShadow: '0px 10px 30px rgba(113, 119, 132, 0.05)',
        borderRadius: 10,
        padding: 30,
        paddingBottom: 15,
        marginBottom: 15,
    },
    sectons: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    headingSections: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: '18px',
        color: '#7358FF',
        marginTop: 0,
        marginBottom: 15
    },
    collapse: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: 17,
        transform: 'rotate(180deg)',
    },
    bottomArrow: {
        transform: 'rotate(0deg)',
    },
    collapseClick: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#717784',
        cursor: 'pointer'
    },
    sectionFilter: {
        width: 'calc(33.3333333% - 13.33333333px)',
        marginBottom: 15,
        marginRight: 20,

        '&:nth-child(3n)': {
            marginRight: 0
        },

        '&.d-flex': {
            justifyContent: 'space-between'
        }
    },
    w50: {
        width: 'calc(50% - 10px)'
    },
    twoThirds: {
        width: 'calc(66.66666666% - 10px)',
        marginRight: 0,
    },
    w100: {
        width: '100%',
        marginRight: 0,
    },
    checkboxContainer: {
       display: 'flex',
       alignItems: 'center',
        marginBottom: 10,
    },
    labelCheckbox: {
        display: 'inline-block',
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'rgba(113, 119, 132, 0.5)',
        marginRight: 15,
    },
    vp_root: {
        color: '#cdcdcd'
    },
    vp_checked: {
        color: '#7358FF!important'
    },
    formControlLabel: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#2B3847',
    },
    vp_tooltip: {
        backgroundColor: '#000',
        fontSize: 11,
    },
    table: {
        tableLayout: 'fixed',

        '&  $vp_root': {
            padding: 3,

            '&:hover': {
                backgroundColor: 'transparent'
            }
        }
    },
    tableTh: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'rgba(113, 119, 132, 0.5)',
        border: 0,

        '&:first-child': {
            width: '350px'
        },

        '&:nth-child(2)': {
            width: 250,
        }
    },
    tableTd: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#2B3847',
        border: 0,
    },
    disabledCheckbox: {
        color: '#cdcdcd!important'
    },
    asyncSelect: {
        '& svg': {
            position: 'absolute',
            right: 7,
            top: 7,
        }
    }

});