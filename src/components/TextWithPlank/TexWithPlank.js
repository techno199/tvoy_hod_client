import React from 'react'

import socialNet from 'images/socialNet.png'
import WrapContent from 'HOC/WrapContent/WrapContent'

import { useStyles } from './style'


export const TexWithPlank = () => {

    const classes = useStyles()

    return (
        <WrapContent>
            <section className={classes.sectionWrapper} >

                <h1>
                    "Твой ход" - это твоё<br />
                    пространство возможностей
                </h1>

                <h6>
                    Во время конкурса тебе предстоит определить свой потенциал,
                    чтобы <br />
                    разобраться, где и как ты можешь применить себя
                    {' '}самым наилучшим образом.
                </h6>


                <div className={classes.plank} >
                    <div>
                        <img src={socialNet} alt='' className={classes.image} />
                    </div>
                    <div className={classes.text} >
                        Ты сможешь разобраться со своей траекторией развития, познакомиться
                        с сотнями единомышленников, отправиться в увлекательные экспедиции
                        в города России и приложить руку к решению самых интересных задач
                        от партнеров конкурса: крупных компаний и руководства регионов России.
                    </div>
                </div>

            </section>
        </WrapContent>
    )
}
