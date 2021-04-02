import React from 'react'
import { Link } from 'react-router-dom';
import Logo  from 'svgComponents/Logo';
import { useMobileStyles } from './styles';

export const MobileNavigation = ({
    open,
    setOpen,
}) => {

    const c = useMobileStyles();

    return (
        <div className={c.mobileWrapper}>
                <Link to={'/'}>
                    <Logo color={'#FF7271'}/>
                </Link>

                <div className={c.openMenuIcon}
                     onClick={ () => setOpen(!open) }
                >
                    <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="39" y2="1" stroke="black" strokeWidth="2"/>
                        <line y1="12" x2="39" y2="12" stroke="black" strokeWidth="2"/>
                        <line y1="23" x2="39" y2="23" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
        </div>
    )
};
