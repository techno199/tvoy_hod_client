import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        marginTop: 80,
        marginBottom: 48,
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: '140%',
        color: '#3B3F43',
        paddingLeft: 172,
        position: 'relative',

        '@media(max-width: 990px)': {
            marginTop: 8,
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
            color: '#ff7271'
        },
    },
    choseBlock:{
        maxWidth: '161px',
        width: '161px',
        border: '4px solid #F7D548',
        borderRadius: '2px',
        boxSizing: 'border-box',
        textAlign: 'center',
        paddingRight: '5px',
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
        height: '84px',
        cursor: 'pointer',
        transition: '.3s',
        position:'relative',

        '@media(max-width: 960px)': {
            margin: '0 auto 16px auto',
            maxWidth: '300px'
        },

        '@media(max-width: 450px)': {
            margin: '0 auto 16px auto',
            maxWidth: '250px'
        },
    },
    choseBlockActive:{
        background: '#F7D548',
        fontWeight: 800,
        color: 'white'
    },
    switchBlockList:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
    },
    switchInfoList:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    banned:{
        width: '100%',
        background: '#864AC6',
        borderRadius: '5px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '32px 64px',
        marginTop: 75,

        '@media(max-width: 630px)': {
            flexDirection: 'column',
        },

        '@media(max-width: 490px)': {
            padding: '8px 29px 26px 29px'
        },

    },
    carouselContainer:{
        width: '90%',
        margin: '0 auto',


        '@media(max-width: 490px)': {
            width: 222,
            margin: '0 auto'
        },
    },
    bannerText:{
        color: '#fff',
        fontSize: '32px',
        fontWeight: 800,
        '& span':{
            color: '#f7d548'
        },
        '@media(max-width: 630px)': {
            textAlign: 'center',
            paddingBottom: 24
        },

        '@media(max-width: 490px)': {
            fontSize: 20
        },
    },
    buttonText:{
        fontWeight: 700,
        color: '#fff',
        fontSize: '14px'
    },
    button:{
        '@media(max-width: 630px)': {
           position: 'absolute',
            bottom: -35
        },
    }
});