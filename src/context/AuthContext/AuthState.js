import { instance } from 'api/instance';
import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

const AuthState = ({ children }) => {
    let clearTime;
    const stopGetSert = React.useRef(false);
    const [loadingSert, setLoadingSert] = React.useState(true);
    const initialState = {
        id: null,
        email: null,
        nickname: null,
        phone: null,
        birth_date: null,
        gender: undefined,
        role: undefined,
        school: {
            char: null,
            class: null,
            position: null
        },
        name: {
            last: null,
            first: null,
            middle: null
        },
        certificate: null,
        isAuth: 2,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const getMe = async () => { // список всех ролей, какие существуют
        if(localStorage.getItem('JWT')) {
            try {
                let response = await instance.get('/api/users/me');
                if (response?.data) {
                    dispatch({
                        type: 'LOGINED',
                        payload: {
                            ...response.data,
                            currentDate: response.headers.date
                        }
                    });
                    return response.data
                } else {
                    dispatch({ type: 'LOGIN_ERROR' })
                }
            } catch (e) {
                dispatch({ type: 'LOGIN_ERROR' })
            }
        } else {
            dispatch({ type: 'LOGIN_ERROR' })
        }
    };

    const logout = () => dispatch({ type: 'LOGOUT', payload: initialState });

    const postDataForCertificate = async (data) => {
        let response = await instance.post('/api/certs/add', { ...data });
        if (response.data.result) dispatch({ type: 'SET_SERTIFICATE', payload: response.data });
        return response.data
    };

    const getCertificate = async () => {
        let response = await instance.get('/api/certs/get');

        if (response?.data) {
            dispatch({ type: 'SET_SERTIFICATE', payload: response.data })
        }

        if(response?.data?.cert?.approve === null && !localStorage.getItem('timeCert')) {
            localStorage.setItem('timeCert', new Date().getMinutes().toString());
            setTimeout(() => {
                getCertificate();
                stopGetSert.current = true;
            }, 5 * 60 * 1000)
        } else if(response?.data?.cert?.approve === null && localStorage.getItem('timeCert') && !stopGetSert.current) {
            const timeStorage = localStorage.getItem('timeCert');
            const currenTime = new Date().getMinutes().toString();
            const deff = currenTime - timeStorage;
            let result;

            if(deff >= 0) {
                result = (5 - deff) * 60 * 1000
            } else {
                result = 5 - (60 + deff) * 60 * 1000
            }

            setTimeout(() => {
                getCertificate();
                stopGetSert.current = true;
            }, result)
        } else if(response?.data?.cert?.approve !== null && localStorage.getItem('timeCert')) {
            localStorage.removeItem('timeCert');
        }
        return response.data
    };

    const login = async data => {
        let response = await instance
            .post(
                '/api/auth/login',
                { ...data }
            );
        if (response?.data) {
            if (response?.data?.token) {
                localStorage.setItem('JWT', response.data.token)
            }
        } else {
            dispatch({ type: 'LOGIN_ERROR', payload: response.data })
        }
        return response.data
    };

    const editUser = async (objData) => {
        try {
            const res = await instance.post('/api/users/edit', objData);
            dispatch({type: 'UPDATE_USER', payload: res.data})
        } catch (err) {
            throw err;
        }
    };

    const onChangeSearchField = (event, {setLoadingSearch, setState, params = {}}) => {
        if(clearTime) clearTimeout(clearTime);
        const { value } = event.target;

        clearTime = setTimeout(() => {
            if(value.length > 0) {
                setLoadingSearch(true);
                instance.get(`/api/educational-institutions-search`, {
                    params: {
                        q: value.trim(),
                        ...params
                    }
                }).then((data) => {
                    setLoadingSearch(false);
                    let arr = [];
                    if(!Array.isArray(data.data) && data.data.name.includes(value)) {
                        arr.push(data.data)
                    } else if (Array.isArray(data.data)) {
                        arr = arr.concat(data.data);
                        arr = arr.map(item => {
                            const title = `${item.name}, ${item.address.replace(/[\d]{6},*/g, '')}`;
                            return {
                                id: item.id,
                                title
                            }
                        })
                    }

                    setState(prev => ({...prev, schoolOptions: arr}));

                }).catch(err => {
                    setLoadingSearch(false);
                    setState(prev => ({...prev, schoolOptions: []}));
                    throw err
                })
            }
        }, 1000)
    };

    const checkingOldPassword = async (body) => {
        try {
            const res = await instance.post('/api/users/password/check-correct', body);
            return res.data.result;
        } catch (err) {
            throw err;
        }
    };

    const editPassword = async (body) => {
        try {
            await instance.post('/api/users/change-password', body);
        } catch (err) {
            throw err;
        }
    };

    const getPermissions = (roles) => {
        if(roles || state.role) {
            let perm = (roles ? roles : state.role).map(item => {
                return item.permissions
            });

            return Array.from(new Set(perm.flat().map(item => item.sys_name)));
        }
    };

    return (
        <AuthContext.Provider value={{
            getMe,
            login,
            postDataForCertificate,
            getCertificate,
            logout,
            editUser,
            onChangeSearchField,
            isAuth: state.isAuth,
            name: state.name,
            certificate: state.certificate,
            state,
            loadingSert,
            setLoadingSert,
            checkingOldPassword,
            editPassword,
            getPermissions,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthState;