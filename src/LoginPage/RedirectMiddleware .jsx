import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Spinner from '../components/Spinner/Spinner';
import './LoginPage.css';

export class RedirectMiddleware extends Component {
    componentDidMount() {
        console.log('this.props.match', this.props);
        localStorage.setItem('access_token', JSON.stringify(this.props.match.params.id));
        window.location.assign('/');
    }
    render() {
        return (
            <div className="LoginPage">
                <Spinner />
            </div>
        );
    }
}

export default withRouter(RedirectMiddleware);
