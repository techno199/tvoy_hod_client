import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    table: {
        width: '100%',
    },
    th: {
        fontFamily: 'Inter',
        fontSize: 13,
        lineHeight: '16px',
        color: 'rgba(113, 119, 132, 0.5)',
        border: 0,
    },
    td: {
        paddingTop: 16,
        paddingBottom: 16,
        height: 77,
        boxSizing: 'border-box',
        border: 0,

        '& span': {
            width: '100%',
            display: 'inline-block',
            fontFamily: 'Inter',
            fontSize: 13,
            lineHeight: '16px',
            letterSpacing: '-0.0041em',
            color: '#2B3847',

            '&.MuiSkeleton-root': {
                height: 40,
                opacity: 0.4,
            }
        },
    },
    cell_checkbox: {
       paddingLeft: 10,
       paddingRight: 0,
       border: 0,
    },
    row: {
        cursor: 'pointer',
        '&:nth-child(odd) > td':{
            background: '#EFEFFF'
        }
    },
    noData: {
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: 'center'
    },
    trSelected: {
        '& > td': {
            backgroundColor: '#E7EEFC!important'
        }
    },
    noClick: {
        '& > td': {
            background: 'lightgray!important'
        }
    }
}));