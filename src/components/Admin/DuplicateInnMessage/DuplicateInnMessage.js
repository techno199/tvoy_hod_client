import React                    from 'react';
import { useHistory }           from 'react-router-dom';
import Button                   from '@material-ui/core/Button';
import { useStyles }            from './style';

const DuplicateInnMessage = ({ setOpenDialog, dialogDuplicate }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.DuplicateInnMessage}>
            <h3 className={classes.heading}>
                Учреждение с таким ИНН <br/> уже существует
            </h3>
            <p className={classes.subTitle}>
                { dialogDuplicate.name }
            </p>

            <div className={classes.wrapButtons}>
                <Button
                    variant="contained"
                    className={`${classes.button} ${classes.deleteButton}`}
                    disableElevation
                    onClick={() => history.push(`/admin/school_card/${dialogDuplicate.id}`)}
                >
                    К учреждению
                </Button>

                <Button
                    variant="contained"
                    className={`${classes.button} ${classes.cancelButton}`}
                    disableElevation
                    onClick={() => setOpenDialog(false)}
                >
                    Остаться
                </Button>
            </div>
        </div>
    )
};

export default DuplicateInnMessage;