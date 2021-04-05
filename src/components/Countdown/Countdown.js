import useCountdown from 'hooks/useCountdown'
import React from 'react'
import BrandButton from 'UI/BrandButton/BrandButton'
import { useCountdownStyles } from './style'

export const Countdown = ({ toDate }) => {

    const { days, hours, minutes } = useCountdown({toDate})

    const classes = useCountdownStyles()

    return (
        <div className={classes.wrapper} >

            <BrandButton
                className={classes.daysButton}
                disabled
                variant='brandGreen'
            >
                <div className={classes.innerButton} >
                    <div className={classes.daysNumber} >
                        {days}
                    </div>
                    <div className={classes.timeType} >
                        дней
                    </div>
                </div>
            </BrandButton>

            <div className={classes.devider} >
                :
            </div>

            <BrandButton
                className={classes.normalButton}
                disabled
                variant='brandGreen'
            >
                <div className={classes.innerButton} >
                    <div className={classes.number} >
                        {hours}
                    </div>
                    <div className={classes.timeType} >
                        часов
                    </div>
                </div>
            </BrandButton>

            <div className={classes.devider} >
                :
            </div>

            <BrandButton
                className={classes.normalButton}
                disabled
                variant='brandGreen'
            >
                <div className={classes.innerButton} >
                    <div className={classes.number} >
                        {minutes}
                    </div>
                    <div className={classes.timeType} >
                        минут
                    </div>
                </div>
            </BrandButton>

        </div>
    )
}
