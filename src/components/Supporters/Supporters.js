import React from 'react'

import rzd from 'images/rzd.png'
import supportRussia from 'images/supportTussiaLogo.png'
import sibur from 'images/siburLogo.png'
import s7airlines from 'images/s7AirlinesLogo.png'
import mailruLogo from 'images/mailruLogo.png'
import nornikel from 'images/nornikelLogo.png'
import rosatom from 'images/rosatomLogo.png'
import prioritets from 'images/prioritetsLogo.png'
import minNaukiLogo from 'images/minNaukiLogo.png'
import rosTeensLogo from 'images/rosTeensLogo.png'
import rosTourismLogo from 'images/rosTourismLogo.png'

import WrapContent from 'HOC/WrapContent/WrapContent'
import { useSupportersStyles } from './styles'


const PARTNERS = [
    rzd, sibur, supportRussia, s7airlines,
    mailruLogo, nornikel, rosatom, prioritets
]

const SUPPORTERS = [
    minNaukiLogo,rosTeensLogo, rosTourismLogo
]

export const Supporters = () => {

    const classes = useSupportersStyles()

    return (
        <WrapContent>
            <section className={classes.sectionWrapper} >

                <div className={classes.container} >
                    <h3>
                        Наши партнёры:
                    </h3>
                    <div>
                        {PARTNERS.map((srcImg,ind) => (
                            <div key={ind} className={classes.imgContainer}>
                                <img src={srcImg} alt='' />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.container} >
                    <h3>
                        Конкурс проводится при поддержке:
                    </h3>
                    <div>
                        {SUPPORTERS.map((srcImg,ind) => (
                            <div key={ind} className={classes.bigImgContainer}>
                                <img src={srcImg} alt='' />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </WrapContent>
    )
}
