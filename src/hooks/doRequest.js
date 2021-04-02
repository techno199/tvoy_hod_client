import {callToast} from 'utils/callToast'

/**
 * @function doRequest
 * Обрабатывает запрос в ассинхронном режиме. 
 * Возвращает обьект
 * {
 *  data: {...} | null,
 *  errors: {...} | null
 * }
 * 
 * @param {Function} request - метод обращения к серверу запроса
 * @param {Object} [params] - тело запроса для метода
 * 
 */

export const doRequest = async (request, params) => {

    try {
        let response = await request(params)

        return ({
            data: response,
            errors: null,
            success: response?.result ?? true,
        })
    } catch (e) {
        callToast({
            message:  e?.response?.data?.error || e.message,
            type: 'error'
        });

        return ({
            data: null,
            errors: e?.response?.data?.error || e?.response?.data?.errors ,
            success: false,
            status: e?.response?.status
        })
    }
};
