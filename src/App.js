import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/shards-dashboards.1.1.0.min.css';

export default () => (
    <Login />
    // <Router basename={process.env.REACT_APP_BASENAME || ''}>
    //     <div>
    //         {routes.map((route, index) => {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={props => {
    //                         return (
    //                             <route.layout {...props}>
    //                                 <route.component {...props} />
    //                             </route.layout>
    //                         );
    //                     }}
    //                 />
    //             );
    //         })}
    //     </div>
    // </Router>
);
