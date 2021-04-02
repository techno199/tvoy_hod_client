import { useState, useRef,
    useContext, useEffect }                     from 'react';
import { useParams, useHistory }                from 'react-router-dom';
import { AdminUserContext }                     from 'context/AdminUserContext/AdminUserContext';
import { getBirthDateReverse, getBirthDate }    from 'utils/dateFormat';
import { callToast }                            from 'utils/callToast'
import { TEST_POSITIONS }                       from '../../CONSTANTS';
import { getAdminPage }                         from 'utils/adminPermissions';
import { useFormik }                            from 'formik';
import { errorHandler }                         from 'utils/errorHandler';
import * as Yup                                 from 'yup';

export const useHookForCreateNewUser = ({ adminPage, setAdminPage, setReadonly }) => {
    const { idUser } = useParams();
    const history = useHistory();
    const { createNewUser, editUser, getDataUserCard, roles } = useContext(AdminUserContext);

    const gendersOptions = useRef([
        {id: 0, title: 'Мужской'},
        {id: 1, title: 'Женский'}
    ]);

    const courseOptions = useRef([
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
        {id: 4, title: '4'}
    ]);

    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [state, setState] = useState({
        schoolOptions:  [],
    });

    const [initialValue, setInitialValue] = useState({
        last_name: '',
        first_name: '',
        middle_name: '',
        user_status: '',
        nickname: '',
        birth_date: '',
        gender: null,
        phone: '',
        email: '',
        role: null,
        roleAdmin: null,
        grade: null,
        letter: null,
        position: null,
        course: null,
        is_responsible: false,
        region: null,
        municipal: null,
        school_address: null,
        password: '',
        repeatPassword: ''
    });

    const regExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    const validationSchema = {
        last_name: Yup.string()
            .required("Обязательно для заполнения"),
        first_name: Yup.string()
            .required("Обязательно для заполнения"),
        birth_date: Yup.string()
            .min(10, "Введите дату полностью")
            .required("Обязательно для заполнения")
            .test({
                message: 'Невалидная дата',
                test: (value) => {
                    let bool;
                    if(!value || value.length < 10) {
                        bool = false
                    } else if(+value.split('.')[2] > new Date().getFullYear()) {
                        bool = false
                    } else {
                        bool = regExp.test(value)
                    }
                    return bool;
                },
            }),
        gender: Yup.object()
            .required("Обязательно для заполнения")
            .nullable(),
        phone: Yup.string().min(16, "Телефон набран не полностью"),
        email: Yup.string()
            .email("Невалидный email")
            .required("Обязательно для заполнения"),
        role: Yup.object()
            .required("Обязательно для заполнения")
            .nullable(),
        grade: Yup.object().when('role', (role, _) => {
            return role?.id === 1 ?
                Yup.object().required("Обязательно для заполнения").nullable() :
                Yup.object().nullable();
        }),
        position: Yup.object().when('role', (role, _) => {
            return role?.id === 2 ?
                Yup.object().required("Обязательно для заполнения").nullable() :
                Yup.object().nullable();
        }),
        course: Yup.object().when('role', (role, _) => {
            return role?.id === 9 ?
                Yup.object().required("Обязательно для заполнения").nullable() :
                Yup.object().nullable();
        }),
        school_address: Yup.object()
            .required("Обязательно для заполнения")
            .nullable(),
        password: !idUser ?
            Yup.string().min(8, "Минимум 8 символов").required("Обязательно для заполнения") :
            Yup.string().min(8, "Минимум 8 символов"),
        repeatPassword: !idUser ?
            Yup.string().oneOf([Yup.ref("password")], "Пароли не совпадают").required("Обязательно для заполнения") :
            Yup.string().when('password', (password, _) => {
                return password ?
                    Yup.string().oneOf([Yup.ref("password")], "Пароли не совпадают").required("Обязательно для заполнения"):
                    Yup.string()
            })
    };

    const validationSchemaForCrm = {
        last_name: Yup.string()
            .required("Обязательно для заполнения"),
        first_name: Yup.string()
            .required("Обязательно для заполнения"),
        email: Yup.string()
            .email("Невалидный email")
            .required("Обязательно для заполнения"),
        role: Yup.object()
            .required("Обязательно для заполнения")
            .nullable(),
        password: !idUser ?
            Yup.string().min(8, "Минимум 8 символов").required("Обязательно для заполнения") :
            Yup.string().min(8, "Минимум 8 символов"),
        repeatPassword: !idUser ?
            Yup.string().oneOf([Yup.ref("password")], "Пароли не совпадают").required("Обязательно для заполнения") :
            Yup.string().when('password', (password, _) => {
                return password ?
                    Yup.string().oneOf([Yup.ref("password")], "Пароли не совпадают").required("Обязательно для заполнения"):
                    Yup.string()
            })
    };

    useEffect(() => {
        if(idUser && roles.length) {
            (async function() {
                try {
                    const data = await getDataUserCard(idUser);

                    if(!data) {
                        history.push('/admin/users_bg');
                        return;
                    }
                    setAdminPage(getAdminPage(data.role));
                    setInitialValue({
                        last_name: data.name.last || '',
                        first_name: data.name.first || '',
                        middle_name: data.name.middle || '',
                        user_status: '',
                        nickname: data.nickname || '',
                        birth_date: getBirthDate(data.birth_date),
                        gender: gendersOptions.current.find(i => i.id === data.gender),
                        phone: data.phone ? dataPhone(data.phone) : '',
                        email: data.email,
                        role: roleForSelect(getAdminPage(data.role), data),
                        roleAdmin: null,
                        grade: data.educationalInstitutionInfo.grade
                            ? {id: data.educationalInstitutionInfo.grade, title: data.educationalInstitutionInfo.grade.toString()}
                            : null,
                        letter: data.educationalInstitutionInfo.letter
                            ? {id: data.educationalInstitutionInfo.letter, title: data.educationalInstitutionInfo.letter}
                            : null,
                        position: data.educationalInstitutionInfo.position !== null && getCurrentRole(data.role).includes(2)
                            ? TEST_POSITIONS.find(i => i.id === data.educationalInstitutionInfo.position)
                            : null,
                        course: data.educationalInstitutionInfo.course
                            ? {id: data.educationalInstitutionInfo.course, title: data.educationalInstitutionInfo.course.toString() }
                            : null,
                        is_responsible: data.is_responsible,
                        region: data.municipal_unit?.region || null,
                        municipal: data?.municipal_unit ? {id: data.municipal_unit.id, title: data.municipal_unit.title } : null,
                        schoolOptions:  getFirstShoolData(data) ? [getFirstShoolData(data)] : [],
                        school_address: getFirstShoolData(data),
                        password: '',
                        repeatPassword: ''
                    });
                    setLoadingPage(false)
                } catch (err) {
                    setLoadingPage(false);
                    throw err;
                }
            })();
        }
        //eslint-disable-next-line
    }, [roles]);

    const formik = useFormik({
        initialValues: initialValue,
        enableReinitialize: true,
        validationSchema: Yup.object(adminPage ? validationSchemaForCrm : validationSchema),
        onSubmit: values => {addNewUserOrEditUser()}
    });

    //обработчик для селектов фильтра
    const handleValueSelect = (name) => (_, val) => {
        if(name === 'role') {
            setState({schoolOptions: []});
            if(([1,2].includes(val.id) && formik.values.role.id === 9) ||
               (val.id === 9 && [1,2].includes(formik.values.role.id))) {
                formik.setFieldValue('school_address', null);
            }
            formik.setFieldValue('course', null);
            formik.setFieldValue('position', null);
            formik.setFieldValue('grade', null);
            formik.setFieldValue('letter', null);
        }
        formik.setFieldValue(name, val)
    };

    //обработчик на чекбоксы
    const handleChange = (event) => {
        formik.setFieldValue(event.target.name, event.target.checked)
    };

    const bodyCreateUser = () => {
        return {
            "admin_user": {
                "email": formik.values.email.toLowerCase(),
                "name": {
                    "first_name": formik.values.first_name,
                    "last_name": formik.values.last_name,
                    "middle_name": formik.values.middle_name
                },
                "educational_institution_info": {
                    "grade": formik.values?.grade?.title || null,
                    "letter": formik.values?.letter?.title || null,
                    "post": formik.values?.position?.id === 0 || formik.values?.position?.id ? formik.values?.position?.id : null,
                    "course": formik.values?.course?.id  || null,
                },
                "nickname": formik.values.nickname,
                //eslint-disable-next-line
                "phone": formik.values.phone.replace(/[\+\-\)\(]/g, ''),
                "role": [formik.values?.role?.id],
                "birth_date": getBirthDateReverse(formik.values.birth_date),
                "gender": formik.values.gender.id,
                "plain_password": formik.values.password,
                "municipal_unit_id": formik.values?.municipal?.id || null,
                "educational_institution_id": formik.values?.school_address?.id || null,
                "is_responsible": formik.values.is_responsible
            }
        }
    };

    const bodyCreateUserForCrm = () => {
        return {
            "admin_user": {
                "email": formik.values.email.toLowerCase(),
                "name": {
                    "first_name": formik.values.first_name,
                    "last_name": formik.values.last_name,
                    "middle_name": formik.values.middle_name
                },
                "educational_institution_info": {
                    "grade":  null,
                    "letter":  null,
                    "post": null,
                    "course": null
                },
                "nickname": '',
                "phone": '',
                "role": [formik.values?.role?.id],
                "birth_date": '',
                "gender": null,
                "plain_password": formik.values.password,
                "municipal_unit_id": null,
                "educational_institution_id":  null,
                "is_responsible": false
            }
        }
    };

    async function addNewUserOrEditUser () {
        try {
           setLoading(true);
           const res = !idUser
               ? await createNewUser(adminPage ? bodyCreateUserForCrm() : bodyCreateUser())
               : await editUser(idUser, adminPage ? bodyCreateUserForCrm() : bodyCreateUser());
           if(res.result) {
               callToast({message: !idUser ? 'Новый пользователь успешно добавлен' : 'Данные успешно отредактированы'});
               if(!idUser) {
                   formik.resetForm();
                   setTimeout(() => {
                       history.push(`/admin/users_card/${res.user_id}`)
                   },0);
               } else {
                   setInitialValue(formik.values);
                   setReadonly(true)
               }
           } else {
               const errorsMessage = Object.values(res.errors).join(',');
               callToast({
                   message: `Ошибка: ${errorsMessage}`,
                   type: 'error'
               });
           }
           setLoading(false);
        } catch (err) {
            errorHandler(err);
            setLoading(false);
            throw err
        }
    }

    function getFirstShoolData (data) {
        if(!Array.isArray(data.educational_institution)) {
            return {
                id: data.educational_institution.id,
                title: data.educational_institution.short_name + ', ' + data.educational_institution.address.replace(/[\d]{6},*/g, '')
            }
        }
        return  null
    }

    function getCurrentRole (roles) {
        return roles.map(i => i.role_id)
    }

    function roleForSelect (availabilityAdmin, data) {
        if(availabilityAdmin) {
            return {...data.role[0], id: data.role[0].role_id }
        } else {
            return  roles.find(i => i.id === getCurrentRole(data.role)[0])
        }
    }

    function dataPhone (phone) {
        return '+7(' + phone.slice(1,4) + ')' + phone.slice(4,7) + '-' + phone.slice(7,9) + '-' + phone.slice(9,11)
    }

    return {
        state,
        setState,
        handleValueSelect,
        handleChange,
        gendersOptions,
        addNewUserOrEditUser,
        formik,
        loading,
        loadingPage,
        initialValue,
        courseOptions
    }
};