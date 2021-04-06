import { Box, Grid } from '@material-ui/core'
import React from 'react'
import BrandLink from 'UI/BrandLink/BrandLink'
import Button from 'UI/Button'
import TextField from 'UI/TextField'
import Title from 'UI/Title'

export default function RegisterConfirmation(props) {
    const {
        formik,
        delay = 10,
        currentAttempt = 2,
        maxAttempts = 5,
        onSubmut,
        onPinRenew
    } = props;

    const awaitingPinRenew = delay > 0;

    const handlePinRenew = () => {
        if (!awaitingPinRenew) {
            onPinRenew && onPinRenew();
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Title>Введите код подтверждения</Title>
            </Grid>

            <Grid item xs={12}>
                <Box clone letterSpacing='24px'>
                    <TextField
                        fullWidth
                        size='large'
                        label='На указанную электронную почку было выслано письмо с кодом для подтверждения'
                        formik={formik}
                    />
                </Box>
            </Grid>

            <Grid item xs={12}>
                {/* Количество попыток <= максимальному количеству */}
                {
                    currentAttempt <= maxAttempts && (
                        <>
                            {
                                currentAttempt > 1 && (
                                    <Box clone marginRight='16px' fontSize='16px'>
                                        <span>Вы неверно ввели код с почты</span>
                                    </Box>
                                )
                            }

                            {
                                currentAttempt >= 1 && (
                                    <Box clone fontSize='16px'>
                                        <BrandLink
                                            to='#'
                                            disabled={awaitingPinRenew}
                                            onClick={handlePinRenew}
                                        >
                                            Отправить код повторно {awaitingPinRenew && `(${delay})`}
                                        </BrandLink>
                                    </Box>
                                )
                            }

                        </>
                    )
                }

                {/* Количество попыток превышено */}
                {
                    currentAttempt > maxAttempts && (
                        <span>Вы исчерпали лимит отправки кода. Отправка нового кода возможна через сутки</span>
                    )
                }
            </Grid>

            <Grid item xs={12}>
                <Button fullWidth shape='rounded' color='brandGreen'>Продолжить</Button>
            </Grid>
        </Grid>
    )
}
