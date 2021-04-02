import React, { useState, useContext }          from 'react';
import { useHistory, Link }                     from 'react-router-dom';
import Button                                   from '@material-ui/core/Button';
import InputAdmin                               from 'components/Admin/InputAdmin/InputAdmin';
import Logo                                     from 'svgComponents/Logo';
import { useFormik }                            from 'formik';
import * as Yup                                 from 'yup';
import AnimateLoader                            from 'svgComponents/AnimateLoader';
import { AuthContext }                          from 'context/AuthContext/AuthContext';
import { useStyles }                            from './style';

const AdminLogin = () => {
    const classes = useStyles();
    const history = useHistory();
    const { login, getMe, getPermissions } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Невалидный email")
                .required("Поле не должно быть пустым"),
            password: Yup.string()
                .min(8, "Введите не менее 8 символов")
                .required("Поле не должно быть пустым"),
        }),
        onSubmit: values => {
            setLoading(true);
            login({email: values.email.toLowerCase(), password: values.password}).then(response => {
                if (response?.token) {
                    getMe().then(res => {
                        setLoading(false);
                       if(getPermissions(res.role).includes('admin_access')) {
                            history.push('/admin/dashboard');
                       } else {
                           alert('Доступ к админ. панели запрещен')
                       }
                    })
                }
            }).catch(err => {
                if(err.response.status === 400) {
                    setError(err.response.data.error)
                } else {
                    setError(err.message)
                }
                setLoading(false);
            })
        }
    });

    return (
        <div className={classes.AdminLogin}>
            <div className={classes.formWrap}>
                <Link to={'/'}>
                    <Logo color={'#250C4F'} />
                </Link>

                <form
                    className={classes.form}
                    onSubmit={formik.handleSubmit}
                    noValidate
                    autoComplete="off"
                >
                    <h3 className={classes.heading}>Авторизация</h3>

                    <div className={classes.formGroup}>
                        <InputAdmin
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name={'email'}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            label={'Логин'}
                            errorText={formik.touched.email && formik.errors.email}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <InputAdmin
                            type={'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            name={'password'}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            label={'Пароль'}
                            errorText={formik.touched.password && formik.errors.password}
                        />
                    </div>

                    {error ? <p className={classes.error}>{error}</p> : null}

                    <Button
                        type={'submit'}
                        disabled={loading}
                        variant="contained"
                        disableElevation
                        className={classes.button}
                        endIcon={loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                    >
                        {loading ? 'Подождите...' : 'Войти'}
                    </Button>
                </form>
            </div>

        </div>
    )
};

export default AdminLogin;