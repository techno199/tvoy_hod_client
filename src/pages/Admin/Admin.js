import React, { useEffect, useContext  }            from 'react';
import { Switch, Route, Redirect, useRouteMatch }   from 'react-router-dom';
import AdminLogin                                   from 'components/Admin/AdminLogin/AdminLogin'
import SidebarAdmin                                 from 'components/Admin/SidebarAdmin/SidebarAdmin'
import Users                                        from 'components/Admin/Users/Users';
import UsersAdmin                                   from 'components/Admin/UsersAdmin/UsersAdmin';
import UsersCard                                    from 'components/Admin/UsersCard/UsersCard';
import AddNewUserBg                                 from 'components/Admin/AddNewUserBg/AddNewUserBg';
import AddNewUserAdmin                              from 'components/Admin/AddNewUserAdmin/AddNewUserAdmin';
import School                                       from 'components/Admin/School/School';
import SchoolCard                                   from 'components/Admin/SchoolCard/SchoolCard';
import AddNewSchoolCard                             from 'components/Admin/AddNewSchoolCard/AddNewSchoolCard';
import Dashboard                                    from 'components/Admin/Dashboard/Dashboard';
import { AdminUserContext }                         from '../../context/AdminUserContext/AdminUserContext';
import { AuthContext }                              from '../../context/AuthContext/AuthContext';
import { useStyles }                                from './style';

const Admin = () => {
    const classes = useStyles();
    let { path } = useRouteMatch();
    const { roles, regions, getRoles, getRegions } = useContext(AdminUserContext);
    const { isAuth } = useContext(AuthContext);
    const arrLinks = React.useRef([
        `${path}/dashboard`,
        `${path}/users_bg/:idPage?/:countPage?`,
        `${path}/users_admin/:idPage?/:countPage?`,
        `${path}/school/:idPage?/:countPage?`,
        `${path}/school_card/:idSchool`,
        `${path}/school_add`,
        `${path}/users_bg_add`,
        `${path}/users_admin_add`,
        `${path}/users_card/:idUser`,
        `${path}/events`
    ]);

    useEffect(() => {
        if(isAuth === 1) {
            if(!roles.length) getRoles();
            if(!regions.length) getRegions();
        }
        //eslint-disable-next-line
    }, [isAuth]);

    return (
        <Switch>
            <Route exact path={arrLinks.current}>
                {
                    isAuth === 1 ?
                        <div className={classes.authUser}>
                            <SidebarAdmin />
                            <div className={classes.wrapRoute}>
                                <Route path={`${path}/dashboard`} component={Dashboard}/>
                                <Route path={`${path}/users_bg/:idPage?/:countPage?`} component={Users}/>
                                <Route path={`${path}/users_admin/:idPage?/:countPage?`} component={UsersAdmin}/>
                                <Route path={`${path}/school/:idPage?/:countPage?`} component={School}/>
                                <Route path={`${path}/users_card/:idUser`} component={UsersCard}/>
                                <Route path={`${path}/school_card/:idSchool`} component={SchoolCard}/>
                                <Route path={`${path}/users_bg_add`} component={AddNewUserBg} />
                                <Route path={`${path}/users_admin_add`} component={AddNewUserAdmin} />
                                <Route path={`${path}/school_add`} component={AddNewSchoolCard}/>
                            </div>
                        </div> : <Redirect to={`${path}/login`} />
                }
            </Route>

            <Route path={`${path}/login`} component={AdminLogin} />

            <Route exact path={`${path}`}>
                { isAuth === 1 ? <Redirect to={`${path}/dashboard`} /> : <Redirect to={`${path}/login`} /> }
            </Route>
        </Switch>
    )
};

export default Admin;