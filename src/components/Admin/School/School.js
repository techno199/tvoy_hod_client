import React, { useContext }                            from 'react';
import { useHistory, useLocation }                      from 'react-router-dom';
import { Fade }                                         from '@material-ui/core';
import TablesAll                                        from 'components/Admin/TablesAll/TablesAll';
import FilterSchool                                     from 'components/Admin/FilterBlocks/FilterSchool';
import { useHookTable }                                 from 'HOC/useHook/useHookTable';
import { AdminUserContext }                             from 'context/AdminUserContext/AdminUserContext';
import { callToast }                                    from 'utils/callToast';
import funcPermissions                                  from 'HOF/funcPermissions/funcPermissions';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import { useStyles }                                    from './style';

const School = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { schools, getSchools } = useContext(AdminUserContext);
    const { getPermissions } = useContext(AuthContext);

    const { loading, error, idPage, nav, // собственных хук для загрузки данных таблицы и пагинации
        selected, handleSelectAllClick,
        handleClick, handleChangePagination,
        handleChangeSelectPagination } = useHookTable(getSchools);

    const nameThead = ['Наименование краткое', 'Телефон', 'ФИО директора', //шапка таблицы
        'Регион', 'Муниципальное образование'];

    const helperTdrender = (data) => { //возвращает массив в нужном порядке для расположения ячеек таблицы
        return  [
            <span className={classes.nameSchool}>{data.short_name || ''}</span>,
            <span>{data.phone || ''}</span>,
            <span className={classes.director_fio}>{data.director_fio || ''}</span>,
            <span>{data?.municipal_unit?.region?.title || ''}</span>,
            <span>{data?.municipal_unit?.title || ''}</span>,
        ];
    };

    const clickOnRow = (data) => { //клик на строку таблицы
        if(getPermissions().includes('admin_school_view')) {
            history.push({
                pathname: `/admin/school_card/${data.id}`,
                state: {
                    url: location.pathname + location.search
                }
            })
        } else {
            callToast({
                message: `Ошибка: У Вас нет прав для просмотра карточки учреждений`,
                type: 'error'
            });
        }
    };

    return (
        <Fade in timeout={800}>
            <div className={classes.school}>
                <FilterSchool />

                <TablesAll
                    total_count={schools.total_count}
                    error={error}
                    loading={loading}
                    handleSelectAllClick={handleSelectAllClick}
                    handleClick={handleClick}
                    nameThead={nameThead}
                    helperTdrender={helperTdrender}
                    selected={selected}
                    dataTbody={schools?.list || []}
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

export default  funcPermissions(School, 'admin_school_list');
