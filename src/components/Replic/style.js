import { makeStyles } from "@material-ui/core";



export const useReplicStyles = makeStyles(theme => ({
    replicWrapper: props => ({
        margin: '0 auto',
        marginBottom: 29,
        [`margin${props.align}`]: 0,
        display: 'flex',
        flexDirection: 'column',
    }),
    title: props => ({
        margin: '0 auto',
        [`margin${props.align}`]: 0,
        fontWeight: 700,
        fontFamily: 'Montserrat',
        fontSize: 36,
        color: theme.brandColors.blackGray.main,
        background: theme.brandColors.brandGreen.main,
        borderRadius: 55,
        [`borderBottom${props.align}Radius`]: 0,
        padding: '15px 25px',
        textAlign: 'center',
    }),
    body: props => ({
        marginTop: 26,
        [`margin${props.align}`]: 40,
        background: '#E9F3F3',
        borderRadius: 22,
        padding: '29px',
        fontFamily: 'Montserrat',
        fontSize: 24,
        color: theme.brandColors.blackGray.main,
        textAlign: props.align.toLowerCase(),
        maxWidth: 711,
    })
}))