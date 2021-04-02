import React                            from 'react';
import Table                            from '@material-ui/core/Table';
import TableBody                        from '@material-ui/core/TableBody';
import TableCell                        from '@material-ui/core/TableCell';
import TableContainer                   from '@material-ui/core/TableContainer';
import TableHead                        from '@material-ui/core/TableHead';
import TableRow                         from '@material-ui/core/TableRow';
import Skeleton                         from '@material-ui/lab/Skeleton';
import Checkbox                         from '@material-ui/core/Checkbox';
import TablePagination                  from 'components/Admin/TablePagination/TablePagination';
import { useStyles }                    from './style';

const TablesAll = ({ nameThead, dataTbody, total_count, helperTdrender, handleSelectAllClick, handleClick, selected, loading, error, handleChangePagination, handleChangeSelectPagination, page, selectPage, clickOnRow, noSelected, nameSection, selectedPage }) =>  {
    const classes = useStyles();
    let countForRow = 0;
    let countForLevelThree = 0;

    const isSelected = !noSelected ? (name) => selected.indexOf(name) !== -1 : null;
    const rows = dataTbody || [];
    const count = Math.ceil(total_count / selectPage);

    return (
        <div>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            {
                                !noSelected ?
                                    <TableCell className={classes.cell_checkbox}>
                                        <Checkbox
                                            indeterminate={selected.length > 0 && selected.length < rows.length}
                                            checked={rows.length > 0 && selected.length === rows.length}
                                            onChange={handleSelectAllClick(rows)}
                                            size="small"
                                            color="primary"
                                        />
                                    </TableCell> : null
                            }

                            {
                                nameThead.map((item, index) => (
                                    <TableCell key={index} className={classes.th}>
                                        { item }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>

                    {
                        loading ?
                            <TableBody>
                                {
                                    Array.from(new Array(+selectedPage)).map((_, ind) => {
                                        return (
                                            <TableRow
                                                key={ind}
                                                className={classes.row}
                                            >
                                                {
                                                    Array.from(new Array(nameThead.length + 1)).map((_, ind) => {
                                                        return (
                                                            <TableCell
                                                                key={ind+'_cell'}
                                                                className={classes.td}
                                                            >
                                                                <Skeleton variant="text" animation={false} />
                                                            </TableCell>
                                                        )
                                                    })
                                                }
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody> :
                            <TableBody>
                                {
                                    rows.length > 0 && rows.map((row, index) => {

                                        const isItemSelected = !noSelected ? isSelected(row.id) : null;
                                        if(row?.level === 2) countForRow++;
                                        if(row?.level === 3) countForLevelThree++;

                                        return (
                                            <TableRow
                                                onClick={() => clickOnRow ? clickOnRow(row) : null}
                                                key={row.id}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                selected={isItemSelected}
                                                className={`${classes.row} ${countForRow % 2 === 0 && row?.level === 2 ? 'even' : ''} ${countForLevelThree % 2 !== 0 && row?.level === 3 ? 'levelThree' : ''}`}
                                                classes={{
                                                    selected: classes.trSelected
                                                }}
                                            >
                                                {
                                                    !noSelected ?
                                                        <TableCell
                                                            className={classes.cell_checkbox}
                                                            onClick={(event) => event.stopPropagation()}
                                                        >
                                                            <Checkbox
                                                                checked={isItemSelected}
                                                                color="primary"
                                                                size="small"
                                                                onChange={(event) => handleClick(event, row.id)}

                                                            />
                                                        </TableCell> : null
                                                }

                                                {
                                                    helperTdrender(row).map((cell, index) => {
                                                        return (
                                                            <TableCell
                                                                className={classes.td}
                                                                key={`${row.id}_cell${index}`}
                                                            >
                                                                {cell}
                                                            </TableCell>
                                                        )
                                                    })
                                                }
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                    }
                </Table>
            </TableContainer>

            {
                !loading && error
                    ? <div className={classes.noData}>
                        Ошибка загрузки данных <br/>
                        <span style={{color: 'red'}}>{error}</span>
                    </div>
                    : null
            }

            {
                dataTbody.length && (total_count / selectPage) > 1 && rows.length ?
                    <TablePagination
                        total_users_count={total_count}
                        count={count}
                        handleChangePagination={handleChangePagination}
                        page={page}
                        selectPage={selectPage}
                        handleChangeSelectPagination={handleChangeSelectPagination}
                        name={nameSection}
                    /> : !loading && !rows.length ?
                    <div className={classes.noData}>Данных не найдено</div> : null
            }
        </div>
    )
};

export default React.memo(TablesAll);
