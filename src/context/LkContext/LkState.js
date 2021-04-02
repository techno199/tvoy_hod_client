import React, { useReducer, useContext }        from 'react';
import { LkContext }                            from './LkContext';
import { lkReducer }                            from './LkReducer';
import { instance }                             from 'api/instance';
import {AuthContext}                            from '../AuthContext/AuthContext';

const LkState = ({ children }) => {
    const { getMe } = useContext(AuthContext);

    const initialState = {
        passedTests: {}
    };

    const [state, dispatch] = useReducer(lkReducer, initialState);

    //отправка результатов теста после прохождения
    const postResultTest = async (body) => {
        try {
            const result = await instance.post('/api/test/answers', body);
            const objResult = {
                [result.data.test_name] : {
                    ...result.data
                }
            };
            dispatch({type: 'ADD_COMPLETED_TEST', payload: objResult});
        } catch (err) {
            throw err;
        }
    };

    //получение пройденных тестов
    const completedTests = async () => {
        try {
            const result = await instance.get('/api/test/answers');
            if(result.data.total_count) {
                const objResult = {};
                result.data.list.forEach(item => {
                    objResult[item.test_name] = item
                });

                dispatch({type: 'COMPLETED_TESTS', payload: objResult})
            }
        } catch (err) {
            throw err
        }
    };

    const postIdVk = async (id) => {
        try {
            const result = await instance.post(`/api/users/set-vk_id/${id}`);
            if(result.data.result) {
                getMe();
            }
            return result.data
        } catch (err) {
            throw err;
        }
    };

    const editChallenge = async (body, nameTest) => {
        try {
            const result = await instance.patch(`/api/test/set-challenge`, body);
            if(result.data.result) {
                dispatch({
                    type: 'EDIT_CHALLENGE',
                    payload: {
                        challenge: body.challenge.slice(1),
                        nameTest
                    }
                })
            }
        } catch (err) {
            throw err;
        }
    };

    const clearTests = () => {
        if(Object.keys(state.passedTests).length) {
            dispatch({type: 'CLEAR_TESTS'})
        }
    };

    const becomeParticipant = async () => {
        try {
            const result = await instance.put(`/api/contest/participate/contest_2021`);
            console.log(result.data)
        } catch (err) {
            throw err;
        }
    };

    return (
        <LkContext.Provider value={{
            passedTests: state.passedTests,
            postResultTest,
            completedTests,
            postIdVk,
            editChallenge,
            clearTests,
            becomeParticipant
        }}>
            {children}
        </LkContext.Provider>
    )
};

export default LkState;