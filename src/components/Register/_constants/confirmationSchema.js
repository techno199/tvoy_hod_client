import * as yup from 'yup';
import { YUP_REQUIRED_LABEL } from 'yupLocale';

export const CONFIRMATION_SCHEMA = yup.object().shape({
    pin: yup.number().required(YUP_REQUIRED_LABEL)
})