import React, { useRef }            from 'react';
import { Fade }                     from '@material-ui/core';
import ContestStep                  from 'components/ContestStep/ContestStep';
import oneStep                      from 'images/oneStep.svg';
import twoStep                      from 'images/twoStep.svg';
import threeStep                    from 'images/threeStep.svg';
import fourStep                     from 'images/fourStep.svg';
import fiveStep                     from 'images/fiveStep.svg';
import oneModal                     from 'images/oneModal.svg';
import twoModal                     from 'images/twoModal.svg';
import threeModal                   from 'images/threeModal.svg';
import fourModal                    from 'images/fourModal.svg';
import fiveModal                    from 'images/fiveModal.svg';
import sixModal                     from 'images/sixModal.svg';
import sevenModal                   from 'images/sevenModal.svg';
import { useStyles }                from './style';

const Contests = () => {
    const classes = useStyles();

    const steps = useRef([
        {
            id: 1,
            title: 'Старт конкурса',
            date: '26.03 - 01.06',
            text: 'Стань участником в конкурсе',
            img: oneStep,
            bgColor: '#3A4699',
            bonus: false,
            checked: true,
            disabled: false,
        },
        {
            id: 2,
            title: 'Знакомство',
            date: '26.03 - 17.06',
            text: 'Прохождение тестов на самоопределние и задание “Представь себя”',
            img: twoStep,
            bgColor: '#44B53A',
            bonus: '0 баллов',
            checked: false,
            disabled: false,
            more: [
                {
                    id: 1,
                    title: 'Твой код',
                    text: 'Познакомься с собой поближе',
                    date: 'с 26 марта по 1 июня 2021 года',
                    img: oneModal
                },
                {
                    id: 2,
                    title: 'Твой вектор',
                    text: 'Как ты думаешь и принимаешь решения?',
                    date: 'с 29 марта по 1 июня 2021 года',
                    img: twoModal
                },
                {
                    id: 3,
                    title: 'Твой выбор',
                    text: 'Определи, какой вызов тебе ближе.',
                    date: 'с 1 апреля по 1 июня 2021 года',
                    img: threeModal
                },
                {
                    id: 4,
                    title: 'Представь себя',
                    text: 'Расскажи о себе в видео и эссе.',
                    date: 'с 4 апреля по 2 июня 2021 года',
                    img: fourModal
                },
                {
                    id: 5,
                    title: 'Твори добро',
                    text: 'Как давно ты делал добро?',
                    date: 'с 15 апреля по 2 июня 2021 года',
                    img: fiveModal
                },
                {
                    id: 6,
                    title: 'Твой кругозор',
                    text: 'Покажи широту своего кругозора',
                    date: 'с 19 мая по 2 июня 2021 года',
                    img: sixModal,
                },
                {
                    id: 7,
                    title: 'Твой IQ',
                    text: 'Продемонстрируй свой интеллект',
                    date: 'с 25 мая по 7 июня 2021 года',
                    img: sevenModal
                },
            ]
        },
        {
            id: 4,
            title: 'Большая игра',
            date: '27.08 - 20.09',
            text: 'Прояви себя в полуфинале',
            img: fourStep,
            bgColor: '#EBEBEB',
            bonus: '115 баллов',
            checked: false,
            disabled: true
        },
        {
            id: 3,
            title: 'Командная гонка',
            date: '18.06 - 25.07',
            text: 'Выбери кейс и реши его вместе с командой и наставником',
            img: threeStep,
            bgColor: '#EBEBEB',
            bonus: '115 баллов',
            checked: false,
            disabled: true
        },
        {
            id: 5,
            title: 'Финальный ход',
            date: '02.11 - 27.11',
            text: 'Сделай последний шаг к победе',
            img: fiveStep,
            bgColor: '#EBEBEB',
            bonus: '115 баллов',
            checked: false,
            disabled: true
        },
    ]);
  
    return (
        <Fade in timeout={800}>
            <div>
                <h3 className={classes.heading}>Мой конкурс</h3>
                <h5 className={classes.subHeading}>Из чего состоит конкурс</h5>

                <div className={classes.wrapSteps}>
                    {
                        steps.current.map((item, ind) => {
                            return (
                                <ContestStep
                                    key={item.id}
                                    item={item}
                                    ind={ind}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Fade>
    )
};

export default Contests;