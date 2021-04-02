import React                                from 'react';
import { Divider }                          from '@material-ui/core'
import { Tab }                              from './Tab';
import VisiblePermissions                   from 'HOC/VisiblePermissions/VisiblePermissions';
import { LogoutIcon }                       from 'svgComponents/LogoutIcon';
import { TECH_SUP_EMAIL, TECH_SUP_PHONE }   from '../../CONSTANTS';
import { useSidebarStyles }                 from './styles';

const TabsLinks = ({ tabsLink, goToSection, pathname, logout, visibleProfile }) => {
    const c = useSidebarStyles();

    const isActive = (link) => {
        switch(link) {
            case '/profile':
                return visibleProfile();

            case '/contests':
                return  pathname.includes('introduction') || pathname.includes('contests');

            default:
                return pathname.includes(link)
        }
    };

    return (
        <>
            <div className={c.tabs} >
                {
                    tabsLink.map(tab => {
                        return (
                            <React.Fragment key={tab.id}>
                                {
                                    tab.id === 'divider' ?
                                        <Divider classes={{root: c.divider}}/> :
                                        <VisiblePermissions visible={tab.visible}>
                                            <Tab
                                                title={tab.title}
                                                onClick={goToSection(tab.link)}
                                                Icon={tab.icon}
                                                isActive={isActive(tab.link)}
                                                noWork={tab.noWork}
                                            />
                                        </VisiblePermissions>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>

            <div>
                <div className={c.topLogout} />
                <div className={c.logout}>
                    <Divider classes={{root: c.divider}}/>
                    <Tab title='Выйти' onClick={logout} Icon={LogoutIcon} />
                    <Divider classes={{root: c.divider}}/>
                </div>

                <div className={c.techSupport} >
                    <div className={c.techSupportWrap}>
                        <div className={c.techSupportText} >
                            Техническая поддержка
                        </div>
                        <a href={`tel:${TECH_SUP_PHONE}`} style={{textDecoration: 'none'}}>
                            <div className={c.techSupportInfo}>{TECH_SUP_PHONE}</div>
                        </a>

                        <a href={`mailto:${TECH_SUP_EMAIL}`} style={{textDecoration: 'none'}}>
                            <div className={c.techSupportInfo}>{TECH_SUP_EMAIL}</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TabsLinks;