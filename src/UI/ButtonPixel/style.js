import { buttonPixel, buttonPixelHover, innerPixel, innerPixelHover, innerPixelAfter } from './colorFunctions';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles =  makeStyles({
    wrapButtonPixel: {
        width: props => props.width,
        height: props => props.height + 7,
        paddingBottom: 7,
        paddingLeft: 14,
        paddingRight: 14,
        cursor: props => !props.disabled ? 'pointer' : 'default',
        pointerEvents: props => !props.disabled ? 'auto' : 'none',
        position: 'relative',
    },
    buttonPixel: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: props.height,
        boxSizing: 'border-box',
        background: !props.disabled ? buttonPixel(props).background : '#DFDFDF',
        borderTop: !props.disabled ? buttonPixel(props).borderTop : '7px solid #F6F6F6',
        borderBottom: !props.disabled ? buttonPixel(props).borderBottom : '7px solid #D4D3D3',
        boxShadow: `-1px 7px 0px -2px ${props.shadowColor || '#EAEAEA'}`,
        position: 'relative',
        color: !props.disabled ? props.textColor || '#fff' : '#fff',
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        textDecoration: 'none',
        userSelect: 'none',
        zIndex: 3,
        transition: 'all .3s',

        '&:hover': {
            background: !props.disabled ? buttonPixelHover(props).background : '#DFDFDF',
            borderTop: !props.disabled ? buttonPixelHover(props).borderTop : '7px solid #F6F6F6',
            borderBottom: !props.disabled ? buttonPixelHover(props).borderBottom : '7px solid #D4D3D3',

            '& + $innerPixel': {
                background: !props.disabled ? innerPixelHover(props).background : '#DFDFDF',

                '&:before': {
                    background: !props.disabled ? innerPixelHover(props).background : '#DFDFDF'
                },

                '&:after': {
                    background: !props.disabled ? innerPixelHover(props).background : '#DFDFDF'
                }
            }
        },

        '&:active': {
            boxShadow: !props.disabled && '0px 7px 0px 0px transparent',

            '& + $innerPixel': {
                '&:after': {
                    boxShadow: !props.disabled && '-7px 0px 0px 0px transparent, 7px 0px 0px 0px transparent, 0px 7px 0px 0px transparent',
                }
            }
        }
    }),
    innerPixel: props => ({
        width: '100%',
        height: 'calc(100% - 35px)',
        background: !props.disabled ? innerPixel(props).background : '#DFDFDF',
        position: 'absolute',
        top: 14,
        left: 0,
        transition: 'all .3s',

        '&:before': {
            content: "''",
            position: 'absolute',
            width: 'calc(100% - 14px)',
            height: 7,
            top: -7,
            left: 7,
            background: !props.disabled ? innerPixel(props).background : '#DFDFDF',
            transition: 'all .3s',
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            width: 'calc(100% - 14px)',
            height: 7,
            bottom: -7,
            left: 7,
            background: !props.disabled ? innerPixelAfter(props).background : '#DFDFDF',
            boxShadow: `-7px 0px 0px 0px ${props.shadowColor || '#EAEAEA'}, 7px 0px 0px 0px ${props.shadowColor || '#EAEAEA'}, 0px 7px 0px 0px ${props.shadowColor || '#EAEAEA'}`,
            transition: 'all .3s',
        }
    }),
});

