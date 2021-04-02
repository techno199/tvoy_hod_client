import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'


const UIKitButton = withStyles({
    root: {
        boxShadow: 'none',
        height: 50,
        width:50,
        textTransform: 'none',
        borderRadius: '0',
        border: 'none',
        backgroundColor: '#FF7271',
        fontFamily: [
            'Proxima Nova Rg',
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
            backgroundColor: '#FF5857',
            border: '1px solid #FF5857',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#FF3F3D',
            border: '1px solid #FF3F3D',
        },
        '&:focus': {
            backgroundColor: '#FF3F3D',
            border: '1px solid #FF3F3D',
        },
    },
    disabled: {
        backgroundColor: '#A4A6BA',
        border: '1px solid #A4A6BA',
        /* color: 'white !important' */
    },
    outlined: {
        backgroundColor: 'transparent !important',
        border: '1px solid #FF7271',
    }
})(MuiButton);

const UploadButton = ({
    children,
    ...other
}) => {
    return (
        <UIKitButton
            {...other}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 19H21V21H3V19ZM13 13.172L19.071 7.1L20.485 8.514L12 17L3.515 8.515L4.929 7.1L11 13.17V2H13V13.172Z" fill="white" />
            </svg>
        </UIKitButton>
    )
}

export default UploadButton
