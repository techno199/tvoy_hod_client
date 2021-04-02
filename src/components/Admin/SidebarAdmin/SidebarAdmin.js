import React, { useContext }                from 'react';
import { useHistory, useLocation, Link }    from 'react-router-dom'
import Button                               from '@material-ui/core/Button';
import VisiblePermissions                   from 'HOC/VisiblePermissions/VisiblePermissions';
import Logo                                 from 'svgComponents/Logo';
import { Users }                            from 'svgComponents/Users';
import { School }                           from 'svgComponents/School';
import { UserCrm }                          from 'svgComponents/UserCrm';
import { Tab }                              from './Tab'
import { AuthContext }                      from 'context/AuthContext/AuthContext';
import { AdminUserContext }                 from 'context/AdminUserContext/AdminUserContext';
import { getAdminPage }                     from 'utils/adminPermissions';
import { useStyles }                        from './style';

const SidebarAdmin = () => {
    const classes = useStyles();
    const { state, logout, getPermissions } = useContext(AuthContext);
    const { userData } = useContext(AdminUserContext);

    let { pathname, state: stateLocation } = useLocation();
    const history = useHistory();
    const tabsLink = [
        {
            id: 1,
            title: 'Пользователи БП',
            icon: Users,
            link: returnLink('users_bg'),
            dopHook: '/users_card',
            visible: getPermissions().includes('admin_bp_users_list')
        },
        {
            id: 2,
            title: 'Пользователи CRM',
            icon: UserCrm,
            link: returnLink('users_admin'),
            dopHook: '/users_card',
            visible: getPermissions().includes('admin_crm_users_list')
        },
        {
            id: 3,
            title: 'Образовательные учреждения',
            icon: School,
            link: returnLink('school'),
            visible: getPermissions().includes('admin_school_list')
        },
    ];

    const goToSection = (link) => () => {
        history.push(link)
    };

    const shortName = () => {
        const { name } = state;
        return `${name.last} ${name.first ? name.first[0].toUpperCase() + '.' : ''} ${name.middle ? name.middle[0].toUpperCase() + '.' : ''}`
    };

    const isActivToStateLocation = (tab) => {
        if((tab.id === 1 && stateLocation?.link === 'bg') || (tab.id === 2 && stateLocation?.link === 'admin')) {
            return true
        }

        if(!stateLocation?.link ) {
            if(tab.id === 1 && userData.role && pathname.includes(tab.dopHook)) {
                return !getAdminPage(userData.role)
            } else if (tab.id === 2 && userData.role && pathname.includes(tab.dopHook)) {
                return getAdminPage(userData.role)
            }
        }

        return false
    };

    function returnLink(name) {
        if(stateLocation?.url && stateLocation?.url.includes(name)) {
            return stateLocation.url
        } else {
            return `/admin/${name}`
        }
    }

    return (
        <div className={classes.SidebarAdmin}>
            <div className={classes.sidebarLogo}>
                <Link to={'/'}>
                    <Logo />
                </Link>
            </div>

            <div className={classes.tabs} >
                {
                    tabsLink.map(tab => {
                        return (
                            <VisiblePermissions
                                key={tab.id}
                                visible={tab.visible}
                            >
                                <Tab
                                    title={tab.title}
                                    onClick={goToSection(tab.link)}
                                    Icon={tab.icon}
                                    isActive={pathname.includes(tab.link) || isActivToStateLocation(tab)}
                                />
                            </VisiblePermissions>
                        )
                    })
                }
            </div>

            <div className={classes.exit}>
                <div>
                    <p className={classes.fio}>{shortName()}</p>
                    {
                        state.role && state.role.map(item => (
                            <p key={item.role_id} className={classes.role}>
                                {item.title}
                            </p>
                        ))
                    }
                </div>

                <Button
                    onClick={() => {
                        history.push('/');
                        logout();
                    }}
                    variant="contained"
                    disableElevation
                    className={classes.buttonExit}
                >
                    Выйти
                </Button>
            </div>
        </div>
    )
};

export default SidebarAdmin;