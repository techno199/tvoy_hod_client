export const lkReducer = (state, action) => {
    switch(action.type) {

        case 'ADD_COMPLETED_TEST':
            return {
                ...state,
                passedTests: {
                    ...state.passedTests,
                    ...action.payload
                }
            };

        case 'COMPLETED_TESTS':
            return {
                ...state,
                passedTests: action.payload
            };

        case 'EDIT_CHALLENGE':
            return {
                ...state,
                passedTests: {
                    ...state.passedTests,
                    [action.payload.nameTest]: {
                        ...state.passedTests[action.payload.nameTest],
                        challenge: action.payload.challenge
                    }
                }
            };

        case 'CLEAR_TESTS':
            return {
                ...state,
                passedTests: {}
            };

        default:
            return state;
    }
};