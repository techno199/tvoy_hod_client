import { Countdown } from 'components/Countdown/Countdown'
import { COUNTDOWN_UNTIL } from 'CONSTANTS'
import WrapContent from 'HOC/WrapContent/WrapContent'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import BrandButton from 'UI/BrandButton/BrandButton'
import { useUntilRegistrationStyles } from './styles'

export const UntilRegistrationBanner = () => {

    const classes = useUntilRegistrationStyles()
    const history = useHistory()

    return (
        <WrapContent>
            <div className={classes.countdownPlank} >
                <Countdown toDate={COUNTDOWN_UNTIL} />
                <div className={classes.countdownText} >
                    Осталось до конца <br /> регистрации
                </div>

                <BrandButton
                    className={classes.button}
                    onClick={() => history.push('/auth/signup')}
                >
                    Регистрация
                </BrandButton>
            </div>
        </WrapContent>
    )
}
