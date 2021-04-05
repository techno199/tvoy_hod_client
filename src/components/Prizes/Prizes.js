import WrapContent from 'HOC/WrapContent/WrapContent'
import React from 'react'
import { Collapsed } from './Collapsed'
import { usePrizesStyles } from './styles'

import vuzImage from 'images/vuzImage.png'
import darkTriangleButton from 'images/darkTriangleButton.png'
import darkCircleButton from 'images/darkCircleButton.png'
import darkXButton from 'images/darkXButton.png'


const PRIZES = [
    {
        stage: 'I',
        status: 'Дебютант',
        body: [
            <div id='li'>Сертификат участника</div>,
            <div id='li'>Результаты тестирования с определением индивидуальной траектории развития</div>,
            <div id='li'>Бесплатные подписки на популярные сервисы</div>,
        ]
    },
    {
        stage: 'II',
        status: 'Лидер',
        intenders: '100 000 участников',
        body: [
            <div id='li'>Сертификаты на товары партнёров</div>,
            <div id='li'>Получение уникального доступа ко встречам с ТОП-экспертами</div>,
        ]
    },
    {
        stage: 'III',
        status: 'Талант',
        intenders: '10 000 участников',
        body: [
            <div id='li'>2-дневное путешествие по стране от Ростуризма и других организаций</div>,
            <div id='li'>Приз от генерального партнёра конкурса</div>,
        ]
    },
    {
        stage: 'IV',
        status: 'Герой',
        intenders: '1 000 участников',
        body: [
            <div id='li'>Сертификаты на онлайн-курсы от партнёров</div>,
            <div id='li'>Ценные призы: планшеты, ноутбуки, моноблок и др.</div>,
        ]
    },
    {
        stage: 'V',
        status: 'Победитель',
        intenders: '200 победителей',
        body: [
            <div id='li'>
                Обеспечение участия победителей в "Большом"
                <span>&nbsp;путешествии в регионы России</span>
            </div>,
            <div >
                <div id='li'>
                    Получение гранта в размере <span>1 000 000 рублей</span> на:
                </div>
                <span>обучение в магистратуре</span>
                <span>запуск или развитие своего стартапа</span>
                <span>улучшение жиищных условий</span>
            </div>,
            <div id='li'>
                Возможность <span>потратить до 10%</span> от общей суммы{' '}
                на осуществление личной мечты
            </div>
        ]
    },
]

export const Prizes = () => {

    const classes = usePrizesStyles()

    return (
        <section className={classes.sectionWrapper}>
            <WrapContent>
                <>
                    <h1>
                        Что получают <span>победители?</span>
                    </h1>

                    <p>
                        С самого первого этапа конкурса, каждый участник получает призы и привилегии:
                    </p>

                    <h4>
                        Вознаграждение
                    </h4>

                    <div className={classes.prizesWrapper} >
                        {PRIZES.map((item) => (
                            <Collapsed
                                stage={item.stage}
                                status={item.status}
                                body={item.body}
                                intenders={item.intenders}
                                classes={classes}
                            />
                        ))}
                    </div>


                    <div className={classes.vuzTriangleButton} >

                        <div>
                            <img src={vuzImage} alt='' />
                            <div>
                                Вузы, набравшие от 50 до 100 баллов в рамках конкурса «Твой ход», в ноябре 2021 года получат сертификат, после чего будут иметь возможность доступа к участиют во Всероссийском конкурсе молодёжных проектов  – 2022.
                            </div>
                        </div>
                        <img src={darkTriangleButton} alt='' className={classes.triangleButton} />

                    </div>
                </>
            </WrapContent>

            <img src={darkCircleButton} alt='' className={classes.oButton} />
            <img src={darkXButton} alt='' className={classes.xButton} />
        </section>
    )
}
