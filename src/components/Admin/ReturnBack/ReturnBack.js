import React                    from 'react';
import Button                   from '@material-ui/core/Button';
import AnimateLoader            from 'svgComponents/AnimateLoader';
import { useStyles }            from './style';

const ReturnBack = ({ loadingButtonDialog, cancelHandler, saveEdit }) => {
    const classes = useStyles();

    return (
        <div className={classes.ReturnBack}>
            <h3 className={classes.heading}>
                Вы покидаете режим редактирования, изменения не сохранятся. <br/><br/>Продолжить?
            </h3>

            <div className={classes.wrapButtons}>
                <Button
                    disabled={loadingButtonDialog}
                    variant="contained"
                    className={`${classes.button} ${classes.deleteButton}`}
                    disableElevation
                    onClick={saveEdit}
                    endIcon={loadingButtonDialog ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                >
                    { loadingButtonDialog ? 'Подождите...' : 'Да, выйти' }
                </Button>

                <Button
                    disabled={loadingButtonDialog}
                    variant="contained"
                    className={`${classes.button} ${classes.cancelButton}`}
                    disableElevation
                    onClick={cancelHandler}
                >
                    Остаться
                </Button>
            </div>
        </div>
    )
};

export default ReturnBack;