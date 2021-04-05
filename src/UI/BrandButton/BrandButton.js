import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { LightenDarkenColor } from 'utils/lightenDarkenColor';

const useButtonStyles = makeStyles(theme => ({
    root: {
        boxShadow: props => {
            const darkenColor = LightenDarkenColor(theme.brandColors[props.variant || 'brandRed'].main, -20)
            return `6px 6px 0px ${darkenColor}, 4px 4px 0px ${darkenColor}, 2px 2px 0px ${darkenColor}` 
        },
        textTransform: 'none',
        position: 'relative',
        color: '#fff',
        fontSize: 14,
        fontWeight: 600,
        padding: '19px 22px',
        zIndex: '2',
        border: 'none',
        borderRadius: '22px',
        backgroundColor: props => theme.brandColors[props.variant || 'brandRed'].main,
        fontFamily: [
            'Montserrat',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: props => LightenDarkenColor(theme.brandColors[props.variant || 'brandRed'].main, 10),
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: props => LightenDarkenColor(theme.brandColors[props.variant || 'brandRed'].main, 10),
        },
        '&:focus': {
            boxShadow: props => {
                const darkenColor = LightenDarkenColor(theme.brandColors[props.variant || 'brandRed'].main, -200)
                return `5px 5px 0px ${darkenColor}, 3px 3px 0px ${darkenColor}, 1px 1px 0px ${darkenColor}`
            },
        },
        '& span': {
            zIndex: 2,
            position: 'relative',
        },
        '&:before': {
            content: "''",
            width: '94%',
            height: '94%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            filter: 'blur(12px)',
            background: props => theme.brandColors[props.variant || 'brandRed'].main
        }
    },
}));

const BrandButton = ({ children, variant, ...other }) => {

    const classes = useButtonStyles({variant})

    return (
        <Button
            classes={{
                root: classes.root
            }}
            {...other}
        >
            <span>{children}</span>
        </Button>
    )
}

export default BrandButton
