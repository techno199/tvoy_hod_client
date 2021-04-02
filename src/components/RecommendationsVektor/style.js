import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    RecommendationsVektor: {
        marginTop: 40,
    },
    heading: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '39px',
        color: '#1B1B1B',
        marginTop: 0,
        marginBottom: 24,

        '@media(max-width: 580px)': {
            fontSize: 20,
            lineHeight: '24px',
        }
    },
    recommendations: {
        '& br': {
            display: 'none'
        },

        '& strong': {
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: '22px',
            color: '#1B1B1B',
            marginTop: 0,
            marginBottom: 16,
            display: 'block'
        },

        '& p': {
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: '130%',
            color: '#717784',
            marginTop: 0,
            marginBottom: 0,

            '& br': {
                display: 'block',
                content: "''",
                marginBottom: 16
            }
        }
    }
});