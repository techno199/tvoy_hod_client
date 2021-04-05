import { Replic } from 'components/Replic/Replic'
import WrapContent from 'HOC/WrapContent/WrapContent'
import React from 'react'
import { useChatStyles } from './style'

const REPLICS = [
    {
        title: 'Мы ищем',
        body: 'Возможности, новых друзей, связи и отношения, которые помогут нам пройти путь вместе.',
        align: 'left',
    },
    {
        title: 'Мы сомневаемся',
        body: 'Поэтому мы проверяем. Мы исследуем. Мы готовы посмотреть на стандартные вопросы непредвзято и отказаться от стереотипов, которых и так хватает.',
        align: 'right',
    },
    {
        title: 'Мы жаждем лучшего',
        body: 'Для себя и тех, кто нас окружает. Поэтому мы ценим и развиваем свое сообщество.',
        align: 'left',
    },
]

export const Chat = () => {

    const classes = useChatStyles()

    return (
        <section className={classes.sectionWrapper}>

            <WrapContent>
                <div className={classes.replics} >
                    {REPLICS.map(item => (
                        <Replic key={item.title} title={item.title} body={item.body} align={item.align} />
                    ))}
                </div>
            </WrapContent>


            <div className={classes.firstLine} />
            <div className={classes.secondLine} />
            <div className={classes.thirdLine} />



        </section>
    )
}
