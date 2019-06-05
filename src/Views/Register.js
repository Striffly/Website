import '../Public/Common.css'
import React from 'react';
import CareApi from '../api';
import { Link } from 'react-router-dom';

function tryRegister() {
    const name = document.getElementById('name-input').value;
    const last_name = document.getElementById('last_name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const type = document.getElementById('type-input').value;
    var promise = CareApi.register(name, last_name, email, password, type);
    promise.then(function(response) {
        if (response != null && response.status === 200) {
            alert("We've sent you a validation email");
        }
    });
    return false;
}

export default class RegisterPage extends React.Component {
    render() {
        return (
            <div className="center-screen">
                <div className="box">
                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="name" className="form-control" id="name-input" placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="name" className="form-control" id="last_name-input" placeholder="Enter last name" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Enter email" />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Account type</label>
                            <input type="name" className="form-control" id="type-input" placeholder="patient / doctor ?" />
                        </div>
                        <button type="button" className="btn btn-block btn-primary" onClick={tryRegister}>Register</button>
                        <Link to="/login" className="btn btn-block btn-secondary btn-space">Already registed ?</Link>
                    </form>
                </div>
            </div>
        );
    }
}