import React, { useContext } from 'react';
import { Divider } from '@material-ui/core'
import { LogoutIcon } from 'svgComponents/LogoutIcon'
import VisiblePermissions from 'HOC/VisiblePermissions/VisiblePermissions';
import vkMobMenu from 'images/vkMobMenu.svg'
import { useMobileStyles } from './styles'
import { Tab } from './Tab'
import { AuthContext } from 'context/AuthContext/AuthContext';

export const MobileBar = ({
    pathname,
    goToSection,
    tabsLink,
    open,
    isActive,
    setIsActive,
    setOpen,
    logout,
}) => {
    const { state:stateContext } = useContext(AuthContext);
    const c = useMobileStyles({ open });

    return (
        <div className={c.mobileDrawer}>
            <div className={c.sidebarwrapper}>
                <div className={c.logoBlock}>
                    {
                        stateContext.vk_id ?
                            <div className={c.bonus}>
                                <div className={c.inner} />
                                <span className={c.bonusSpan}>
                                     {stateContext.bonus_balance} бонусов
                                    <img src={vkMobMenu} alt="vkMobMenu"/>
                                </span>
                            </div> : null
                    }

                    <svg onClick={() => setOpen(false)} width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.70711" y1="1.50432" x2="30.2843" y2="29.0815" stroke="white" strokeWidth="2"/>
                        <line x1="1.29289" y1="29.0815" x2="28.8701" y2="1.5043" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>

                <div className={c.tabs} >
                    {
                        tabsLink.map(tab =>  {
                            return (
                                <React.Fragment key={tab.id}>
                                    {
                                        tab.id === 'divider' ?
                                            <Divider variant='middle' className={c.divider} light/> :
                                            <VisiblePermissions visible={tab.visible}>
                                                <Tab
                                                    title={tab.title}
                                                    onClick={goToSection(tab.link)}
                                                    Icon={tab.icon}
                                                    isActive={pathname.includes(tab.link)}
                                                />
                                            </VisiblePermissions>
                                    }
                                </React.Fragment>
                            )
                        })
                    }

                    <Divider variant='middle' className={c.divider} light/>

                    <div className={c.techSupportInfo}>
                        <h5 className={c.techSupportHeading}>Техническая поддержка</h5>
                        <a href="tel:+78003506383" className={c.textLink}>+7 800 350 63 83</a>
                        <a className={c.textLink} href="mailto:help@bolshayaperemena.online">help@bolshayaperemena.online</a>
                    </div>

                    <div style={{flexGrow: 1}} />
                    <Divider variant='middle' className={c.divider} light/>
                    <div className={c.logoutWrap}>
                        <Tab title='Выйти' onClick={logout} Icon={LogoutIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
};
