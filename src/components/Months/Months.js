import WrapContent from 'HOC/WrapContent/WrapContent'
import React from 'react'

import threeTriangles from 'images/threeTriangles.png'
import { useMonthsStyle } from './style'

export const Months = () => {

    const classes = useMonthsStyle()

    return (
        <WrapContent>
            <section className={classes.sectionWrapper} >
                <div className={classes.ethaps} >
                    <div className={classes.title} >
                        4 этапа "Большого путешествия"
                    </div>
                    <ul className={classes.ul} >
                        <li>
                            Определение траектории твоего развития
                        </li>
                        <li>
                            Создание команды
                        </li>
                        <li>
                            Решение социально-экономически-значимых кейсов
                        </li>
                        <li>
                            Реализация лучших проектов в регионах России
                        </li>
                    </ul>
                </div>

                <img src={threeTriangles} alt='' className={classes.triangles} />

                <div className={classes.months} >
                    <div className={classes.title} >
                        8 месяцев
                    </div>

                    <div className={classes.monthsDescribe} >
                        Для приобретения уникальных знаний , навыков создания и управления проектами
                        всех направлений конкурса - <span>14 тематических спринтов</span>
                    </div>
                </div>

            </section>
        </WrapContent>
    )
}
