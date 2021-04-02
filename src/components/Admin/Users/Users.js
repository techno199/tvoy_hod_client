import React, { useContext }                            from 'react';
import { useHistory, useLocation }                      from 'react-router-dom';
import { Fade }                                         from '@material-ui/core';
import TablesAll                                        from 'components/Admin/TablesAll/TablesAll';
import FilterUsers                                      from 'components/Admin/FilterBlocks/FilterUsers';
import { useHookTable }                                 from 'HOC/useHook/useHookTable';
import funcPermissions                                  from 'HOF/funcPermissions/funcPermissions';
import { AdminUserContext }                             from 'context/AdminUserContext/AdminUserContext';
//import { CheckedIcon }                                  from 'svgComponents/CheckedIcon';
//import { RemoveIcon }                                   from 'svgComponents/RemoveIcon';
import { TEST_POSITIONS }                               from '../../../CONSTANTS';
import { getBirthDate }                                 from 'utils/dateFormat';
import { callToast }                                    from 'utils/callToast'
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import { useStyles }                                    from './style';

const Users = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { getUsers, users } = useContext(AdminUserContext);
    const { getPermissions } = useContext(AuthContext);

    const { loading, error, idPage, nav, // собственных хук для загрузки данных таблицы и пагинации
        selected, handleSelectAllClick,
        handleClick, handleChangePagination,
        handleChangeSelectPagination } = useHookTable(getUsers, {'has_admin_role': 0});

    const fio = (name) => {
        return `${name.last ? name.last : ''} ${name.first ? name.first : ''} ${name.middle ? name.middle : ''}`
    };

    const getSchool = (school_data) => {
        if(Array.isArray(school_data)) {
            return 'Не указано'
        }

        return school_data.short_name
    };

    const getRoles = (roles) => {
        if(Array.isArray(roles)) {
            const roleArr = roles.map(item => (
                item.title
            ));

            return roleArr.join(', ')
        }
        return ''
    };

    const getPosition = (idPosition) => {
        if(typeof idPosition === 'number') {
            return TEST_POSITIONS.find(i => i.id === idPosition).title
        }

        return ''
    };

    const nameThead = ['ФИО', 'Дата рождения', 'Роль', //шапка таблицы
        'Образовательное учреждение', 'Класс', 'Должность'];

    const helperTdrender = (data) => { //возвращает массив в нужном порядке для расположения ячеек таблицы
        return  [
            <span>{fio(data.name)}</span>,
            <span>{getBirthDate(data.birth_date)}</span>,
            <span>{getRoles(data.role)}</span>,
            <span className={classes.school_data}>
                {getSchool(data.educational_institution)}
            </span>,
            <span>
                {data.educationalInstitutionInfo.grade || ''}
                {data.educationalInstitutionInfo.letter || ''}
            </span>,
            <span>{getPosition(data.educationalInstitutionInfo.position)}</span>,
        ];
    };

    const clickOnRow = (data) => { //клик на строку таблицы
        if(getPermissions().includes('admin_bp_users_show')) {
            history.push({
                pathname: `/admin/users_card/${data.id}`,
                state: {
                    link: 'bg',
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
            <div className={classes.users}>
                <FilterUsers title={'Пользователи БП'}/>

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

export default funcPermissions(Users, 'admin_bp_users_list');
