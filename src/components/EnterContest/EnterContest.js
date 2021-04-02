import React, {useState} from 'react'
import {useStyles} from "./style";

import pixelTrain from 'images/pixelTrain.png'
import artek from 'images/organizer14.png'
import treasure from 'images/treasure.png'
import pixelShip from 'images/pixelShip.png'
import pixelFive from 'images/pixelFive.png'
import pixelElderScroll from 'images/pixelElderScroll.png'
import {InfoBox} from "UI/InfoBox/InfoBox";
import CornerPixel from "UI/CornerPixel/CornerPixel";
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import CornerPixelSlice from "UI/CornerPixelSlice/CornerPixelSlice";
import {Hidden} from "@material-ui/core";
import Slider from 'react-slick'
import { useHistory } from 'react-router-dom'
import {switchesSettings} from "utils/settingsForSliders";
import { yaTarget } from 'utils/yaTarget';

export const switches = [
    {
        title: 'Ученики 5-7 классов',
        components: [
            {
                icon: pixelTrain,
                title: '300',
                description: 'путешествий "Москва - Владивосток"'
            },
            {
                icon: artek,
                title: '600',
                description: 'Путёвок в МДЦ "Артек"',
                subDescriptions: 'Призовые путевки на смену в МДЦ Артек, для прохождения финального испытания.'
            }
        ]
    },
    {
        title: 'Ученики 8-9 классов',
        components: [
            {
                icon: treasure,
                title: '300',
                description: 'призов в размере 200 000 рублей'
            },
            {
                icon: pixelShip,
                title: '750',
                description: 'Путёвок в МДЦ "Артек"',
                subDescriptions: 'Призовые путевки на смену в МДЦ Артек, для прохождения финального испытания.'
            }
        ]
    },
    {
        title: 'Ученики 10 классов',
        components: [
            {
                icon: treasure,
                title: '300',
                description: 'призов в размере 1 000 000 рублей'
            },
            {
                icon: artek,
                title: '750',
                description: 'Путёвок в МДЦ "Артек"',
                subDescriptions: 'Призовые путевки на смену в МДЦ Артек, для прохождения финального испытания.'
            },
            {
                icon: pixelFive,
                title: '+5',
                description: 'все финалисты + 5 баллов в портфолио при поступлении в ВУЗ-партнер.',
            }
        ]
    },
    {
        title: 'Студенты ссузов 1-2 курсов',
        components: [
            {
                icon: treasure,
                title: '150',
                description: 'призов в размере 200 000 рублей'
            }
        ]
    },
    {
        title: 'Студенты ссузов 3 курсов',
        components: [
            {
                icon: treasure,
                title: '150',
                description: 'призов в размере 1 000 000 рублей'
            }
        ]
    },
    {
        title: 'Педагоги-наставники',
        components: [
            {
                icon: pixelElderScroll,
                description: 'участие в образовательной программе (удостоверения установленного образца о повышении квалификации)'
            },
            {
                icon: treasure,
                description: "денежными премиями в размере 100 000 или 150 000 рублей",
                subDescriptions: 'В зависимости от класса/курса участника-победителя.'
            }
        ]
    },
    {
        title: 'Топ-50 учебных заведений',
        components: [
            {
                icon: treasure,
                description: 'По 2 000 000 рублей на развитие инфраструктуры и материального обеспечения учебного процесса'
            }
        ]
    }
]

export const EnterCotnest = () => {

    const classes = useStyles();
    const history = useHistory()

    const [selected, setSelected] = useState(0);

    return(
        <section>
            <h3 className={classes.heading}>
                Участвуй в конкурсе "Большая <br/>перемена"
                    {' '}
                    <span>и получай бомбические <br/> призы </span>
            </h3>
            <div className={classes.switchBlockList} >
                <Hidden smDown>
                    {switches.map((item,index) => (
                        <div onClick={() => setSelected(index)} key={index} className={`${classes.choseBlock} ${selected === index ? classes.choseBlockActive : 'none'}`}  >
                            <CornerPixel color={'#F7D548'} mainColor={'#F7D548'} />
                            {item.title}
                        </div>
                    ))}
                </Hidden>
            </div>
            <Hidden mdUp>
                <div className={classes.carouselContainer} >
                    <Slider {...switchesSettings} afterChange={(i) => setSelected(i)}>
                        {switches.map((item,index) => (
                            <div onClick={() => setSelected(index)} key={index} className={`${classes.choseBlock} ${selected === index ? classes.choseBlockActive : 'none'}`}  >
                                <CornerPixel color={'#F7D548'} />
                                {item.title}
                            </div>
                        ))}
                    </Slider>
                </div>
            </Hidden>
            <div className={classes.switchInfoList} >
                {switches[selected]?.['components'].map((comp,indexItem) =>
                    <InfoBox
                        key={indexItem}
                        color={'#ff7271'}
                        icon={comp.icon}
                        title={comp.title}
                        description={comp.description}
                        subDescriptions={comp.subDescriptions}
                    />
                )}
            </div>


            <div className={classes.banned} >
                <CornerPixelSlice size={14} />
                <div className={classes.bannerText} >
                    Готов проявить себя?{' '}
                    <span>Регистрируйся</span>
                </div>
                <div className={classes.button} >
                    <ButtonPixel
                        width={'200px'}
                        height={'70px'}
                        shadowColor={'#E43D3B'}
                        onClick={() => {
                            yaTarget('registration-start');
                            if (localStorage.getItem('JWT')) {
                                history.push('/lk')
                            } else {
                                history.push('/auth/signup')
                            }
                        }}
                    >
                        <span className={classes.buttonText} >
                            Начать<br/>{' '}соревнование
                        </span>
                    </ButtonPixel>
                </div>
            </div>
        </section>
    )
};