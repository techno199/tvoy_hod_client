import { instance } from "./instance"

export const getRegions = async () => {
    try {
        return (await instance('/api/region-list')).data;
    } catch {
        return [];
    }
}

export const getUniversities = async (regionId) => {
    try {
        return (await instance(`/api/educational-institutions-from-region/${regionId}`)).data;
    } catch {
        return [];
    }
}

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
        name,
        surname,
        email,
        password,
        regionId,
        universityId,
        universityCustomName
    } = params

    const formData = new FormData()
    formData.append('email', email);
    formData.append('user_register[name][first_name]', name);
    formData.append('user_register[name][last_name]', surname);
    formData.append('user_register[plain_password]', password);
    formData.append('user_register[region]', regionId);
    formData.append('user_register[educational_institution_id]', universityId);
    formData.append('user_register[educational_institution_info]', universityCustomName);

    return (await instance.post('/api/auth/register/form', formData)).data;
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