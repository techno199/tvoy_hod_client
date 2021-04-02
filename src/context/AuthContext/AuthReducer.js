export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGINED':
            return {
                ...state,
                ...action.payload,
                isAuth: 1
            };

        case 'LOGIN_ERROR':
            return {
                ...state,
                isAuth: 0
            };

        case 'SET_SERTIFICATE':
            return {
                ...state,
                certificate: { ...action.payload }
            };

        case 'LOGOUT':
            try {
                localStorage.removeItem('JWT')
            } catch {
                console.log('error')
            }
            return {
                ...action.payload,
                isAuth: 0
            };

        case 'UPDATE_USER':
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
