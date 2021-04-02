import React, { useState, useContext }      from 'react';
import { Fieldset }                         from 'UI/Fieldset';
import TextField                            from 'UI/TextField';
import Button                               from 'UI/Button';
import AnimateLoader                        from 'svgComponents/AnimateLoader';
import { AuthContext }                      from 'context/AuthContext/AuthContext';
import { formatPhone }                      from 'utils/formatPhone';
import { useStyles }                        from './style';

const EditPhone = ({ setVisibleEditData, personDataEdit }) => {
    const classes = useStyles();
    const { state : stateContext } = useContext(AuthContext);

    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const objData = {
        user_update: {
            id: stateContext.id,
            name: {
                first_name: stateContext.name.first,
                last_name: stateContext.name.last,
                middle_name: stateContext.name.middle
            },
            educational_institution_info: {
                grade: stateContext.educationalInstitutionInfo.grade,
                letter: stateContext.educationalInstitutionInfo.letter,
                post: stateContext.educationalInstitutionInfo.position,
                course: stateContext.educationalInstitutionInfo.course,
            },
            nickname: stateContext.nickname,
            //eslint-disable-next-line
            phone: phone.replace(/[\+\-\)\(\s]/g, ''),
            birth_date: stateContext.birth_date,
            gender: stateContext.gender,
            educational_institution_id: stateContext.educational_institution_info_id || '',
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if(!phone.length || phone.match(/\d/g).length < 11) {
            setError({message: 'Номер телефона должен состоять из 11 символов'});
            return false;
        }

        try {
            await personDataEdit(event, {setLoading, objData});
            setVisibleEditData(false);
        } catch (err) {
            throw err;
        }
    };

    return (
        <div>
            <p className={classes.subText}>
                Текущий номер телефона {stateContext.phone ? formatPhone(stateContext.phone) : 'не указан'}
            </p>
            <form onSubmit={submitHandler}>
                <div className={classes.wrapField}>
                    <Fieldset title={'Новый номер телефона'}>
                        <TextField
                            value={phone}
                            name='phone'
                            error={Boolean(error)}
                            phoneMask
                            fullWidth
                            onChange={(e) => {
                                if(error) setError(false);
                                setPhone(e.target.value)
                            }}
                            helperText={error.message || null}
                        />
                    </Fieldset>
                </div>

                <div className={classes.buttonWrap}>
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
        </div>
    )
};

export default EditPhone;