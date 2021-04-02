export const adminUserReducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return {
                ...state,
                users: action.payload
            };

        case 'GET_LIST_SCHOOL':
            return {
                ...state,
                schools: action.payload
            };

        case 'GET_ROLES':
            return {
                ...state,
                roles: action.payload,
            };

        case 'GET_REGIONS':
            return {
                ...state,
                regions: action.payload,
            };

        case 'GET_DATA_USER_CARD':
            return {
                ...state,
                userData: action.payload,
            };

        case 'GET_DATA_SCHOOL_CARD':
            return {
                ...state,
                schoolData: action.payload,
            };

        case 'GET_RESPONSIBLE_SCHOOL':
            return {
                ...state,
                responsible_school: action.payload,
            };

        default:
            return state;
    }
};