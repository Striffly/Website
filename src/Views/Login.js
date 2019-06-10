import '../Public/Common.css'
import '../Public/Login.css';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CareApi from '../Api/api';

class Login extends Component {
    constructor(props) {
        super(props);
        this.redirectPrescription = this.redirectPrescription.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
    }
    redirectPrescription(loginResponse) {
        if (loginResponse != null) {
            CareApi.setSessionToken(loginResponse.data.token);
            this.props.history.push('/prescription');
        }
    }
    tryLogin() {
        const login = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        var promise = CareApi.login(login, password);
        promise.then(this.redirectPrescription);
    }
    render() {

        return (
            <div className="center-screen">
                <form className="box">
                    <div className="form-group">
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else, 'cause we are good guys</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password-input" placeholder="Password" />
                    </div>
                    <button type="button" className="btn btn-block btn-success btn-space" onClick={this.tryLogin}>Login</button>
                    <Link to="/register" className="btn btn-block btn-secondary btn-space">Register</Link>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);
