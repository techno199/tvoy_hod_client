import { makeStyles } from "@material-ui/core";



export const useRegisterStyles = makeStyles(theme => ({
    registerWrapper:{
        width: '100%'
    },
    centered:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    repeatCode: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: 16,
        lineHeight: '19px',
        color: '#A4A6BA',
        marginTop: 16,
        marginBottom: 0,
        display: 'inline-block',
        width: '100%',
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
    noAttempt: {
        fontFamily: 'Proxima Nova Rg',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '19px',
        color: '#1B1B1B',
        marginTop: 16,
        display: 'inline-block'
    }
}));