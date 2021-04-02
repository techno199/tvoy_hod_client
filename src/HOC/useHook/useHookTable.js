import { useEffect, useState }                          from 'react';
import { useParams, useLocation, useHistory }           from 'react-router-dom';
import queryString                                      from 'query-string';

export const useHookTable = (fetchFunction, role_field) => {
    const history = useHistory();
    const { search, pathname } = useLocation();
    const { idPage = "1", countPage = 10 } = useParams();

    const [reload, setReload] = useState(false); //для принудительной загрузки данных
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [nav, setNav] = useState({
        selectPage:  countPage,
    });

    useEffect(() => { //загрузка данных для таблицы
        setLoading(true);
        let queryStringFilters = queryString.parse(search);
        const dopField = role_field ? role_field : {};
        (async function() {
            try{
                await fetchFunction(idPage, countPage, {...queryStringFilters, ...dopField});
                setError(false);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
        //eslint-disable-next-line
    }, [idPage, nav.selectPage, search, reload]);

    const handleSelectAllClick = (rows) => (event) => { //клик по чекбоксу в шапке таблицы
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => { // клик по чекбоксу(изменение массива в зависимости от выбранного значения)
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePagination = (event, value) => { //обработчик для пагинации
        const url = search
            ? `/${pathname.split('/')[1]}/${pathname.split('/')[2]}/${value}${countPage > 10 ? '/' + countPage : ''}${search}`
            : `/${pathname.split('/')[1]}/${pathname.split('/')[2]}/${value}${countPage > 10 ? '/' + countPage : ''}`;

        history.push(url);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    };

    const handleChangeSelectPagination = (event) => { //обработчик селекта пагинации
        const url = search
            ? `/${pathname.split('/')[1]}/${pathname.split('/')[2]}/1${event.target.value > 10 ? '/' + event.target.value : ''}${search}`
            : `/${pathname.split('/')[1]}/${pathname.split('/')[2]}/1${event.target.value > 10 ? '/' + event.target.value : ''}`;
        history.push(url);

        setNav({
            ...nav,
            selectPage: event.target.value,
        });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    };

    return {
        loading,
        error,
        idPage,
        selected,
        nav,
        setReload,
        handleSelectAllClick,
        handleClick,
        handleChangePagination,
        handleChangeSelectPagination,
    }
};