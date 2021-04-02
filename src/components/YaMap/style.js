import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    YaMap: {
        marginBottom: 104,
        position: 'relative',
        zIndex: 99,

        '& .contentHint': {
            width: 258,
            padding: '23px 10px',
            position: 'relative',
            zIndex: 999,

            '@media(max-width: 400px)': {
                width: 230,
                padding: 0,
            }
        },

        '& .hintHeader': {
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: '19px',
            color: '#1B1B1B',
            marginBottom: 16,
            marginTop: 0,
            whiteSpace: 'normal'
        },

        '& .wrapHintSection': {
            marginBottom: 16,
        },

        '& .number': {
            fontFamily: 'Inter',
            fontWeight: '800',
            fontSize: 24,
            lineHeight: '29px',
            color: '#3253FA'
        },

        '& .text': {
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: '15px',
            color: '#1B1B1B',
            marginTop: 0,
            marginBottom: 0,
        }
    },
    vp_mapContainer: {
        height: 661,
        width: '100%',

        '@media(max-width: 850px)': {
            height: 400,
        },

        '@media(max-width: 600px)': {
            height: 350,
        },
    },
});