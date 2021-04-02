import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    CornerPixel: {
        width: props => props.size || 12,
        height: props => props.size || 12,
        display: 'flex',
        flexWrap: 'wrap',
        background: '#fff',
        position: 'absolute',
        zIndex: 101,

        '& > div': {
            width: 4,
            minWidth: 4,
            height: 4,
            minHeight: 4
        },

        '&.leftTop': {
            '&  div:nth-child(9)': {
                background: props => props.mainColor && `${props.mainColor}!important`
            }
        },

        '&.rightTop': {
            '&  div:nth-child(7)': {
                background: props => props.mainColor && `${props.mainColor}!important`
            }
        },

        '&.rightBottom': {
            '& > div:nth-child(1)': {
                background: props =>  props.mainColor && `${props.mainColor}!important`
            }
        },

        '&.leftBottom': {
            '& > div:nth-child(3)': {
                background: props => props.mainColor && `${props.mainColor}!important`
            }
        }
    },
});