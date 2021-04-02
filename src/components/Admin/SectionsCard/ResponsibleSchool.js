import React, { useState }  from 'react';
import ExpandMoreIcon       from '@material-ui/icons/ExpandMore';
import Table                from '@material-ui/core/Table';
import TableBody            from '@material-ui/core/TableBody';
import TableCell            from '@material-ui/core/TableCell';
import TableHead            from '@material-ui/core/TableHead';
import TableRow             from '@material-ui/core/TableRow';
import Checkbox             from '@material-ui/core/Checkbox';
import { TEST_POSITIONS }   from '../../../CONSTANTS';
import { useStyles }        from './style';

const ResponsibleSchool = ({ responsible_school, formik, readonly, handleChange }) => {
    const classes = useStyles();
    const [openCollapse, setOpenCollapse] = useState(false);

    const getRole = (position) => {
        if(position) {
            return TEST_POSITIONS.find(i => i.id === position).title
        }
    };

    const getResponsibleList = () => {
        const ids = Object.entries(formik.values.responsibles)
            .filter(item => item[1])
            .map(([key, _]) => +key);

        let list = responsible_school.list.map(item => {
            return ids.includes(item.id) ? {...item, check: true} : {...item, check: false}
        });

        list.sort(function(a,b){return b.check-a.check});

        if(!openCollapse) {
            list = list.filter(item => item.check)
        }

        return list
    };

    return (
        <div className={classes.sectionsContent}>
            <h3 className={`${classes.headingSections} ${classes.collapse}`}>
                Ответственный
                <span
                    className={classes.collapseClick}
                    onClick={() => setOpenCollapse(!openCollapse)}
                >
                    { openCollapse ? 'Свернуть' : 'Развернуть' }
                    <ExpandMoreIcon className={`${classes.icon} ${!openCollapse ? classes.bottomArrow : ''}`} />
                </span>
            </h3>

            <div>
                {
                    responsible_school?.list?.length ?
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableTh}>ФИО</TableCell>
                                    <TableCell className={classes.tableTh}>Должность</TableCell>
                                    <TableCell className={classes.tableTh}>Назначен</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {getResponsibleList().map((row, ind) => {
                                    return (
                                        <TableRow key={ind}>
                                            <TableCell className={classes.tableTd}>
                                                {`${row.name.last || ''} ${row.name.first || ''} ${row.name.middle || ''}`}
                                            </TableCell>
                                            <TableCell className={classes.tableTd}>
                                                { getRole(row.educationalInstitutionInfo.position) }
                                            </TableCell>
                                            <TableCell className={classes.tableTd}>
                                                <Checkbox
                                                    checked={formik.values.responsibles[row.id]}
                                                    onChange={handleChange}
                                                    name={row.id.toString()}
                                                    size={'small'}
                                                    color={'primary'}
                                                    disabled={readonly}
                                                    disableRipple
                                                    classes={{
                                                        root: classes.vp_root,
                                                        checked: classes.vp_checked,
                                                        disabled: classes.disabledCheckbox
                                                    }}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table> :
                        <div>Данных нет</div>
                }
            </div>
        </div>
    )
};

export default ResponsibleSchool;