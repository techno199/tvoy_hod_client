import { Box, Grid} from '@material-ui/core'
import React from 'react'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import PropTypes from 'prop-types'
import SelectCustom from 'components/Admin/SelectCustom/SelectCustom'
import BrandLink from 'UI/BrandLink/BrandLink'
import Button from 'UI/Button'

export default function RegisterView(props) {
    const {
        formik,
        regions = [],
        universities = [],
        customUniversity,
        onCustomUniversityRequest,
        onSubmit
    } = props;

    const handleSubmit = e => {
        console.log(formik)
        onSubmit && onSubmit(formik.values);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Title>Регистрация</Title>
            </Grid>

            <Grid item xs={6}>
                <Box marginRight='19px'>
                    <TextField
                        autoFocus
                        fullWidth
                        label='Имя'
                        name='name'
                        formik={formik}
                    />
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box marginLeft='19px'>
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
                    name='passwordRepeat'
                    type='password'
                    formik={formik}
                />
            </Grid>

            <Grid item xs={12}>
                <SelectCustom
                    label='Регион университета'
                    name='region'
                    options={regions}
                    value={formik.values.region}
                    handleValueSelect={formik.handleChange}
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
                                label='Университет'
                                name='university'
                                options={universities}
                                formik={formik}
                            />
                        )
                    }
                </Box>

                {
                    !customUniversity && (
                        <BrandLink to='#' onClick={onCustomUniversityRequest}>Не нашли своё учебное заведение?</BrandLink>
                    )
                }
            </Grid>

            <Grid item xs={12}>
                <Box clone marginTop='27px'>
                    <Button
                        fullWidth
                        shape='rounded'
                        color='brandGreen'
                        onClick={handleSubmit}
                    >
                        Продолжить
                </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

const formDataItem = PropTypes.shape({
    options: PropTypes.array,
    value: PropTypes.any,
    validator: PropTypes.func,
})

RegisterView.propTypes = {
    formik: PropTypes.object.isRequired,
    regions: PropTypes.array,
    universities: PropTypes.array,
    /** Активация ручного ввода названия универа */
    customUniversity: PropTypes.bool,
    onChange: PropTypes.func,
    onCustomUniversityRequest: PropTypes.func,
    onSubmit: PropTypes.func,
}