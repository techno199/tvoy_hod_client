import { makeStyles } from "@material-ui/core";
import pixelBG from 'images/pixelBG.svg'

export const useMainPageStyles = makeStyles(theme => ({
    background: {
        minHeight: 'calc(100vh - 100px - 118px)',
        height: '100%',
        width: '100%',
        background: '#fff',
        backgroundImage: `url(${pixelBG})`,
        backgroundRepeatX: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundSize: 'contain',
        position: 'relative',
        marginTop: 20
    },
}));