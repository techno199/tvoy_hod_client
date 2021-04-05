import { Box, FormControl, FormGroup, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Fieldset } from 'UI/Fieldset'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import PropTypes from 'prop-types'
import SelectCustom from 'components/Admin/SelectCustom/SelectCustom'
import BrandLink from 'UI/BrandLink/BrandLink'
import Button from 'UI/Button'
import { useFormik } from 'formik'
import { REGISTER_SCHEMA } from './_constants/registerSchema'

const useStyles = makeStyles({
    fieldset: {
        marginBottom: 12
    }
});

export default function RegisterView(props) {
    const {
        formData = {},
        customUniversity,
        onChange,
        onCustomUniversityRequest
    } = props;

    const {
        name,
        surname,
        email,
        region,
        university
    } = formData;

    const formik = useFormik({
        initialValues: {
            name: name.value,
            surname: surname.value,
            email: email.value,
            region: region.value,
            university: university.value
        },
        validationSchema: REGISTER_SCHEMA,
        onSubmit: values => console.log(values)
    })

    const classes = useStyles();

    const handleChange = field => e => {
        onChange && onChange({
            field,
            newValue: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log(e);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <Title>Регистрация</Title>
                </Grid>

                <Grid item xs={6}>
                    <Box marginRight='19px'>
                        <Fieldset
                            thin
                            title='Имя'
                        >
                            <TextField
                                autoFocus
                                fullWidth
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </Fieldset>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box marginLeft='19px'>
                        <Fieldset
                            thin
                            title='Фамилия'
                        >
                            <TextField
                                required
                                fullWidth
                                name='surname'
                                value={formik.values.surname}
                                onChange={formik.handleChange}
                            />
                        </Fieldset>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Fieldset
                        thin
                        title='Адрес электронной почты'
                    >
                        <TextField
                            required
                            fullWidth
                            name='email'
                            type='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </Fieldset>
                </Grid>

                <Grid item xs={12}>
                    <Fieldset
                        thin
                        title='Регион'
                    >
                        <SelectCustom
                            name='region'
                            options={region.options}
                            value={formik.values.region}
                            onChange={formik.handleChange}
                        />
                    </Fieldset>
                </Grid>

                <Grid item xs={12}>
                    <Fieldset
                        thin
                        title={customUniversity ? 'Впишите полное название университета' : 'Университет'}
                        className={classes.fieldset}
                    >
                        {
                            customUniversity ? (
                                <TextField
                                    fullWidth
                                    required
                                    value={university.value}
                                    onChange={handleChange(university)}
                                />
                            ) : (
                                <SelectCustom
                                    name='university'
                                    options={university.options}
                                    value={formik.values.university}
                                    onChange={formik.handleChange}
                                />
                            )
                        }
                    </Fieldset>

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
                            type='submit'
                            shape='rounded'
                            color='brandGreen'
                        >
                            Продолжить
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    )
}

const formDataItem = PropTypes.shape({
    options: PropTypes.array,
    value: PropTypes.any,
    validator: PropTypes.func,
})

RegisterView.propTypes = {
    formData: PropTypes.shape({
        name: formDataItem,
        surname: formDataItem,
        email: formDataItem,
        region: formDataItem,
        university: formDataItem
    }),
    /** Активация ручного ввода названия универа */
    customUniversity: PropTypes.bool,
    onChange: PropTypes.func,
    onCustomUniversityRequest: PropTypes.func,
}