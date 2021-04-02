import React from 'react'
import { useSidebarStyles } from './styles'

export const Tab = ({
    title,
    onClick,
    isActive,
    Icon,
    noWork,
}) => {

    const c = useSidebarStyles();

    return (
        <div className={`${c.tabItem} tabItem ${isActive ? c.activeTabitem : 'none'}`} onClick={onClick} >
            <div className={c.tabContent} >

                <div className={c.icon} >
                    <Icon fill={isActive ? '#A1FFF4' : noWork ? 'rgba(255, 255, 255, .4)' : '#79CADF'} />
                </div>

                <div className={`${c.tabTitle} ${noWork ? c.noWork : ''}`} >
                    {title}
                </div>

            </div>
        </div>
    )
};
