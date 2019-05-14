import '../Public/Login.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CareApi from '../api';

function tryLogin() {
    const login = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    CareApi.login(login, password);
}

export default class Login extends Component {
    render() {
        return (
            <div>
                <br></br><br></br><br></br>
                <form className="box">
                    <div className="form-group">
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else, 'cause we are good guys</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password-input" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-block btn-success btn-space" onClick={tryLogin}>Login</button>
                    <Link to="/register" className="btn btn-block btn-secondary btn-space">Register</Link>
                </form>
            </div>
        )
    }
}