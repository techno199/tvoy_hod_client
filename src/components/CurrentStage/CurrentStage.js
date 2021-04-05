import { Popover } from '@material-ui/core'
import WrapContent from 'HOC/WrapContent/WrapContent'
import React from 'react'
import { StageBlock } from './StageBlock'
import CloseIcon from '@material-ui/icons/Close';
import { useCurrentStageStyles, useStageBlockStyles } from './style'
import secondStage from 'images/secondStage.png'
import thirdStage from 'images/thirdStage.png'

const STAGES = [
    {
        period: '8 апреля - 12 июня',
        title: 'Регистрация',
        description: 'На онлайн платформе конкурса',
        
    },
    {
        period: '8 апреля - 12 июня',
        title: 'Стадия 1',
        description: '«Определение траектории развития»',
        link: {
            to: ' ',
            title: 'подробнее'
        },
        body:[
            <div>Тесты на определение личностных способностей</div>,
            <div>Тесты на гражданственный интеллект</div>,
            <div>Выбор направления развития и проекта</div>,
        ]
    },
    {
        period: '1 мая - 15 июня',
        title: 'Стадия 2',
        description: '«Образовательный модуль»',
        link: {
            to: ' ',
            title: 'подробнее'
        },
        body:[
            <div>Умение решать сложные задачи</div>,
            <div>Критическое мышление</div>,
            <div>Креативность</div>,
            <div>Управление людьми</div>,
            <div>Координация</div>,
            <div>Эмоциональный интеллект</div>,
            <div>Принятие решений</div>,
            <div>Социальное проектирование</div>,
            <div>Умение вести переговоры</div>,
        ]
    },
]

export const CurrentStage = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState()

    const classes = useStageBlockStyles()
    const wrapClasses = useCurrentStageStyles()

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(event.target.id)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <WrapContent>
            <section className={wrapClasses.currentStage} >
                <h1>
                    Текущий этап
                </h1>

                <div className={wrapClasses.firstStage} >
                    <div className={wrapClasses.title} >
                        I ЭТАП
                    </div>

                    <div className={wrapClasses.stages} >
                        {STAGES.map((item,ind) => (
                            <StageBlock
                                index={ind}
                                onClick={handleClick}
                                title={item.title}
                                description={item.description}
                                period={item.period}
                                link={!!item?.link && {to:" ", title: item.link.title}}
                                key={item.title}
                            />
                        ))}
                    </div>


                </div>


                <div className={wrapClasses.soonWrapper} >

                    <img src={secondStage} alt='' className={wrapClasses.soonImageFirst} />
                    <img src={thirdStage} alt='' className={wrapClasses.soonImageSecond} />

                    <div className={wrapClasses.soonText} >
                        Подробности скоро...
                    </div>

                </div>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    elevation={5}
                    marginThreshold={4}
                    PaperProps={{
                        square: true
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <div>
                        <div className={wrapClasses.popup}>

                            <kbd onClick={handleClose} ><CloseIcon style={{ color: 'black' }} /></kbd>

                            <div className={classes.period} >
                                {STAGES?.[selectedIndex]?.period}
                            </div>
                            <div className={classes.title} >
                                {STAGES?.[selectedIndex]?.title}
                            </div>
                            <div className={classes.description} >
                                {STAGES?.[selectedIndex]?.description}
                            </div>
                            <div className={wrapClasses.bodyWrapper} >
                                <div className={wrapClasses.body} >
                                    {STAGES?.[selectedIndex]?.body.slice(0, 5).map((item) => item)}
                                </div>
                                {!!STAGES?.[selectedIndex]?.body.slice(5, 10)?.length && (
                                    <div className={wrapClasses.body} >
                                        {STAGES?.[selectedIndex]?.body.slice(5, 10).map((item) => item)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Popover>
            </section>
        </WrapContent>
    )
}
