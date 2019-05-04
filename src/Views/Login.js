import '../Public/Login.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function tryLogin() {
    var data = {
        "login": document.getElementById('email-input').value,
        "password": document.getElementById('password-input').value
    };
    (async () => {
        const response = await fetch('http://user.epicare.fr/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
        const content = await response.json();
        console.log(content);
    })();
}

export default class Login extends Component {
    render() {
        return (
            <div>
                <br></br><br></br><br></br>
                <form className="box">
                    <div className="form-group">
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else, cause we ain't gay</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password-input" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-block btn-success btn-space" onClick={tryLogin}>Login</button>
                    <button type="submit" className="btn btn-block btn-secondary btn-space"><Link to='/register'></Link>Register</button>
                </form>
            </div>
        )
    }
}