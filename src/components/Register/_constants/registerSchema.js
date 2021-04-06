import * as yup from 'yup';
import { YUP_REQUIRED_LABEL } from 'yupLocale';

export const REGISTER_SCHEMA = yup.object().shape({
    name: yup.string().max(25).required(YUP_REQUIRED_LABEL),
    surname: yup.string().max(25).required(YUP_REQUIRED_LABEL),
    email: yup.string().email().required(YUP_REQUIRED_LABEL),
    password: yup.string().min(8).required(YUP_REQUIRED_LABEL),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают').required(YUP_REQUIRED_LABEL),
    region: yup.object().nullable().required(YUP_REQUIRED_LABEL),
    university: yup.mixed().required(YUP_REQUIRED_LABEL)
})