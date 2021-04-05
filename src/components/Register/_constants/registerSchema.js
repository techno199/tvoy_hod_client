import * as yup from 'yup';

const MAXLENGTH = 'Максимальная длина - 25 символов';
const REQUIRED = 'Поле необходимо заполнить';
const EMAIL = 'Введите корректный email'

export const REGISTER_SCHEMA = yup.object().shape({
    name: yup.string().max(25, MAXLENGTH).required(REQUIRED),
    surname: yup.string().max(25, MAXLENGTH).required(REQUIRED),
    email: yup.string().email(EMAIL).required(REQUIRED)
})