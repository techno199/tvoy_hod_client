import React, { useContext }                            from 'react';
import { useHistory, useLocation }                      from 'react-router-dom';
import { Fade }                                         from '@material-ui/core';
import TablesAll                                        from 'components/Admin/TablesAll/TablesAll';
import FilterUsers                                      from 'components/Admin/FilterBlocks/FilterUsers';
import { useHookTable }                                 from 'HOC/useHook/useHookTable';
import { callToast }                                    from 'utils/callToast';
import { AdminUserContext }                             from 'context/AdminUserContext/AdminUserContext';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import funcPermissions                                  from 'HOF/funcPermissions/funcPermissions';
import { useStyles }                                    from './style';

const UsersAdmin = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { getUsers, users } = useContext(AdminUserContext);
    const { getPermissions } = useContext(AuthContext);

    const { loading, error, idPage, nav, // собственных хук для загрузки данных таблицы и пагинации
        selected, handleSelectAllClick,
        handleClick, handleChangePagination,
        handleChangeSelectPagination } = useHookTable(getUsers, {'has_admin_role': 1});

    const fio = (name) => {
        return `${name.last ? name.last : ''} ${name.first ? name.first : ''} ${name.middle ? name.middle : ''}`
    };

    const getRoles = (roles) => {
        const roleArr = roles.map(item => (
            item.title
        ));

        return roleArr.join(', ')
    };

    const nameThead = ['ФИО', 'Роль'];

    const helperTdrender = (data) => { //возвращает массив в нужном порядке для расположения ячеек таблицы
        return  [
            <span>{fio(data.name)}</span>,
            <span>{getRoles(data.role)}</span>,
        ];
    };

    const clickOnRow = (data) => { //клик на строку таблицы
        if(getPermissions().includes('admin_crm_users_show')) {
            history.push({
                pathname: `/admin/users_card/${data.id}`,
                state: {
                    link: 'admin',
                    url: location.pathname + location.search
                }
            })
        } else {
            callToast({
                message: `Ошибка: У Вас нет прав для просмотра карточки пользователя`,
                type: 'error'
            });
        }
    };

    return (
        <Fade in timeout={800}>
            <div className={classes.usersAdmin}>
                <FilterUsers
                    crm
                    title={'Пользователи CRM'}
                />

                <TablesAll
                    total_count={users.total_count}
                    error={error}
                    loading={loading}
                    handleSelectAllClick={handleSelectAllClick}
                    handleClick={handleClick}
                    nameThead={nameThead}
                    helperTdrender={helperTdrender}
                    selected={selected}
                    dataTbody={users?.list || []}
                    page={+idPage}
                    selectPage={nav.selectPage}
                    handleChangePagination={handleChangePagination}
                    handleChangeSelectPagination={handleChangeSelectPagination}
                    clickOnRow={clickOnRow}
                    selectedPage={nav.selectPage}
                />
            </div>
        </Fade>
    )
};

export default  funcPermissions(UsersAdmin, 'admin_crm_users_list');
