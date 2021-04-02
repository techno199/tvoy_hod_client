import { useEffect, useContext, useState, useRef }      from 'react';
import { useParams, useHistory }                        from 'react-router-dom';
import { AdminUserContext }                             from 'context/AdminUserContext/AdminUserContext';
import { useFormik }                                    from 'formik';
import * as Yup                                         from 'yup';
import { errorHandler }                                 from 'utils/errorHandler';
import { callToast }                                    from 'utils/callToast';

export const useHookForSchool = ({ setReadonly }) => {
    const { idSchool } = useParams();
    const history = useHistory();
    const { getDataSchoolCard, getResponsiblesForSchool, regions, getMunicipal, newSchoolCard,
        editSchoolCard, onChangeSearchFieldInn, getMuinicipalOktmo } = useContext(AdminUserContext);

    const optionsType = useRef([{id: 1, title: 'Школа'}, {id: 2, title: 'ССУЗ'}, {id: 3, title: 'ДО'}]);

    const [municipalOptions, setMunicipalOptions] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [innDadataOptions, setInnDadataOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [dialogDuplicate, setDialogDuplicate] = useState(false);
    const [initialValue, setInitialValue] = useState({
        inn: null,
        kpp: '',
        short_name: '',
        long_name: '',
        fioDirector: '',
        phone: '',
        web_address: '',
        email: '',
        region: null,
        municipal: null,
        legal_address: '',
        responsibles: {},
        type: null
    });

    const validationSchema = {
        inn: Yup.object()
            .required("Обязательно для заполнения")
            .nullable(),
        municipal: Yup.object()
            .required("Обязательно для заполнения")
            .nullable(),
        kpp: Yup.string()
            .length(9, 'КПП должен состоять из 9 цифр'),
        short_name: Yup.string()
            .required("Обязательно для заполнения"),
        long_name: Yup.string()
            .required("Обязательно для заполнения"),
        email: Yup.string()
            .email("Невалидный email"),
        legal_address: Yup.string()
            .required("Обязательно для заполнения"),
        type: Yup.object()
            .required("Обязательно для заполнения")
            .nullable()
    };

    useEffect(() => {
        if(idSchool) {
            (async function() {
                try {
                    const data = await getDataSchoolCard(idSchool);
                    const dataResponsibles = await getResponsiblesForSchool(idSchool);

                    if(!data) {
                        history.push('/admin/school');
                        return;
                    }
                    setInitialValue({
                        inn: data.legal_inn ? {id: data.legal_inn, title: data.legal_inn} : null,
                        kpp: data.legal_kpp || '',
                        short_name: data.short_name,
                        long_name: data.name,
                        fioDirector: data.director_fio || '',
                        phone: data.phone || '',
                        web_address: data.web_address || '',
                        email: data.email || '',
                        region: data.municipal_unit?.region || null,
                        municipal: data?.municipal_unit ? {id: data.municipal_unit.id, title: data.municipal_unit.title } : null,
                        legal_address: data.legal_address,
                        type: optionsType.current.find(i => i.id === data.type),
                        responsibles: {
                            ...fillResponsible(dataResponsibles.list, data.responsibles)
                        }
                    });
                    setLoadingPage(false)
                } catch (err) {
                    setLoadingPage(false);
                    throw err;
                }
            })();
        }
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(regions.length && !municipalOptions.length && initialValue.region) {
            getMunicipal(initialValue.region.id).then(data => {
                setMunicipalOptions(data);
            })
        }
        //eslint-disable-next-line
    },[regions, initialValue.region]);

    const formik = useFormik({
        initialValues: initialValue,
        enableReinitialize: true,
        validationSchema: Yup.object(validationSchema),
        onSubmit: values => {
            if(idSchool) {
                editSchollData()
            } else {
                addNewSchoolCard()
            }
        }
    });

    function fillResponsible (list, selectedRes) {
        const obj = {};
        if(list.length) {
            const ids = selectedRes.map(i => i.id);
            list.forEach(item => {
                obj[item.id] = ids.includes(item.id)
            })
        }

        return obj;
    }

    //обработчик на чекбоксы
    const handleChange = (event) => {
        formik.setValues(prev => ({
            ...prev,
            responsibles: {
                ...prev.responsibles,
                [event.target.name]: event.target.checked
            }
        }))
    };

    //если что-то выбрали в поле регион
    const selectRegionHandler = async (regionId) => {
        getMunicipal(regionId).then(data => {
            formik.setValues(prev => ({
                ...prev,
                municipal: null,
                //legal_address: ''
            }));
            setMunicipalOptions(data)
        })
    };

    //если что-то выбрали в поле муниципальное образование
    const selectMunicipalHandler = () => {
        formik.setValues(prev => ({
            ...prev,
            //legal_address: ''
        }));
    };

    //выбрали в поле ИНН
    const selectInnHandler = (val) => {
       //если школа нашлась в дадата
        formik.setValues(prev => ({
            ...prev,
            kpp: val?.data?.kpp || '',
            short_name: val?.data?.name?.short_with_opf || '',
            long_name: val?.data?.name?.full_with_opf || '',
            fioDirector: val?.data?.management?.name || '',
            phone: val.data.phones || '',
            email: val.data.emails || '',
            legal_address: val?.data?.address?.unrestricted_value || ''
        }));

        if(val.data.oktmo) {
            getMuinicipalOktmo(val.data.oktmo).then(territory => {
                formik.setValues(prev => ({
                    ...prev,
                    region: territory?.region || null,
                    municipal: territory || null,
                }));

                if(territory?.region?.id) {
                    getMunicipal(territory.region.id).then(data => {
                        setMunicipalOptions(data);
                    })
                }
            });
        }
    };

    //обработчик для селектов фильтра
    const handleValueSelect = (name) => (_, val) => {
        if(name === 'region') selectRegionHandler(val.id);
        if(name === 'inn') selectInnHandler(val);
        if(name === 'municipal') selectMunicipalHandler();
        if(name === 'inn' && val.duplicate) return;
        formik.setFieldValue(name, val);
    };

    const idsResponsibleForBody = (responsibles) => {
        const arr = [];
        if(Object.keys(responsibles).length) {
            Object.entries(responsibles).forEach(([key, value]) => {
                if(value) {
                    arr.push(key)
                }
            })
        }

        return arr;
    };

    //поиск по 10 символам ИНН
    const searchHandler = async (event) => {
        if(event.target.length !== 10 && innDadataOptions.length) {
            setInnDadataOptions([])
        }
        try {
            if(event.target.value.length === 10) {
                let myArr;
                    //  ищем школы в дадата
                    const data = await onChangeSearchFieldInn(event, {setLoadingSearch});
                    myArr = data.data.suggestions.map(item => ({
                        ...item,
                        id: item.data.inn,
                        title: item.data.inn,
                        name: item.data.name.short_with_opf
                    }));
                setInnDadataOptions(myArr)
            }
        } catch (err) {
            throw err;
        }
    };

    function bodyForSchool() {
        const body = {
            "email": formik.values.email.toLowerCase(),
            "short_name": formik.values.short_name,
            "name": formik.values.long_name,
            "phone": formik.values.phone,
            "legal_inn": formik?.values?.inn?.title,
            "web_address": formik.values.web_address,
            "director_fio": formik.values.fioDirector,
            "legal_kpp": formik.values.kpp,
            "municipal_unit_id": formik?.values?.municipal?.id,
            "type": formik?.values?.type?.id
        };

        if(idSchool) {
            body["responsible_ids"] = idsResponsibleForBody(formik.values.responsibles);
            body["address_fact"] = formik.values.legal_address;
        } else {
            body["legal_address"] = formik.values.legal_address;
        }
        return body;
    }

    //добавление карточки школы
    async function addNewSchoolCard () {
        try {
            setLoading(true);
            const res = await newSchoolCard(bodyForSchool());
            if(res.result === 'created') {
                callToast({message: 'Учреждение успешно создано'});
                formik.resetForm();
                history.push(`/admin/school_card/${res.educational_institution.id}`)
            } else if(res.result === 'exist') {
                setDialogDuplicate({id: res.educational_institution.id, name: res.educational_institution.short_name});
                formik.resetForm();
                setInnDadataOptions([]);
            }
            setLoading(false);
        } catch (err) {
            errorHandler(err);
            setLoading(false);
            throw err
        }
    }

    //редактирование карточки школы
    async function editSchollData () {
        try {
            setLoading(true);
            const res = await editSchoolCard(idSchool, bodyForSchool());
            if(res.id) {
                callToast({message: 'Данные успешно отредактированы'});
                setInitialValue(formik.values);
                setReadonly(true);
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

    return {
        loading,
        loadingPage,
        formik,
        handleChange,
        handleValueSelect,
        initialValue,
        searchHandler,
        loadingSearch,
        innDadataOptions,
        regions,
        municipalOptions,
        dialogDuplicate,
        setDialogDuplicate,
        optionsType
    }
};