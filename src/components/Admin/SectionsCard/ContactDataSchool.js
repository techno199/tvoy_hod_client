import React                    from 'react';
import InputAdmin               from 'components/Admin/InputAdmin/InputAdmin';
import { onChangeValidValue }   from 'utils/onChangeValidValue';
import { useStyles }            from './style';

const ContactDataSchool = ({ formik, readonly = false }) => {
    const classes = useStyles();

    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>Контактные данные</h3>

            <div className={classes.sectons}>
                <div className={classes.sectionFilter}>
                    <InputAdmin
                        value={formik.values.fioDirector}
                        onChange={onChangeValidValue({formik})}
                        name={'fioDirector'}
                        label={'ФИО директора'}
                        disabled={readonly}
                        capitalize
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.phone}
                        value={formik.values.phone}
                        onBlur={formik.handleChange}
                        name={'phone'}
                        label={'Телефон'}
                        disabled={readonly}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.web_address}
                        value={formik.values.web_address}
                        onBlur={formik.handleChange}
                        name={'web_address'}
                        label={'Сайт'}
                        disabled={readonly}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.email}
                        type={'email'}
                        value={formik.values.email}
                        onBlur={formik.handleChange}
                        name={'email'}
                        label={'Почта'}
                        disabled={readonly}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorText={formik.touched.email && formik.errors.email}
                    />
                </div>
            </div>
        </div>
    )
};

export default ContactDataSchool;