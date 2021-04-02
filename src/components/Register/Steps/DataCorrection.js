import { postRegistration }                         from 'api/AuthApi'
import { GRADES, LITERA,
    TEST_POSITIONS, TEST_ROLES }                    from 'CONSTANTS'
import { doRequest }                                from 'hooks/doRequest'
import React, { useContext, useState, useEffect }   from 'react';
import { useHistory }                               from 'react-router-dom/cjs/react-router-dom.min';
import { Autocomplete }                             from 'UI/Autocomplete';
import Button                                       from 'UI/Button'
import { ButtonGroup }                              from 'UI/ButtonGroup'
import { Fieldset }                                 from 'UI/Fieldset'
import { GroupButton }                              from 'UI/GroupButton'
import TextField                                    from 'UI/TextField'
import { theme }                                    from 'UI/themeInstance'
import Title                                        from 'UI/Title'
import { TooltipQuestion }                          from 'UI/Tooltip'
import Tooltip                                      from '@material-ui/core/Tooltip';
import FieldsForRoles                               from './FieldsForRoles';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { AdminUserContext }                         from 'context/AdminUserContext/AdminUserContext';
import { useHookTerritory }                         from 'HOC/useHook/useHookTerritory';
import { onChangeValidValue }                       from 'utils/onChangeValidValue';
import { yaTarget }                                 from 'utils/yaTarget';

