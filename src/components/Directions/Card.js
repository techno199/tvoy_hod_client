import React from 'react'

export const Card = ({
    classes,
    title,
    body
}) => {
    return (
        <div id='card' className={classes.card} >
            <div className={classes.cardTitle} >
                {title}
            </div>
            <div className={classes.cardContent} >
                {body}
            </div>
        </div>
    )
}
