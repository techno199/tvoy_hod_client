import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './style';

const Breadcrumbs = ({ crumbs }) => {
    const classes = useStyles();

    return (
        <div className={classes.Breadcrumbs}>
            {
                crumbs.map(item => {
                    if(item.link) {
                        return (
                            <React.Fragment key={item.id}>
                                <Link to={item.link} className={classes.link}>{item.title}</Link>
                                <span className={classes.slash}>/</span>
                            </React.Fragment>
                        )
                    } else {
                        return (
                            <span key={item.id} className={classes.noLink}>
                                {item.title}
                            </span>
                        )
                    }
                })
            }
        </div>
    )
};

export default Breadcrumbs;