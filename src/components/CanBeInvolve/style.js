import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
    heading: {
        marginTop: 0,
        marginBottom: 48,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 172,
        position: 'relative',

        '@media(max-width: 990px)': {
            paddingLeft: 0,
            textAlign: 'left',
            marginBottom: 24,
            fontSize: 30,
            display: 'flex',
            flexWrap: 'wrap',

            '& br': {
                display: 'none'
            }
        },

        '@media(max-width: 550px)': {
            textAlign: 'left',
            fontSize: 24,
        },

        '& span': {
            color: '#FF7271'
        },
    },
    involedWrapper:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    lightRed:{
        color: '#ff7271'
    }
});