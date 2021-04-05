import React from 'react'

import buttonsGroup from 'images/buttonsGroup.png'
import { useGeometryInfoStyles } from './styles'

export const InfoGeometry = () => {

    const classes = useGeometryInfoStyles()

    return (
        <section className={classes.sectionWrapper} >
            <div className={classes.textBlok} >
                <div>
                    Участники <span>&nbsp;конкурса&nbsp;</span>- студенты I - III курса бакалавриата{' '}
                    и I - IV курса специалитета
                </div>
                <div>
                    В мероприятиях <span>&nbsp;экосистемы "Твой ход"&nbsp;</span> могут {' '}
                    участвовать абсолютно все студенты!
                </div>
            </div>

            <img src={buttonsGroup} alt='' className={classes.geometry} />
        </section>
    )
}
