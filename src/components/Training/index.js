import React, { useContext } from 'react';
import BannerForStudent from 'components/BannerForStudent';
import BannerForTeacher from 'components/BannerForTeacher';
import { AuthContext } from 'context/AuthContext/AuthContext';
import { useStyles } from './style';

const Training = () => {
    const classes = useStyles();
    const { state : stateContext } = useContext(AuthContext);

    return (
        <div>
            <h3 className={classes.heading}>Мое обучение</h3>
            {
                stateContext.role.find(i => i.role_id === 2)
                    ? <BannerForTeacher />
                    : <BannerForStudent />
            }
        </div>
    )
};

export default Training;