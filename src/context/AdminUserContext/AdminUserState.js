import React, { useReducer, useState }  from 'react';
import { AdminUserContext }             from './AdminUserContext';
import { adminUserReducer }             from './AdminUserReducer';
import { instance }                     from 'api/instance';

const AdminUserState = ({ children }) => {
    let clearTime;

    const initialState = {
        users: {},
        schools: {},
        roles: [],
        regions: [],
        municipal: [],
        userData: {},
        schoolData: {},
        responsible_school: [],
    };

    const [state, dispatch] = useReducer(adminUserReducer, initialState,);
    const [noRoute, setNoRoute] = useState(null);

    const getUsers = async (id = 1, count = 10, params) => {
        try {
            const result = await instance.get(`/api/admin/users/list/${id}/${count}`, {params});
            dispatch({type: 'GET_LIST', payload: result.data})
        } catch (err) {
            throw err
        }
    };

    const getSchools =  async (id = 1, count = 10, params) => {
        try {
            const result = await instance.get(`/api/admin/educational-institution/list/${id}/${count}`, {params});
            dispatch({type: 'GET_LIST_SCHOOL', payload: result.data});
            return result.data.list;
        } catch (err) {
            throw err
        }
    };

    const getRoles = async () => {
        try {
            const result = await instance.get(`/api/admin/roles/list/1`);
            dispatch({type: 'GET_ROLES', payload: result.data.list})
        } catch (err) {
            throw err
        }
    };

    const getRegions = async () => {
        try {
            const result = await instance.get(`/api/territory/regions`);
            dispatch({type: 'GET_REGIONS', payload: result.data})
        } catch (err) {
            throw err
        }
    };

    const getMunicipal = async (id) => {
        try {
            const result = await instance.get(`/api/territory/municipal_units/${id}`);
            return result.data
        } catch (err) {
            throw err
        }
    };

    const getSchoolById = async (id) => {
        try {
            const result = await instance.get(`/api/school/${id}`);
            return result.data
        } catch (err) {
            throw err
        }
    };

    const getDataUserCard = async (id) => {
        try {
            const result = await instance.get(`/api/admin/users/show/${id}`);
            dispatch({type: 'GET_DATA_USER_CARD', payload: result.data});
            return result.data;
        } catch (err) {
            return false;
        }
    };

    const createNewUser = async (body) => {
        try {
            const result = await instance.post(`/api/admin/users/create`, body);
            return result.data;
        } catch (err) {
            throw err
        }
    };

    const editUser = async (id, body) => {
        try {
            const result = await instance.patch(`/api/admin/users/edit/${id}`, body);
            return result.data;
        } catch (err) {
            throw err
        }
    };

    const deleteUserCard = async (id) => {
        try {
            return await instance.delete(`/api/admin/users/remove/${id}`);
        } catch (err) {
            throw err;
        }
    };

    //получаем данные по карточке школы
    const getDataSchoolCard = async (id) => {
        try {
            const result = await instance.get(`/api/admin/educational-institution/${id}`);
            dispatch({type: 'GET_DATA_SCHOOL_CARD', payload: result.data});
            return result.data;
        } catch (err) {
            return false;
        }
    };
    // Получаем список ответственных за школу
    const getResponsiblesForSchool = async (id) => {
        try {
            const result = await instance.get(`/api/admin/educational-institution/possible-responsibles/${id}`);
            dispatch({type: 'GET_RESPONSIBLE_SCHOOL', payload: result.data});
            return result.data;
        } catch (err) {
            throw err
        }
    };

    const deleteSchoolCard = async (id) => {
        try {
            return await instance.delete(`/api/admin/educational-institution/${id}`);
        } catch (err) {
            throw err;
        }
    };

    const newSchoolCard = async (body) => {
        try {
            const result = await instance.put(`/api/admin/educational-institution/`, body);
            return result.data;
        } catch (err) {
            throw err
        }
    };

    const editSchoolCard = async (id, body) => {
        try {
            const result = await instance.post(`/api/admin/educational-institution/${id}`, body);
            return result.data;
        } catch (err) {
            throw err
        }
    };

    const onChangeSearchFieldInn = (event, {setLoadingSearch}) => {
        if(clearTime) clearTimeout(clearTime);
        const { value } = event.target;

        return new Promise ((resolve, reject) => {
            clearTime = setTimeout(() => {
                if(value.length === 10) {
                    setLoadingSearch(true);
                    instance.get(`/api/suggestions/by-inn/${value}`).then((data) => {
                        setLoadingSearch(false);
                        resolve(data)
                    }).catch(err => {
                        setLoadingSearch(false);
                        reject([]);
                        throw err
                    })
                }
            }, 1000)
        })
    };

    const getMuinicipalOktmo = async(oktmo) => {
        try {
            const data = await instance.get(`/api/territory/by-oktmo/${oktmo}`);
            return data.data;
        } catch (err) {
            throw err;
        }
    };

    return (
        <AdminUserContext.Provider value={{
            users: state.users,
            schools: state.schools,
            roles: state.roles,
            regions: state.regions,
            municipal: state.municipal,
            userData: state.userData,
            schoolData: state.schoolData,
            responsible_school: state.responsible_school,
            noRoute,
            setNoRoute,
            getUsers,
            getSchools,
            getRoles,
            getRegions,
            getMunicipal,
            getSchoolById,
            getDataUserCard,
            createNewUser,
            editUser,
            deleteUserCard,
            getDataSchoolCard,
            getResponsiblesForSchool,
            deleteSchoolCard,
            newSchoolCard,
            editSchoolCard,
            onChangeSearchFieldInn,
            getMuinicipalOktmo
        }}>
            {children}
        </AdminUserContext.Provider>
    )
};

export default AdminUserState;