export const DataCorrection = ({
    saveToRequestData,
    email,
    code,
    oldData,
    c
}) => {
    const history = useHistory();
    const { regions, getRegions } = useContext(AdminUserContext);
    const { onChangeSearchField } = useContext(AuthContext);

    const [errorRus, setErrorRus] = useState({});
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [data, setData] = useState({
        role: TEST_ROLES.find((r) => r === oldData?.role),
        grade: GRADES.find((g) => String(g) === String(oldData?.school?.class)),
        litera: LITERA.find((g) => String(g) === String(oldData?.school?.char)),
        post: TEST_POSITIONS.find((g) => String(g) === String(oldData?.school?.post)),
        course: null,
        name: oldData?.name?.first || '',
        surname: oldData?.name?.last || '',
        patronymic: oldData?.name?.middle || '',
        email: oldData?.email || '',
        nickname: oldData?.nickname || '',
        phone: oldData?.phone ? oldData?.phone?.slice(1) || '' : '',
        sex: oldData?.gender || '',
        birthDate: conformToDate(oldData?.birth_date) || '',
        school_address: null,
        schoolOptions: [],
        region: null,
        municipal: null,
    });
    const [errors, setErrors] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [ municipalOptions, setMunicipalOptions] = useState([]);
/**/
    useEffect(() => {
        if(!regions.length) {
            getRegions()
        }
        //eslint-disable-next-line
    }, []);

    //собственный хук по территориям
    useHookTerritory({
        filterState: data,
        setFilterState: setData,
        noFilters: true,
        municipal: municipalOptions,
        setMunicipal: setMunicipalOptions
    });

    function conformToDate (value) {
        if(value){
            return value.split('-').reverse().join('.')
        }
        return ''
    }

    const disabledButton = () => {
        return !Boolean(
            data.name.trim() && data.surname.trim() &&
            data.birthDate && [0,1].includes(data.sex) &&
            (data?.repPassword === data?.password) &&
            data?.password?.length &&
            data.password.length >= 8 &&
            data.school_address &&
            ((data.role.id === 1 && data.grade) ||
             (data.role.id === 2 && data.position) ||
             (data.role.id === 9 && data.course))
        )
    };

    const handleFieldBlur = (e) => {
        const { name, value } = e.target;
        saveToRequestData({ [name]: value })
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        yaTarget('registration-complete');

        setErrors({});
        setIsFetching(true);

        const requestdata = {
            name: data.name || '',
            surname: data.surname || '',
            patronymic: data.patronymic || '',
            email: data?.email || email,
            code,
            nick: data.nickname || '',
            phone: data.phone || '',
            gender: data.sex ?? '',
            password: data.repPassword || '',
            grade: data?.grade ?? '',
            course: data?.course?.id ?? '',
            char: data?.litera ?? '',
            post: data?.position?.id ?? '',
            role: data?.role?.id ?? '',
            birthDate: data?.birthDate ? data?.birthDate.split('.').reverse().join('-') || '' : '',
            educational_institution_id: data?.school_address?.id ?? '',
        };

        const { success, errors, data: responseData } = await doRequest(postRegistration, requestdata);
        setIsFetching(false);

        if (success) {
            history.push('/auth/signin')
        } else {
            setErrors(errors || responseData?.errors)
        }
    };

    const handleCompleteChange = (name, value) => {
        if (name === 'role') {
            setData({
                ...data,
                [name]: value,
                grade: null,
                litera: null,
                position: null,
            });
            return;
        }
        setData({
            ...data,
            [name]: value,
        })
    };

    return (
        <form onSubmit={handleSubmit} style={{ paddingBottom: '10%' }} >
            <Title marginBottom={'36px'} marginTop={'14%'} aside={() => <TooltipQuestion body={'Вводите корректные Фамилию, Имя и Отчество, поскольку именно они будут отображены на сертификате'} title={'Важно'} />} >
                Регистрация
            </Title>

            <Fieldset
                title={'Фамилия'}
            >
                <TextField
                    value={data.surname || ''}
                    name='surname'
                    placeholder=' '
                    fullWidth
                    onBlur={handleFieldBlur}
                    onChange={onChangeValidValue({state: data, setState: setData, setError: setErrorRus})}
                    required
                    type='text'
                    capitalize={'yes'}
                    error={Boolean(errorRus.surname)}
                    helperText={errorRus.surname}
                />
            </Fieldset>

            <Fieldset
                title={'Имя'}
            >
                <TextField
                    value={data.name || ''}
                    name='name'
                    placeholder=' '
                    fullWidth
                    onBlur={handleFieldBlur}
                    onChange={onChangeValidValue({state: data, setState: setData, setError: setErrorRus})}
                    required
                    type='text'
                    capitalize={'yes'}
                    error={Boolean(errorRus.name)}
                    helperText={errorRus.name}
                />
            </Fieldset>

            <Fieldset
                title={'Отчество'}
                subtitle={'(необязательно)'}
            >
                <TextField
                    value={data.patronymic || ''}
                    name='patronymic'
                    placeholder=' '
                    fullWidth
                    onBlur={handleFieldBlur}
                    onChange={onChangeValidValue({state: data, setState: setData, setError: setErrorRus})}
                    type='text'
                    capitalize={'yes'}
                    error={Boolean(errorRus.patronymic)}
                    helperText={errorRus.patronymic}
                />
            </Fieldset>

            <Fieldset
                title={'Ник'}
                subtitle={'(необязательно)'}
            >
                <TextField
                    value={data.nickname || ''}
                    name='nickname'
                    placeholder=' '
                    fullWidth
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    type='text'
                />
            </Fieldset>

            <Fieldset
                title={'Телефон'}
                subtitle={'(необязательно)'}
            >
                <TextField
                    value={data.phone || ''}
                    name='phone'
                    error={Boolean(errors?.phone)}
                    phoneMask
                    fullWidth
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                />
            </Fieldset>

            <Fieldset
                title={'Дата рождения'}
            >
                <TextField
                    value={data.birthDate || ''}
                    name='birthDate'
                    required
                    placeholder=' '
                    fullWidth
                    date
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                />
            </Fieldset>

            <Fieldset
                title='Пол'
                error={errors?.gender}
            >
                <ButtonGroup error={errors?.gender} fullWidth disableElevation variant="contained" color="primary">

                    <GroupButton
                        isActive={data?.sex === 0}
                        onClick={() => setData({ ...data, sex: 0 })}
                        fullWidth
                    >
                        Мужской
                    </GroupButton>

                    <GroupButton
                        onClick={() => setData({ ...data, sex: 1 })}
                        isActive={data?.sex === 1}
                        fullWidth
                    >
                        Женский
                    </GroupButton>
                </ButtonGroup>
            </Fieldset>

            <p className={c.schools}>Кто Вы?</p>

            <Fieldset
                description={'Выберите роль для участия в Большой Перемене'}
            >
                <Autocomplete
                    options={TEST_ROLES}
                    value={data.role || null}
                    onChange={(e, newObj) => handleCompleteChange('role', newObj)}
                    name='bigbreakRole'
                />
            </Fieldset>

            <FieldsForRoles
                roleId={data.role?.id}
                errors={errors}
                handleCompleteChange={handleCompleteChange}
            />

            <p className={c.schools}>Образовательное учреждение</p>

            <Fieldset
                title='Регион'
            >
                <Autocomplete
                    options={regions}
                    value={data.region}
                    onChange={(e, newObj) => handleCompleteChange('region', newObj)}
                    name='region'
                />
            </Fieldset>

            <Tooltip
                title="Сначала выберите регион"
                placement="top-start"
                classes={{tooltip: c.vp_tooltip}}
                disableHoverListener={Boolean(data.region)}
                disableFocusListener={Boolean(data.region)}
            >
                <div>
                    <Fieldset
                        title='Муниципальное образование'
                    >
                        <Autocomplete
                            disabled={!data.region}
                            options={municipalOptions}
                            value={data.municipal}
                            onChange={(e, newObj) => handleCompleteChange('municipal', newObj)}
                            name='municipal'
                        />
                    </Fieldset>
                </div>
            </Tooltip>

            <Tooltip
                title="Сначала выберите муниципальное образование"
                placement="top-start"
                classes={{tooltip: c.vp_tooltip}}
                disableHoverListener={Boolean(data.municipal)}
                disableFocusListener={Boolean(data.municipal)}
            >
                <div>
                    <Fieldset
                        title='Наименование / номер учреждения'
                    >
                        <Autocomplete
                            noArrow
                            disabled={!data.municipal}
                            options={data.schoolOptions}
                            value={data.school_address}
                            onChange={(_, newObj) => {
                                handleCompleteChange('school_address', newObj)
                            }}
                            name="school_address"
                            onChangeSearchField={(event) => {
                                onChangeSearchField(event,
                                    {
                                        setLoadingSearch,
                                        setState: setData,
                                        params: {
                                            region_id: data.region.id,
                                            municipal_unit_id: data.municipal.id,
                                            type: data?.role?.type || null
                                        }
                                    }
                                )
                            }}
                            loadingSearch={loadingSearch}
                            async={true}
                            field={'name'}
                            placeholder={'Введите номер образовательного учреждения'}
                            error={errors?.school_id}
                            textError={errors?.school_id}
                        />
                        <a className={c.noSearchScool} href="mailto:help@bolshayaperemena.online?subject=Не нашли своё учебное заведение">Не нашли своё учебное заведение?</a>
                    </Fieldset>
                </div>
            </Tooltip>

            <Fieldset
                title={'Пароль'}
            >
                <TextField
                    name='password'
                    placeholder=' '
                    fullWidth
                    required
                    error={data.password && data?.password?.length < 8}
                    helperText={data.password && data?.password?.length < 8 ? 'Минимальная длина пароля - 8 символов' : null}
                    onChange={handleFieldChange}
                    value={data.password || ''}
                    type='password'
                />
            </Fieldset>

            <Fieldset
                title={'Подтвердите пароль'}
            >
                <TextField
                    name='repPassword'
                    placeholder=' '
                    fullWidth
                    error={data.repPassword && (data.repPassword !== data.password) }
                    helperText={data.repPassword && (data.repPassword !== data.password) && 'Пароли не совпадают'}
                    required
                    value={data.repPassword || ''}
                    onChange={handleFieldChange}
                    type='password'
                />
            </Fieldset>

            <div style={{ marginBottom: theme.spacing(3) }} >
                Нажимая на кнопку зарегистрироваться, вы автоматически соглашаетесь <br /> на
                <a style={{ textDecoration:'none',color: 'rgba(72,139,255,1)' }}  href='/politics.docx' >&nbsp;обработку персональных данных</a>
            </div>

            <Button
                type='submit'
                width='100%'
                disabled={disabledButton() || isFetching}
            >
                Зарегистрироваться
            </Button>
        </form>
    )
};
