import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    sliderWrap: {
        paddingRight: 40,
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 0,
        marginBottom: 16,
        boxSizing: 'border-box'
    },
    miniHeading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: '140%',
        color: '#3B3F43',
        marginTop: 24,
        marginBottom: 15,
        boxSizing: 'border-box'
    },
    list: {
        marginBottom: 38,
        paddingLeft: 0,
        listStylePosition: 'inside',
        listStyleType: 'none',
        boxSizing: 'border-box',

        '& li': {
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: '140%',
            color: '#3B3F43',
            marginTop: 0,
            marginBottom: 8,
            position: 'relative',
            paddingLeft: 16,
            boxSizing: 'border-box',

            '&:before': {
                content: "''",
                display: 'inline-block',
                width: 5,
                minWidth: 5,
                height: 5,
                background: '#2484FF',
                position: 'absolute',
                left: 0,
                top: 8,
            }
        }
    }

});