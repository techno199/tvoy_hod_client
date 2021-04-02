import React, { useContext }                        from 'react';
import FormControlLabel                             from '@material-ui/core/FormControlLabel';
import Checkbox                                     from '@material-ui/core/Checkbox';
import SelectCustom                                 from 'components/Admin/SelectCustom/SelectCustom';
import { GRADES, LITERA, TEST_POSITIONS }           from '../../../CONSTANTS';
import { getAdminPermissions }                      from 'utils/adminPermissions';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { useStyles }                                from './style';

const SettingBigChangeUserCard = ({ formik, handleValueSelect, handleChange, readonly, adminPage, courseOptions}) => {
    const classes = useStyles();
    const { roles } = useContext(AdminUserContext);

    const FieldSettinggs = () => {
        if(!adminPage) {
            switch(formik.values?.role?.id) {
                case 1:
                    return (
                        <>
                            <div className={classes.sectionFilter}>
                                <SelectCustom
                                    readonly
                                    value={formik.values.grade}
                                    options={GRADES.map(i => ({id: i, title: i.toString()}))}
                                    handleValueSelect={handleValueSelect('grade')}
                                    topLabel={'Класс (для ученика)'}
                                    disabled={readonly}
                                    errorData={formik.touched.grade && Boolean(formik.errors.grade)}
                                    errorText={formik.touched.grade && formik.errors.grade}
                                />
                            </div>

                            <div className={classes.sectionFilter}>
                                <SelectCustom
                                    readonly
                                    value={formik.values.letter}
                                    options={LITERA.map(i => ({id: i, title: i}))}
                                    handleValueSelect={handleValueSelect('letter')}
                                    topLabel={'Литера класса (для ученика)'}
                                    disabled={readonly}
                                />
                            </div>
                        </>
                    );

                case 2:
                    return (
                        <div className={classes.sectionFilter}>
                            <SelectCustom
                                readonly
                                value={formik.values.position}
                                options={TEST_POSITIONS}
                                handleValueSelect={handleValueSelect('position')}
                                topLabel={'Должность'}
                                disabled={readonly}
                                errorData={formik.touched.position && Boolean(formik.errors.position)}
                                errorText={formik.touched.position && formik.errors.position}
                            />
                        </div>
                    );

                case 9:
                    return (
                        <div className={classes.sectionFilter}>
                            <SelectCustom
                                readonly
                                value={formik.values.course}
                                options={courseOptions.current}
                                handleValueSelect={handleValueSelect('course')}
                                topLabel={'Курс'}
                                disabled={readonly}
                                errorData={formik.touched.course && Boolean(formik.errors.course)}
                                errorText={formik.touched.course && formik.errors.course}
                            />
                        </div>
                    );

                default:
                    return null
            }
        }
    };

    return (
        <div className={classes.sectionsContent}>
            <h3 className={classes.headingSections}>
                { adminPage ? 'Настройка учетной записи' : 'Настройка Большой перемены' }
            </h3>

            {
                formik.values?.role?.id === 2 && !adminPage ?
                    <div className={classes.checkboxContainer}>
                        <span className={classes.labelCheckbox}>Ответственный</span>
                        <FormControlLabel
                            classes={{
                                label: classes.formControlLabel
                            }}
                            control={
                                <Checkbox
                                    checked={formik.values.is_responsible}
                                    onChange={handleChange}
                                    name="is_responsible"
                                    size={'small'}
                                    color={'primary'}
                                    disabled={readonly}
                                    classes={{
                                        root: classes.vp_root,
                                        checked: classes.vp_checked,
                                        disabled: classes.disabledCheckbox
                                    }}
                                />
                            }
                            label="Да"
                        />
                    </div>  : null
            }

            <div className={classes.sectons}>
                <div className={classes.sectionFilter}>
                    <SelectCustom
                        readonly
                        value={formik.values.role}
                        options={
                            !adminPage
                                ? roles.filter(item => !getAdminPermissions(item.permissions))
                                : roles.filter(item => getAdminPermissions(item.permissions))
                        }
                        handleValueSelect={handleValueSelect('role')}
                        topLabel={'Роль'}
                        disabled={readonly}
                        errorData={formik.touched.role && Boolean(formik.errors.role)}
                        errorText={formik.touched.role && formik.errors.role}
                    />
                </div>

                { FieldSettinggs() }
            </div>
        </div>
    )
};

export default React.memo(SettingBigChangeUserCard);