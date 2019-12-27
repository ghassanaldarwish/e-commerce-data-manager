import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const AppServices = () => {
    const [values, setValues] = useState({
        isSignIn: false,
        isAdminNavbar: true,
        admin: false,
        email: null,
        exp: null,
        superAdmin: false,
        id: null,
        errors: null,
    });
    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('access_token') as any) || null;

        if (!!accessToken) {
            const setAuthToken = (token: any) => {
                if (token) {
                    // Apply to every request
                    axios.defaults.headers.common['Authorization'] = token;
                } else {
                    // Delete auth header
                    delete axios.defaults.headers.common['Authorization'];
                }
            };
            setAuthToken(accessToken);
            const accessTokenDecoded: any = jwtDecode(accessToken);
            setValues({
                ...values,
                admin: accessTokenDecoded.admin,
                email: accessTokenDecoded.email,
                exp: accessTokenDecoded.exp,
                superAdmin: accessTokenDecoded.superAdmin,
                id: accessTokenDecoded._id,
                isSignIn: true,
            });
            console.log('accessTokenDecoded ==>', accessTokenDecoded);
        }
    }, []);
    return {
        values,
    };
};

export default AppServices;
