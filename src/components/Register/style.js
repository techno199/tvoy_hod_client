import { makeStyles } from "@material-ui/core";

export const useRegisterStyles = makeStyles(theme => ({
    registerWrapper:{
        width: '100%',
        paddingBottom: '11%'
    },
    noSearchScool: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 16,
        lineHeight: '19px',
        color: '#488BFF',
        textDecoration: 'none',
        marginTop: 16,
        display: 'inline-block',

        '&:hover': {
            textDecoration: 'underline'
        }
    },
    repeatCode: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 16,
        lineHeight: '19px',
        color: '#A4A6BA',
        marginTop: 16,
        marginBottom: 0
    },
    repeatCodeBlue: {
        color: '#488BFF',
        cursor: 'pointer',
        marginTop: 16,
        display: 'inline-block'
    },
    buttonOutline: {
        color: '#FF7271',
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Proxima Nova Rg',
    },
    schools: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: '22px',
        color: '#000',
        marginTop: 48,
        marginBottom: 24
    },
    vp_tooltip: {
        backgroundColor: '#000',
        fontSize: 11,
    },
    buttonCodeEnter: {
        marginTop: 16,
    }
}));