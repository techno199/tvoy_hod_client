import React from 'react'
import { useStyles } from './style';

export const Tab = ({
    title,
    onClick,
    isActive,
    Icon,
}) => {

    const classes = useStyles({isActive});

    return (
        <div
            className={`${classes.tabItem} ${isActive ? classes.activeTabitem : 'none'}`}
            onClick={onClick}
        >
            <div className={classes.tabContent} >
                <div className={classes.icon} >
                    <Icon fill={isActive ? 1 : 0.5} />
                </div>

                <div className={classes.tabTitle}>
                    {title}
                </div>
            </div>
        </div>
    )
};
