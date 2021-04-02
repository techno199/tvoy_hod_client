import React                            from 'react';
import InputAdmin                       from 'components/Admin/InputAdmin/InputAdmin';
import SelectCustom                     from 'components/Admin/SelectCustom/SelectCustom';
import { useStyles }                    from './style';

const InfoSchool = ({ formik, readonly = false, handleValueSelect, searchHandler, loadingSearch, innDadataOptions, disabledInn = false, optionsType }) => {
    const classes = useStyles();


    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>Информация об учреждении</h3>

            <div className={classes.sectons}>
                <div className={`${classes.sectionFilter} ${classes.asyncSelect}`}>
                    <SelectCustom
                        noArrow
                        async
                        maskInput={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        value={formik.values.inn}
                        options={innDadataOptions}
                        handleValueSelect={handleValueSelect('inn')}
                        onChangeSearchField={searchHandler}
                        topLabel={'ИНН'}
                        loadingSearch={loadingSearch}
                        customOptions={'name'}
                        disabled={readonly || disabledInn}
                        errorData={formik.touched.inn && Boolean(formik.errors.inn)}
                        errorText={formik.touched.inn && formik.errors.inn}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.kpp}
                        value={formik.values.kpp}
                        onBlur={formik.handleChange}
                        name={'kpp'}
                        label={'КПП'}
                        maskInput={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        disabled={readonly}
                        error={formik.touched.kpp && Boolean(formik.errors.kpp)}
                        errorText={formik.touched.kpp && formik.errors.kpp}
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <SelectCustom
                        value={formik.values.type}
                        options={optionsType.current}
                        handleValueSelect={handleValueSelect('type')}
                        topLabel={'Тип'}
                        disabled={readonly}
                        errorData={formik.touched.type && Boolean(formik.errors.type)}
                        errorText={formik.touched.type && formik.errors.type}
                        readonly
                    />
                </div>

                <div className={classes.sectionFilter}>
                    <InputAdmin
                        key={formik.values.short_name}
                        value={formik.values.short_name}
                        onBlur={formik.handleChange}
                        name={'short_name'}
                        label={'Краткое наименование'}
                        disabled={readonly}
                        error={formik.touched.short_name && Boolean(formik.errors.short_name)}
                        errorText={formik.touched.short_name && formik.errors.short_name}
                    />
                </div>

                <div className={`${classes.sectionFilter} ${classes.twoThirds}`}>
                    <InputAdmin
                        key={formik.values.long_name}
                        value={formik.values.long_name}
                        onBlur={formik.handleChange}
                        name={'long_name'}
                        label={'Наименование полное'}
                        disabled={readonly}
                        error={formik.touched.long_name && Boolean(formik.errors.long_name)}
                        errorText={formik.touched.long_name && formik.errors.long_name}
                    />
                </div>
            </div>
        </div>
    )
};

export default InfoSchool;