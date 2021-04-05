import WrapContent from 'HOC/WrapContent/WrapContent'
import React from 'react'

import russiaStreetsLogo from 'images/russiaStreetsLogo.png'
import asskRussiaLogo from 'images/asskRussiaLogo.png'
import russGeoLogo from 'images/russGeoLogo.png'
import sberLogo from 'images/sberLogo.png'
import rosTourismLogo from 'images/rosTourismLogo.png'
import ranLogo from 'images/ranLogo.png'
import webRfLogo from 'images/webRfLogo.png'
import tavridaLogo from 'images/tavridaLogo.png'
import rosatomLogo from 'images/rosatomLogo.png'
import nornikelLogo from 'images/nornikelLogo.png'
import gazpromLogo from 'images/gazpromLogo.png'
import mailruLogo from 'images/mailruLogo.png'
import rospatriot from 'images/rospatriot.png'
import siburLogo from 'images/siburLogo.png'
import supportTussiaLogo from 'images/supportTussiaLogo.png'
import weTogetherLogo from 'images/weTogetherLogo.png'

import { Card } from './Card'
import { useDirectionsStyles } from './style'

const CARDS = [
    {
        title: 'На спорте',
        body: <div className='column' >
            <img src={russiaStreetsLogo} alt='Улицы россии' />
            <img src={asskRussiaLogo} alt='асск России' />
        </div>
    },
    {
        title: 'Открываю страну',
        body: <div className='row' >
            <img src={russGeoLogo} alt='Географическое сообщество' />
            <img src={rosTourismLogo} alt='Ростуризм' />
        </div>
    },
    {
        title: 'Двигаю прогресс',
        body: <div className='row' >
            <img src={ranLogo} alt='РАН' />
            <img src={sberLogo} alt='Сбербанк' />
        </div>
    },
    {
        title: 'Меняю города',
        body: <div className='row' >
            <img src={webRfLogo} alt='ВЭБ РФ' />
        </div>
    },
    {
        title: 'Вдохновляю',
        body: <div className='row' >
            <img src={tavridaLogo} alt='Таврида арт-кластер' />
        </div>
    },
    {
        title: 'Развиваю среду',
        body: <div className='row' >
            <img src={rosatomLogo} alt='РосАтом' />
        </div>
    },
    {
        title: 'берегу природу',
        body: <div className='row' >
            <img src={nornikelLogo} alt='НорНикель' />
        </div>
    },
    {
        title: 'делаю добро',
        body: <div className='row' >
            <img src={weTogetherLogo} alt='#мывместе' />
        </div>
    },
    {
        title: 'Говорю о главном',
        body: <div className='column' >
            <img src={gazpromLogo} alt='Газпром медиа' />
            <img src={mailruLogo} alt='Маил ру' />
        </div>
    },
    {
        title: 'Помню о важном',
        body: <div className='row' >
            <img src={rospatriot} alt='Роспатриот' />
        </div>
    },
    {
        title: 'Создаю новое',
        body: <div className='column' >
            <img src={siburLogo} alt='Сибур' />
            <img src={supportTussiaLogo} alt='Опора России' />
        </div>
    },

]

export const Directions = () => {

    const classes = useDirectionsStyles()

    return (
        <WrapContent>
            <section className={classes.sectionWrapper} >
                <h1>
                    Направления "Твоего хода"
                </h1>

                <p>
                    По каждому из направлений участник имеет возможность предложить свой кейс (идею) для решения социально экономической задачи
                </p>

                <div className={classes.darkPlank} >
                    <p>Организаторы конкурса заранее формируют по направлениям задания с описанием проблемы, для решения которой участник в составе своей команды должен предложить решение</p>
                </div>

                <div className={classes.cardsWrapper} >
                    {CARDS.map((item) => (
                        <Card key={item.title} title={item.title} body={item.body} classes={classes} />
                    ))}
                </div>
            </section>
        </WrapContent>
    )
}
