import React from 'react'

import darkXButton from 'images/darkXButton.png'
import darkCircleButton from 'images/darkCircleButton.png'
import darkTriangleButton from 'images/darkTriangleButton.png'
import { ueInfoWithGamepadStyles, useGeometryInfoStyles } from './styles'
import { Step } from './Step'
import WrapContent from 'HOC/WrapContent/WrapContent'

const STEPS = [
    {
        text: 'Регистрация',
        arrow: true,
    },
    {
        text: '1/4 финала',
        arrow: true,
    },
    {
        text: '1/2 финала',
        arrow: true,
    },
    {
        text: 'Финал',
        arrow: false,
    },
]

export const InfoWithGamepad = () => {

    const classes = ueInfoWithGamepadStyles()

    return (
        <WrapContent>
            <section className={classes.sectionWrapper} >
                <h1>
                    Как проходит мероприятие?
                </h1>

                <div className={classes.instructionWithX} >
                    <div className={classes.textBlok} >
                        <div>
                            Каждый участник конкурса сможет получить <span>траекторию личностного роста</span><br />
                    и приобрести <span>профессиональные навыки</span> по направлениям конкурса.
                </div>
                        <div>
                            В финале конкурса участники получат возможность пройти <br />
                            <span>уникальные стажировки, трудоустроиться в ТОП-компанию.</span>
                        </div>
                    </div>

                    <img src={darkXButton} alt='' className={classes.geometry} />
                </div>

                <div className={classes.stepWrapper} >
                    <div className={classes.steps} >
                        {STEPS.map((step) => <Step key={step.title} text={step.text} arrow={step.arrow} />)}
                    </div>
                </div>

                <div className={classes.winnersWrapper} >
                    <div className={classes.circleOuter} >
                        <div className={classes.circleInner} >
                            <div className={classes.number} >
                                200
                            </div>
                            <div className={classes.winnersText} >
                                победителей
                            </div>
                        </div>
                    </div>
                </div>

                <img src={darkCircleButton} alt='' className={classes.darkCircle} />
                <img src={darkTriangleButton} alt='' className={classes.darkTriangle} />

            </section>
        </WrapContent>
    )
}
