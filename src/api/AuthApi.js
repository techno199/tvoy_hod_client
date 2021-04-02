import { instance } from "./instance"



export const sendEmailForCode = async params => {
    const { email } = params
    const formData = new FormData()
    formData.append('email', email || '')

    const response = await instance
        .post(
            '/api/auth/email/send-code',
            { email }
        )
    return response.data

}

export const getOldData = async params => {
    const { email, code } = params

    const formData = new FormData()

    formData.append('email', email || '')
    formData.append('code', code || '')

    const response = await instance
        .post(
            '/api/auth/register/form/old',
            formData
        )
    return response.data

}

export const sendPhoneCode = async (params) => {

    const { email, code } = params

    const formData = new FormData()
    formData.append('email', email || '')
    formData.append('code', code || '')

    const response = await instance
        .post(
            '/api/auth/email/check-code',
            formData
        )
    return response.data

}

export const postRegistration = async (params) => {

    const {
        email,
        code,
        name,
        surname,
        patronymic,
        grade,
        char,
        post,
        nick,
        phone,
        role,
        course,
        birthDate,
        gender,
        password,
        educational_institution_id
    } = params

    const clearPhone = phone ? phone.replace(/\D/gmi, '') : ''
    const clearPhoneCopy = String(clearPhone)

    let isPhoneClear = true



    try {
        isPhoneClear = !!clearPhoneCopy.replace(/7/, '').length
    } catch {

    }

    const formData = new FormData()
    formData.append('email', email)
    formData.append('code', code)
    formData.append('user_register[name][first_name]', name)
    formData.append('user_register[name][last_name]', surname)
    formData.append('user_register[name][middle_name]', patronymic)
    formData.append('user_register[school][class]', grade)
    formData.append('user_register[school][char]', char)
    formData.append('user_register[school][post]', post)
    formData.append('user_register[nickname]', nick)
    formData.append('user_register[phone]', isPhoneClear ? clearPhone : '')
    formData.append('user_register[role]', role)
    formData.append('user_register[birth_date]', birthDate)
    formData.append('user_register[gender]', gender)
    formData.append('user_register[plain_password]', password)
    formData.append('user_register[educational_institution_id]', educational_institution_id)

    const response = await instance
        .post(
            '/api/auth/register/form',
            {
                email,
                code,
                user_register: {
                    name: {
                        first_name: name,
                        last_name: surname,
                        middle_name: patronymic,
                    },
                    educational_institution_info: {
                        grade,
                        letter: char,
                        post: post,
                        course: course,
                    },
                    educational_institution_id: educational_institution_id,
                    nickname: nick,
                    phone: clearPhone,
                    role,
                    birth_date: birthDate,
                    gender,
                    plain_password: password
                }
            }
        );
    return response.data

};

export const restoreSendEmailForCode = async params => {
    const { email } = params

    const response = await instance
        .post(
            '/api/password-restore/send-code',
            { email }
        );
    return response.data
};

export const restoreSendPhoneCode = async (params) => {
    const { email, code } = params;

    const response = await instance
        .post(
            '/api/password-restore/check-code',
            { email, code }
        );
    return response.data
};

export const restoreNewPassword = async (params) => {

    const { email, code, new_password } = params


    const response = await instance
        .post(
            '/api/password-restore/new',
            { email, code, new_password }
        )
    return response.data

}