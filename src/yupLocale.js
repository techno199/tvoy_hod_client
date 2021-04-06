import * as yup from 'yup';

export const YUP_REQUIRED_LABEL = 'Поле необходимо заполнить';

yup.setLocale({
    string: {
        required: YUP_REQUIRED_LABEL,
        min: ({ min }) => `Минимальная длина - ${min} символов`,
        max: ({ max }) => `Максимальная длина - ${max} символов`,
        email: 'Введите корректный email'
    }
})