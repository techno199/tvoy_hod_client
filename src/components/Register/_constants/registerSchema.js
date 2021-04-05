import * as Yup from 'yup';

export const REGISTER_SCHEMA = Yup.object().shape({
    firstName: Yup.string()
        .min(4)
        .max(50)
        .required('Поле необходимо заполнить')
})