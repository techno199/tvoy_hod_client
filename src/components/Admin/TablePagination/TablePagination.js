import React                            from 'react';
import {useParams}                      from 'react-router-dom';
import Pagination                       from '@material-ui/lab/Pagination';
import FormControl                      from '@material-ui/core/FormControl';
import Select                           from '@material-ui/core/Select';
import MenuItem                         from '@material-ui/core/MenuItem';
import { useStyles }                    from './style';

const TablePagination = ({ count, handleChangePagination, handleChangeSelectPagination, selectPage, total_users_count }) => {
    const classes = useStyles();
    const { idPage = '1' } = useParams();

    return (
        <div className={classes.wrapPagination}>
            <Pagination
                shape="rounded"
                count={count}
                page={+idPage}
                onChange={handleChangePagination}
                classes={{
                    root: classes.vp_pagRoot,
                    ul: classes.vp_ul
                }}
            />

            <span className={classes.infoGray}>
                Записи с {+idPage * selectPage - (selectPage - 1)}&nbsp;
                по {(+idPage * selectPage) < total_users_count ? (+idPage * selectPage) : total_users_count}&nbsp;
                из { total_users_count }
            </span>

            <div className={classes.selectPage}>
                <span className={classes.titleSelect}>строк</span>
                <FormControl variant="outlined" classes={{root: classes.myFormControl}} >
                    <Select
                        value={selectPage}
                        onChange={handleChangeSelectPagination}
                        classes={{
                            root: classes.vp_rootSelect
                        }}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
};

export default React.memo(TablePagination);