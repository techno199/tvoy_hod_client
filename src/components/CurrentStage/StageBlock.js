import React from 'react'
import PropTypes from 'prop-types'
import { useStageBlockStyles } from './style'

export const StageBlock = ({ period, title, description, link, onClick,index }) => {

    const classes = useStageBlockStyles()

    return (
        <div className={classes.stageBlock} >
            <div className={classes.period} >
                {period}
            </div>
            <div className={classes.title} >
                {title}
            </div>
            <div className={classes.description} >
                {description}
            </div>

            {link && (
                <div onClick={onClick} id={index} className={classes.link}>
                    {link.title}
                </div>
            )}
        </div>
    )
}


StageBlock.propTypes = {
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.oneOfType([
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }),
        PropTypes.bool
    ]),

}