import React, {useState} from 'react';
import { Fieldset } from 'UI/Fieldset';
import TextField from 'UI/TextField';
import { ButtonGroup } from 'UI/ButtonGroup';
import { GroupButton } from 'UI/GroupButton';
import Button from 'UI/Button';
import AnimateLoader from 'svgComponents/AnimateLoader';
import { useStyles } from './style';

const PersonalData = ({ stateContext, personDataEdit }) => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        name: stateContext.name.first || '',
        surname: stateContext.name.last || '',
        patronymic: stateContext.name.middle || '',
        nickname: stateContext.nickname || '',
        birthDate: stateContext.birth_date ? stateContext.birth_date.split('-').reverse().join('.') : '',
        sex: stateContext.gender,
    });

    const objData = {
        user_update: {
            id: stateContext.id,
            name: {
                first_name: state.name,
                last_name: state.surname,
                middle_name: state.patronymic
            },
            educational_institution_info: {
                grade: stateContext.educationalInstitutionInfo.grade,
                letter: stateContext.educationalInstitutionInfo.letter,
                post: stateContext.educationalInstitutionInfo.position,
                course: stateContext.educationalInstitutionInfo.course,
            },
            nickname: state.nickname,
            phone: stateContext.phone,
            birth_date: state.birthDate.split('.').reverse().join('-'),
            gender: state.sex,
            educational_institution_id: stateContext.educational_institution_info_id || '',
        }
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({...prev, [name]: value}))
    };

    return (
        <form
            className={classes.personalDataForm}
            onSubmit={(event) => {
                personDataEdit(event, {setLoading, objData: objData})
            }}
        >
            <div className={classes.formGroup}>
                <Fieldset
                    title={'Имя'}
                >
                    <TextField
                        value={state.name}
                        name='name'
                        placeholder=' '
                        fullWidth
                        onChange={handleFieldChange}
                        required
                        type='text'
                    />
                </Fieldset>
            </div>

            <div className={`${classes.formGroup} ${classes.lastName}`}>
                <Fieldset
                    title={'Фамилия'}
                >
                    <TextField
                        value={state.surname}
                        name='surname'
                        placeholder=' '
                        fullWidth
                        onChange={handleFieldChange}
                        required
                        type='text'
                    />
                </Fieldset>
            </div>

            <div className={classes.formGroup}>
                <Fieldset
                    title={'Отчество'}
                    subtitle={'(необязательно)'}
                >
                    <TextField
                        value={state.patronymic}
                        name='patronymic'
                        placeholder=' '
                        fullWidth
                        onChange={handleFieldChange}
                        type='text'
                    />
                </Fieldset>
            </div>

            <div className={classes.formGroup}>
                <Fieldset
                    title={'Ник'}
                    subtitle={'(необязательно)'}
                >
                    <TextField
                        value={state.nickname}
                        name='nickname'
                        placeholder=''
                        fullWidth
                        onChange={handleFieldChange}
                        type='text'
                    />
                </Fieldset>
            </div>

            <div className={classes.formGroup}>
                <Fieldset
                    title={'Дата рождения'}
                >
                    <TextField
                        value={state.birthDate}
                        name='birthDate'
                        required
                        placeholder=''
                        fullWidth
                        date
                        onChange={handleFieldChange}
                    />
                </Fieldset>
            </div>

            <div className={classes.formGroup}>
                <Fieldset
                    title='Пол'
                >
                    <ButtonGroup fullWidth disableElevation variant="contained" color="primary">
                        <GroupButton
                            isActive={state?.sex === 0}
                            onClick={() => setState(prev => ({ ...prev, sex: 0 }))}
                            fullWidth
                        >
                            Мужской
                        </GroupButton>

                        <GroupButton
                            onClick={() => setState(prev => ({ ...prev, sex: 1 }))}
                            isActive={state?.sex === 1}
                            fullWidth
                        >
                            Женский
                        </GroupButton>
                    </ButtonGroup>
                </Fieldset>
            </div>

            <div className={classes.bottomWrap}>
                <Button
                    disabled={loading}
                    type='submit'
                    width='318px'
                    height='42px'
                >
                    {loading ? 'Подождите...' : 'Сохранить'}
                    {loading ? <AnimateLoader className={'loader'} color={'#fff'} /> : null}
                </Button>
            </div>
        </form>
    )
};

export default PersonalData;