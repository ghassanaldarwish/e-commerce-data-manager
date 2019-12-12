import React, { Component } from 'react';
//import { Admin, Resource } from 'react-admin';
//import dataProvider from './dataProvider/dataProvider.d';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './App.css';
import Register from './LoginPage';
import Dashbord from './Dashbord/Dashbord';

export class App extends Component {
    state = {
        isSignIn: false,
        isAdminNavbar: true,
        admin: false,
        email: null,
        exp: null,
        superAdmin: false,
        id: null,
        errors: null,
    };
    componentDidMount() {
        localStorage.setItem('username', 'hhhhhhh');
        const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;

        if (!!accessToken) {
            const setAuthToken = token => {
                if (token) {
                    // Apply to every request
                    axios.defaults.headers.common['Authorization'] = token;
                } else {
                    // Delete auth header
                    delete axios.defaults.headers.common['Authorization'];
                }
            };
            setAuthToken(accessToken);
            const accessTokenDecoded = jwtDecode(accessToken);
            this.setState({
                ...this.state,
                admin: accessTokenDecoded.admin,
                email: accessTokenDecoded.email,
                exp: accessTokenDecoded.exp,
                superAdmin: accessTokenDecoded.superAdmin,
                id: accessTokenDecoded._id,
                isSignIn: true,
            });
            console.log('accessTokenDecoded ==>', accessTokenDecoded);
        }
    }
    render() {
        return this.state.admin ? <Dashbord /> : <Register />;
    }
}

export default App;
