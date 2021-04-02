import React, { useEffect, useContext }                 from 'react';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';

const TrackingInactivity = ({ children }) => {
    const { isAuth, logout } = useContext(AuthContext);
    let clear;

    useEffect(() => {
        document.addEventListener('mousemove', startTimer);
        document.addEventListener('keypress', startTimer);

        return () => {
            document.removeEventListener('mousemove', startTimer);
            document.removeEventListener('keypress', startTimer);
        }
    });

    function startTimer () {
        if(clear) {
            window.clearTimeout(clear);
        }

        if(isAuth === 1) {
            clear = window.setTimeout(() => {
                logout();
                console.log('%cБездействие 30 минут', 'color: #3A4699; font-size: 16px;');
            }, 1000 * 60 * 30);
        }
    }

    return (
        <>
            { children }
        </>
    )
};

export default TrackingInactivity;