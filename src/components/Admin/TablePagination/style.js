import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    wrapPagination: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        paddingRight: 32
    },
    selectPage: {
        display: 'flex',
        alignItems: 'center',
    },
    titleSelect: {
        fontWeight: 'normal',
        fontSize: 15,
        marginRight: 10
    },
    vp_pagRoot: {

    },
    vp_ul: {
        paddingLeft: 40,

        '& .Mui-selected': {
            background: '#250C4F',
            color: '#fff'
        }
    },
    vp_rootSelect: {
        paddingTop: 7,
        paddingBottom: 8
    },
    myFormControl: {
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.primary}!important`,
            borderWidth: 1
        }
    },
    infoGray: {
        fontFamily: 'Inter',
        fontSize: 14,
        color: 'rgba(113, 119, 132, 0.5)',
    }
}));