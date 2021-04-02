import {callToast} from './callToast';

export const errorHandler = (err) => {
    let errorMessage = '';
    const error = err.response?.data?.error;

    if(err?.response?.status === 400 && error) {
        function recursion(error) {
            if(typeof error === 'string') {
                errorMessage = error
            } else if(Array.isArray(error)) {
                error.forEach(item => {
                    if(typeof item === 'string') {
                        errorMessage += item
                    }
                })
            } else if (typeof error === 'object' && !Array.isArray(error)) {
                Object.values(error).forEach(item => {
                    if(typeof item === 'string') {
                        errorMessage += item
                    } else if(Array.isArray(item)) {
                        errorMessage += item.join(', ')
                    } else if(typeof item === 'object' && !Array.isArray(item))  {
                        return recursion(item)
                    }
                })
            }
        }

        recursion(error);
    } else {
        errorMessage = err.message;
    }

    callToast({
        message: `Ошибка: ${errorMessage}`,
        type: 'error'
    });
};