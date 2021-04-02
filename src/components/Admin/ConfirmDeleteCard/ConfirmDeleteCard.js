import React                    from 'react';
import Button                   from '@material-ui/core/Button';
import AnimateLoader            from 'svgComponents/AnimateLoader';
import { useStyles }            from './style';

const ConfirmDeleteCard = ({ setOpenDialog, deleteCard, loadingButtonDialog }) => {
    const classes = useStyles();
  
    return (
        <div className={classes.ConfirmDeleteUserCard}>
            <h3 className={classes.heading}>
               Вы уверены что хотите удалить карточку?
            </h3>
            <p className={classes.warningText}>
                После удаления, карточку невозможно будет восстановить
            </p>

            <div className={classes.wrapButtons}>
                <Button
                    disabled={loadingButtonDialog}
                    variant="contained"
                    className={`${classes.button} ${classes.deleteButton}`}
                    disableElevation
                    onClick={deleteCard}
                    endIcon={loadingButtonDialog ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                >
                    { loadingButtonDialog ? 'Подождите...' : 'Да, я уверен' }
                </Button>

                <Button
                    disabled={loadingButtonDialog}
                    variant="contained"
                    className={`${classes.button} ${classes.cancelButton}`}
                    disableElevation
                    onClick={() => setOpenDialog(false)}
                >
                    Нет, не удалять
                </Button>
            </div>
        </div>
    )
};

export default ConfirmDeleteCard;