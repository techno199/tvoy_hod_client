import React, { useContext, Suspense }      from 'react';
import { Switch, Route,
    Redirect, useLocation }                 from 'react-router-dom';
import Navbar                               from 'components/Navbar';
import QrComponent                          from 'pages/QrComponent/QrComponent';
import Main                                 from 'pages/Main';
import Footer                               from 'components/Footer';
import { FRoute }                           from 'HOC/Route';
import { AuthContext }                      from 'context/AuthContext/AuthContext';

const Admin = React.lazy(() =>              import('pages/Admin/Admin'));
const Lk = React.lazy(() =>                 import('pages/Lk'));
const Auth = React.lazy(() =>               import('pages/Auth'));


const RouterComponent = () => {
    const location = useLocation();
    const { getPermissions } = useContext(AuthContext);

    return (
        <Switch>
            <Route exact path={['/','/auth', '/auth/signin', '/auth/signup', '/auth/forgot']} >
                <Navbar />

                <div className={['/'].includes(location.pathname)  ? 'contentAuto' : 'content'} >

                    <FRoute exact path='/' Component={Main} />

                    <FRoute path='/auth'>
                        <Suspense fallback={<div />}>
                            <Auth />
                        </Suspense>
                    </FRoute>
                </div>

                <Footer />
            </Route>

            <Route path={'/qr'} component={QrComponent} />

            <FRoute hidden path='/lk'>
                {
                    getPermissions() && getPermissions().includes('admin_access') ?
                        <Redirect to={'/'} /> : <Suspense fallback={<div />}><Lk /></Suspense>
                }
            </FRoute>

            <Route path={'/admin'}>
                {
                    !getPermissions() || getPermissions().includes('admin_access') ?
                        <Suspense fallback={<div />}><Admin /></Suspense> : <Redirect to={'/'} />
                }
            </Route>
        </Switch>
    )
};

export default RouterComponent;