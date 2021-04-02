import React                                        from 'react';
import InputAdmin                                   from 'components/Admin/InputAdmin/InputAdmin';
import SelectCustom                                 from 'components/Admin/SelectCustom/SelectCustom';
import { onChangeValidValue }                       from 'utils/onChangeValidValue';
import { useStyles }                                from './style';

const SectionsUserInfo = ({ handleValueSelect, gendersOptions, readonly, adminPage, formik }) => {
    const classes = useStyles();

    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>Информация о пользователе</h3>

            <div className={classes.sectons}>
                <div className={classes.sectionFilter}>
                    <InputAdmin
                        value={formik.values.last_name}
                        onChange={onChangeValidValue({formik})}
                        name={'last_name'}
                        label={'Фамилия'}
                        disabled={readonly}
                        capitalize
                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                        errorText={formik.touched.last_name && formik.errors.last_name}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        value={formik.values.first_name}
                        onChange={onChangeValidValue({formik})}
                        name={'first_name'}
                        label={'Имя'}
                        disabled={readonly}
                        capitalize
                        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                        errorText={formik.touched.first_name && formik.errors.first_name}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        value={formik.values.middle_name}
                        onChange={onChangeValidValue({formik})}
                        name={'middle_name'}
                        label={'Отчество'}
                        disabled={readonly}
                        capitalize
                    />
                </div>

                {
                    !adminPage ?
                        <>
                            <div className={classes.sectionFilter}>
                                <InputAdmin
                                    key={formik.values.user_status}
                                    value={formik.values.user_status}
                                    onBlur={formik.handleChange}
                                    name={'user_status'}
                                    label={'Статус пользователя'}
                                    disabled={readonly}
                                />
                            </div>

                            <div className={classes.sectionFilter}>
                                <InputAdmin
                                    key={formik.values.nickname}
                                    value={formik.values.nickname}
                                    onBlur={formik.handleChange}
                                    name={'nickname'}
                                    label={'Ник пользователя'}
                                    disabled={readonly}
                                />
                            </div>

                            <div className={`${classes.sectionFilter} d-flex`}>
                                <div className={classes.w50}>
                                    <InputAdmin
                                        key={formik.values.birth_date}
                                        value={formik.values.birth_date}
                                        onBlur={formik.handleChange}
                                        name={'birth_date'}
                                        label={'Дата рождения'}
                                        maskInput={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/,/\d/, /\d/, /\d/]}
                                        disabled={readonly}
                                        error={formik.touched.birth_date && Boolean(formik.errors.birth_date)}
                                        errorText={formik.touched.birth_date && formik.errors.birth_date}
                                    />
                                </div>

                                <div className={classes.w50}>
                                    <SelectCustom
                                        readonly
                                        value={formik.values.gender}
                                        options={gendersOptions}
                                        handleValueSelect={handleValueSelect('gender')}
                                        topLabel={'Пол'}
                                        disabled={readonly}
                                        errorData={formik.touched.gender && Boolean(formik.errors.gender)}
                                        errorText={formik.touched.gender && formik.errors.gender}
                                    />
                                </div>
                            </div>

                            <div className={classes.sectionFilter}>
                                <InputAdmin
                                    key={formik.values.phone}
                                    value={formik.values.phone}
                                    onBlur={formik.handleChange}
                                    name={'phone'}
                                    label={'Телефон'}
                                    maskInput={['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                    disabled={readonly}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    errorText={formik.touched.phone && formik.errors.phone}
                                />
                            </div>
                        </> : null
                }
                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.email}
                        value={formik.values.email}
                        type={'email'}
                        onBlur={formik.handleChange}
                        name={'email'}
                        label={'Электронная почта'}
                        disabled={readonly}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorText={formik.touched.email && formik.errors.email}
                    />
                </div>
            </div>
        </div>
    )
};

export default React.memo(SectionsUserInfo);