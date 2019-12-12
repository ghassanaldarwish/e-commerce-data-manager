import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import { RedirectMiddleware } from './RedirectMiddleware ';

export class Register extends Component {
    render() {
        return (
            <Switch>
                <Route exact strict path="/auth/oauth2/callback/accessToken/:id" component={RedirectMiddleware} />

                <Route exact strict path="/" component={LoginPage} />
            </Switch>
        );
    }
}

export default Register;
