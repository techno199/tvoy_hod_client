import { makeStyles } from '@material-ui/core/styles';

const getPosition = (position) => {
    switch(position){
        case 'LEFT':
            return({
                left: '13px',
                top: '-45%'
            })
        case 'CENTER':
            return({
                left: '50%',
                top: '-45%',
                transform: 'translate(-50%,0)'
            });
        default :
            return({
                left: '13px',
                top: '-45%'
            })
    }
}


export const useStyles = makeStyles({
    boxWrapper: {
        width: '100%',
        maxWidth: 382,
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
        background: '#fff',
        position: 'relative',
        padding: '30px 58px',
        border: props => `4px solid ${props.color}`,
        borderRadius: '10px',

        '@media(max-width: 450px)': {
            padding: '25px 26px',
            flexDirection: 'column',
            height: 166,
            flexWrap: 'nowrap'
        },
    },
    icon:{
        position: 'absolute',
        left: props => getPosition(props.iconPosition).left,
        top: props => props.topOffset || getPosition(props.iconPosition).top,
        transform: props => getPosition(props.iconPosition).transform || '',

        '@media(max-width: 450px)': {
            top: props => props.mobileTopOffset || props.topOffset || getPosition(props.iconPosition).top,
            '& > img':{
                maxHeight: '75px',
            }
        },
    },
    number:{
        fontWeight: 600,
        fontFamily: 'Inter',
        fontSize: '48px',
        color: props => props.color,

        '@media(max-width: 450px)': {
            fontSize: '40px',
        },
    },
    title:{
        fontweight: 400,
        fontSize: '24px',
        lineHeight: '33px',
        fontFamily: 'Inter',
        textAlign: 'center',
        width: '100%',

        '@media(max-width: 450px)': {
            fontSize: '20px',
        },
    }
});