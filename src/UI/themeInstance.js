import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";



export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: '#272C5B',
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