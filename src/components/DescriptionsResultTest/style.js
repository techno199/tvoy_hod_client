import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    DescriptionsResultTest: {
        marginTop: 32,
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
    oneResult: {
        marginBottom: 24,
    },
    oneResultVal: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,
    },
    valueData: {
        width: 6,
        height: 39,
        background: '#EFEFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 16,
    },
    valueTitle: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#1B1B1B',
        position: 'relative',
        textTransform: 'lowercase',
        display: 'inline-block',
        zIndex: 3,

        '& strong': {
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 18,
            color: '#1B1B1B',
            position: 'relative',
            textTransform: 'lowercase',
            display: 'inline-block',
            zIndex: 3,

            '@media(max-width: 580px)': {
                fontSize: 16,
            },

            '&:first-letter': {
                textTransform: 'uppercase'
            }
        }
    },
    colorLine: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%'
    },
    descriptionText: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '130%',
        color: '#717784',
        marginTop: 0,
        marginBottom: 0,

        '& br': {
            display: 'none'
        },

        '& strong': {
            display: 'none'
        },

        '& p': {
            '& br': {
                display: 'block',
                content: "''",
                marginBottom: 16,
            }
        }
    },
});