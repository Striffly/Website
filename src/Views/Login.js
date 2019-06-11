import '../Public/Common.css'
import '../Public/Login.css';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import CareApi from '../Api/api';

class Login extends Component {
    constructor(props) {
        super(props);
        this.errorMsg = '';
        this.state = {
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
                    <Link to="/register" className="btn btn-block btn-secondary btn-space">Register</Link>
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
        )
    }
}

export default withRouter(Login);
