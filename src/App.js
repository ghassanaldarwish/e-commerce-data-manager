import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/Login/Login';
import routes from './routes';
import NavbarDrawer from './navbar/Navbar';
import AppServices from './App.services';
import ErrorBound from './errorBounder/errorBounder';
import './App.css';
export default () => {
    const { values } = AppServices();

    return (
        <ErrorBound>
            <Switch>
                {values.isSignIn && values.admin ? (
                    <NavbarDrawer>
                        <div className="Pages">
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={props => {
                                            return <route.component {...props} />;
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </NavbarDrawer>
                ) : (
                    <Login values={values} />
                )}
            </Switch>
        </ErrorBound>
    );
};
