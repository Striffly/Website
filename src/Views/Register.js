import React from 'react';
import CareApi from '../api';
import { Link } from 'react-router-dom';

function tryRegister() {
    const name = document.getElementById('name-input').value;
    const last_name = document.getElementById('last_name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const type = document.getElementById('type-input').value;
    CareApi.register(name, last_name, email, password, type);
    return false;
}

class RegisterPage extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br />
                <div className="col-md-6 col-md-offset-3">
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
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account type
                            </button>
                            <div className="dropdown-menu" id="type-input" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Doctor</button>
                                <button className="dropdown-item" type="button">Patient</button>
                            </div>
                        </div>
                        <button type="button" className="btn btn-block btn-primary" onClick={tryRegister}>Register</button>
                        <Link to="/register" className="btn btn-block btn-secondary btn-space">Already registed ?</Link>
                    </form>
                </div>
            </div>
        );
    }
}
export { RegisterPage as Register };
