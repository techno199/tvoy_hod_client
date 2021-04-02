import React, { useContext, useState }          from 'react'
import { useHistory, useLocation, Link }        from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext }                          from 'context/AuthContext/AuthContext'
import { AwardIcon }                            from 'svgComponents/AwardIcon'
import Logo                                     from 'svgComponents/Logo'
import { Profile }                              from 'svgComponents/Profile'
import { Notifications }                        from 'svgComponents/Notifications'
import { Settings }                             from 'svgComponents/Settings';
import { MyTeam }                               from 'svgComponents/MyTeam';
import { Contests }                             from 'svgComponents/Contests';
import { Achievements }                         from 'svgComponents/Achievements';
import { MyTasks }                              from 'svgComponents/MyTasks';
import { MyTests }                              from 'svgComponents/MyTests';
import { MyNews }                               from 'svgComponents/MyNews';
import { MyEvents }                             from 'svgComponents/MyEvents';
import { MyTraining }                           from 'svgComponents/MyTraining';
import { Introduction }                         from 'svgComponents/Introduction';
import { MobileBar }                            from './MobileBar'
import { MobileNavigation }                     from './MobileNavigation'
import TabsLinks                                from './TabsLinks';
import { visibleTest }                          from 'utils/visibleTest';
import { Scrollbars }                           from 'react-custom-scrollbars';
import useMediaQuery                            from '@material-ui/core/useMediaQuery';
import { getContestant }                        from 'utils/adminPermissions';
import { useSidebarStyles }                     from './styles'
import './customScroll.css';
const { detect } =                              require('detect-browser');

export const Sidebar = () => {
    const { logout, state: stateContext } = useContext(AuthContext);
    const isMob = useMediaQuery('(max-width:1100px)');
    const browser = detect();

    const c = useSidebarStyles();
    const history = useHistory();
    let { pathname } = useLocation();
    const [isActive, setIsActive] = useState('profile');
    const [openMobile, setOpenMobile] = useState(false);
    
    const tabsLink = [
        {
            id: 1,
            title: 'Мой профиль',
            icon: Profile,
            link: '/profile',
            visible: true
        },
        {
            id: 2,
            title: 'Настройки',
            icon: Settings,
            link: '/settings',
            visible: true
        },
        {
            id: 3,
            title: 'Мои конкурсы',
            icon: Contests,
            link: '/contests',
            visible: getContestant(stateContext.role)
        },
        {id: 'divider'},
        {
            id: 4,
            title: 'Мои тесты',
            icon: MyTests,
            link: '/tests',
            visible: visibleTest(stateContext) && visibleProfile()
        },
        {
            id: 5,
            title: 'Моё обучение',
            icon: MyTraining,
            link: '/training',
            visible: visibleProfile()
        },
        {
            id: 6,
            title: 'Мой сертификат',
            icon: AwardIcon,
            link: '/certificate',
            visible: visibleProfile()
        },
        {
            id: 7,
            title: 'Знакомство',
            icon: Introduction,
            link: '/introduction',
            visible: visibleContest()
        },
        {
            id: 8,
            title: 'Моя команда',
            icon: MyTeam,
            link: '/team',
            noWork: true,
            visible: false
        },
        {
            id: 9,
            title: 'Уведомления',
            icon: Notifications,
            link: '/notification',
            noWork: true,
            visible: false
        },
        {
            id: 10,
            title: 'Мои достижения',
            icon: Achievements,
            link: '/achievements',
            noWork: true,
            visible: false
        },
        {
            id: 11,
            title: 'Мои задания',
            icon: MyTasks,
            link: '/tasks',
            noWork: true,
            visible: false
        },
        {
            id: 12,
            title: 'Мои новости',
            icon: MyNews,
            link: '/news',
            noWork: true,
            visible: false
        },
        {
            id: 13,
            title: 'Мои мероприятия',
            icon: MyEvents,
            link: '/events',
            noWork: true,
            visible: false
        },
    ];

    function visibleProfile () {
        const path = pathname.split('/');
        return path.includes('profile')
            || path.includes('certificate')
            || path.includes('training')
            || path.includes('tests')
    }

    function visibleContest () {
        const path = pathname.split('/');

        if(getContestant(stateContext.role) && (path.includes('introduction') || path.includes('contests'))) {
            return true
        }

        return  false
    }

    const goToSection = (link) => () => {
        setIsActive(link);
        if(openMobile) setOpenMobile(false);
        history.push(`/lk${link}`)
    };

    const browserCssStyle = () => {
        return  ['safari'].includes(browser.name)
    };

    return (
        <>
            {
                isMob ?
                    <>
                        <MobileNavigation
                            open={openMobile}
                            setOpen={setOpenMobile}
                        />
                        <MobileBar
                            tabsLink={tabsLink}
                            open={openMobile}
                            setOpen={setOpenMobile}
                            logout={logout}
                            isActive={isActive}
                            setIsActive={setIsActive}
                            goToSection={goToSection}
                            pathname={pathname}
                        />
                   </> :
                    <div className={c.sidebarwrapper}>
                        <div
                            className={c.sidebarLogo}
                            style={{
                                width: browserCssStyle() && '100%'
                            }}
                        >
                            <Link to={'/'}><Logo /></Link>
                        </div>

                        {
                            browserCssStyle()
                                ?   <div className={c.wrapTablinks}>
                                        <TabsLinks
                                            tabsLink={tabsLink}
                                            goToSection={goToSection}
                                            pathname={pathname}
                                            logout={logout}
                                            visibleProfile={visibleProfile}
                                        />
                                    </div>
                                :   <Scrollbars
                                        className={'myScroll'}
                                        autoHeightMax={'100%'}
                                        autoHeight
                                        renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                                        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                                        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                                        renderView={props => <div style={{paddingRight: 4, ...props.style}} />}
                                    >
                                        <TabsLinks
                                            tabsLink={tabsLink}
                                            goToSection={goToSection}
                                            pathname={pathname}
                                            logout={logout}
                                            visibleProfile={visibleProfile}
                                        />
                                    </Scrollbars>
                        }
                    </div>
            }
        </>
    )
};