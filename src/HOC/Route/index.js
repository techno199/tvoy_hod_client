import { AuthContext } from 'context/AuthContext/AuthContext'
import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export const FRoute = ({ // FadeRoute
    children,
    hidden,
    Component,
    ...params
}) => {

    const { isAuth } = useContext(AuthContext);

    if(hidden && isAuth !== 1 ){
        return <Redirect to='/' />
    }

    return (
        <Route {...params}>
            {Component ? <Component /> : children}
        </Route>
    )
};
