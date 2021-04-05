import React from 'react'
import { GrayGeometry } from 'svgComponents/GrayGeometry'
import { useCreateProjectStyles } from './style'

import xodImage from 'images/xodImage.png'
import matrixGirl from 'images/matrixGirl.png'
import WrapContent from 'HOC/WrapContent/WrapContent'

export const CreateProjectBanner = () => {

    const classes = useCreateProjectStyles()

    return (
        <section className={classes.sectionWrapper} >

            <WrapContent>
                <div className={classes.banner} >
                    <div className={classes.textBlock} >

                        <div className={classes.bigText} >
                            Создай свой проект <br /> со своими правилами
                    </div>
                        <div className={classes.colorText} >
                            выйграй <span>1 000 000 рублей</span>
                        </div>

                    </div>

                    <div className={classes.imageWrapper} >
                        <img src={matrixGirl} alt='' className={classes.image} />
                    </div>

                    <img src={xodImage} alt='' className={classes.xodLeft} />
                    <img src={xodImage} alt='' className={classes.xodRight} />
                </div>
            </WrapContent>

            <div className={classes.grayGeometry} >
                <GrayGeometry />
            </div>

        </section>
    )
}
