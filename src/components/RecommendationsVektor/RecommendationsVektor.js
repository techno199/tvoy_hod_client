import React from 'react';
import { useStyles } from './style';

const RecommendationsVektor = ({ recommendations }) => {
    const classes = useStyles();

    return (
        <div className={classes.RecommendationsVektor}>
            <h3 className={classes.heading}>Рекомендации</h3>
            <div
                className={classes.recommendations}
                dangerouslySetInnerHTML={{__html: recommendations().join('')}}
            />
        </div>
    )
};

export default RecommendationsVektor;