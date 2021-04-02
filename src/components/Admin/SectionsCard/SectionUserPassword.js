import React                    from 'react';
import InputAdmin               from 'components/Admin/InputAdmin/InputAdmin';
import { useStyles }            from './style';

const SectionUserPassword = ({ formik, readonly }) => {
    const classes = useStyles();

    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>Пароль</h3>

            <div className={classes.sectons}>
                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.password}
                        value={formik.values.password}
                        onBlur={formik.handleChange}
                        name={'password'}
                        label={'Новый пароль'}
                        disabled={readonly}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        errorText={formik.touched.password && formik.errors.password}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.repeatPassword}
                        value={formik.values.repeatPassword}
                        onBlur={formik.handleChange}
                        name={'repeatPassword'}
                        label={'Повторить пароль'}
                        disabled={readonly}
                        error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                        errorText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                    />
                </div>
            </div>
        </div>
    )
};

export default React.memo(SectionUserPassword);