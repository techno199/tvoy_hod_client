import React                    from 'react';
import Dialog                   from '@material-ui/core/Dialog';
import closeIcon                from 'images/closeIcon.svg';
import { useStyles }            from './style';

const DialogCustom = ({ openDialog, setOpenDialog, children, widthDialog, setIdCard, disableBackdropClick, scroll = 'paper', noFullScreen }) => {

    const classes = useStyles({widthDialog, scroll, noFullScreen});

    const handleClose = () => {
        if(setIdCard) setIdCard(null);
        setOpenDialog(false);
    };

    return (
        <Dialog
            disableBackdropClick={disableBackdropClick}
            open={openDialog}
            onClose={handleClose}
            classes={{
                root: classes.vp_dialogRoot,
                paper: classes.vp_paper
            }}
            scroll={scroll}
        >
            {
                !disableBackdropClick ?
                    <img
                        src={closeIcon}
                        alt="closeIcon"
                        onClick={handleClose}
                        className={classes.closeIcon}
                    />: null
            }
            { children }
        </Dialog>
    );
};

export default DialogCustom;