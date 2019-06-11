import '../Public/Common.css'
import '../Public/Login.css';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import CareApi from '../Api/api';

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.errorMsg = '';
        this.state = {
          isLogin: this.props.location.state,
          show: false,
        }
        this.redirectPrescription = this.redirectPrescription.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    redirectPrescription(loginResponse) {
        if (loginResponse != null) {
            CareApi.setSessionToken(loginResponse.data.token);
            this.props.history.push('/prescription');
        } else {
          this.errorMsg = 'Erreur : email et/ou mot de passe invalide.'
          this.setState({ show: true });
        }
    }
    tryLogin() {
        const login = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        if (login === '') {
          this.errorMsg = 'Erreur : email manquant. Veuillez entrer votre adresse mail.';
          this.setState({ show: true })
        } else if ( password === '') {
          this.errorMsg = 'Erreur : mot de passe manquant. Veuillez entrer votre mot de passe.';
          this.setState({ show: true })
        } else {
          var promise = CareApi.login(login, password);
          promise.then(this.redirectPrescription);
        }
    }

    handleClose() {
      this.setState({ show: false });
    }

    render() {

        return (
          <div>
            {this.state.isLogin ? (
              <div className="center-screen">
                  <form className="box">
                      <div className="form-group">
                          <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" />
                          <small id="emailHelp" className="form-text text-muted">Si vous n'avez pas de compte, vous pouvez vous en créer un en cliquant sur Register</small>
                      </div>
                      <div className="form-group">
                          <input type="password" className="form-control" id="password-input" placeholder="Password" />
                      </div>
                      <button type="button" className="btn btn-block btn-success btn-space" onClick={this.tryLogin}>Login</button>
                      <button className="btn btn-block btn-secondary btn-space" onClick={() => this.setState({ isLogin: false })}>Register</button>
                  </form>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>{this.errorMsg}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
              </div>
            ) : (
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
                          <button className="btn btn-block btn-secondary btn-space" onClick={() => this.setState({ isLogin: true })}>Already registed ?</button>
                      </form>
                  </div>
              </div>
            ) }
          </div>
        )
    }
}

export default withRouter(Login);
