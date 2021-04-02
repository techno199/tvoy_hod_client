import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";



export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: '#272C5B',
        },
        error: {
            light: '#FFDFDF',
            main: '#F15053'
        }
    },
    brandColors: {
        blackGray: {
            main: '#3F3F3F'
        },
        brandGray: {
            main: '#DBDFE8'
        },
        brandGreen: {
            main: '#39DEC8'
        },
        brandRed: {
            main: '#F15053'
        },
        brandBlue: {
            main: '#9CADE5'
        },
    },
    main: '#272c5B',
    blue: '#0073AC',
    black: '#1B1B1B',
    pink: '#FEBDAC',
    light: '#fff',
    ltblue: '#D9FFFF',
    ltred: '#FF7271',

    typography: {
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
    },
}));