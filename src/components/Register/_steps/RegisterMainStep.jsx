import { Box, Grid, useMediaQuery } from '@material-ui/core';
import SelectCustom from 'components/Admin/SelectCustom/SelectCustom';
import React from 'react'
import BrandLink from 'UI/BrandLink/BrandLink';
import Button from 'UI/Button';
import TextField from 'UI/TextField';
import Title from 'UI/Title';

export default function RegisterMainStep(props) {
    const {
        formik,
        regions = [],
        universities = [],
        customUniversity,
        fetchingForm,
        fetchingRegions,
        fetchingUniversities,
        onRegionChange,
        onCustomUniversityRequest,
        onSubmit
    } = props;
    
    const upMd = useMediaQuery(theme => theme.breakpoints.up('md'));

    const handleSubmit = e => {
        onSubmit && onSubmit(formik);
    }
    
    const handleRegionChange = (e, newValue) => {
        onRegionChange && onRegionChange(newValue);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Title>Регистрация</Title>
            </Grid>

            <Grid item md={6} xs={12}>
                <Box marginRight={`${upMd ? '19px' : '0'}`}>
                    <TextField
                        autoFocus
                        fullWidth
                        label='Имя'
                        name='name'
                        formik={formik}
                    />
                </Box>
            </Grid>

            <Grid item md={6} xs={12}>
                <Box marginLeft={`${upMd ? '19px' : '0'}`}>
                    <TextField
                        fullWidth
                        label='Фамилия'
                        name='surname'
                        formik={formik}
                    />
                </Box>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='Email'
                    name='email'
                    type='email'
                    formik={formik}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label={'Пароль'}
                    name='password'
                    type='password'
                    formik={formik}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='Повторите пароль'
                    name='passwordConfirmation'
                    type='password'
                    formik={formik}
                />
            </Grid>

            <Grid item xs={12}>
                <SelectCustom
                    async
                    loadingSearch={fetchingRegions}
                    label='Регион университета'
                    name='region'
                    options={regions}
                    formik={formik}
                    handleValueSelect={handleRegionChange}
                />
            </Grid>

            <Grid item xs={12}>
                <Box marginBottom='12px'>
                    {
                        customUniversity ? (
                            <TextField
                                fullWidth
                                label='Впишите полное название университета'
                                name='university'
                                formik={formik}
                            />
                        ) : (
                            <SelectCustom
                                async
                                loadingSearch={fetchingUniversities}
                                disabled={!formik.values.region}
                                label='Университет'
                                name='university'
                                options={universities}
                                formik={formik}
                            />
                        )
                    }
                </Box>

                {
                    !customUniversity && formik.values.region && (
                        <BrandLink to='#' onClick={onCustomUniversityRequest}>Не нашли своё учебное заведение?</BrandLink>
                    )
                }
            </Grid>

            {
                !upMd && (
                    <Grid item xs={12}>
                        <Box marginTop='38px'>
                            Нажимая на кнопку зарегистрироваться, вы автоматически соглашаетесь на <BrandLink to='#'>обработку персональный данных</BrandLink>
                        </Box>
                    </Grid>
                )
            }

            <Grid item xs={12}>
                <Box clone marginTop='27px' marginBottom='27px'>
                    <Button
                        fullWidth
                        shape='rounded'
                        color='brandGreen'
                        loader={fetchingForm}
                        onClick={handleSubmit}
                    >
                        Продолжить
                </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
