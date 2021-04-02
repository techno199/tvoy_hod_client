import React from 'react';
import { Container } from '@material-ui/core';
import { Forgot } from 'components/Forgot';
import { Login } from 'components/Login';
import { Register } from 'components/Register';
import { Redirect, Route } from 'react-router-dom';
import { useAuthStyles } from './styles';

export default function Auth  () {

    const c = useAuthStyles();

    return (
        <div>
            <Container maxWidth='sm' className={c.authContainer}>
                <Route exact path='/auth'>
                    <Redirect to='/auth/signup' />
                </Route>
                <Route path='/auth/signin' component={Login} />
                <Route path='/auth/signup' component={Register} />
                <Route path='/auth/forgot' component={Forgot} />
            </Container>
        </div>
    )
};
