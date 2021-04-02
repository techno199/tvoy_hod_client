import React                from 'react';
import { Fade }             from '@material-ui/core';
import dashboardIcon        from 'images/dashboardIcon.svg'
import { useStyles }        from './style';

const Dashboard = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={800}>
            <div className={classes.Dashboard}>
                <h3 className={classes.heading}>
                    В скором времени здесь появится дашборд
                </h3>
                <img src={dashboardIcon} alt="dashboardIcon"/>
            </div>
        </Fade>
    )
};

export default Dashboard;