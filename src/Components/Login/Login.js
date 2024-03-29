// import '../../Styles.scss'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import KwiliApi from '../Shared/Api/api';

import classes from '../../Styles.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.errorMsg = '';
		this.state = {
			isLogin: this.props.location.state,
			show: false,
		};
		this.redirectPrescription = this.redirectPrescription.bind(this);
		this.tryLogin = this.tryLogin.bind(this);
		this.tryRegister = this.tryRegister.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	redirectPrescription(loginResponse) {
		console.log(loginResponse);
		if (loginResponse != null) {
			KwiliApi.setSessionToken(loginResponse.data.access_token);
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
		} else if (password === '') {
			this.errorMsg = 'Erreur : mot de passe manquant. Veuillez entrer votre mot de passe.';
			this.setState({ show: true })
		} else {
			var promise = KwiliApi.login(login, password);
			promise.then(this.redirectPrescription);
		}
	}

	tryRegister() {
		const name = document.getElementById('name-input').value;
		const last_name = document.getElementById('last_name-input').value;
		const email = document.getElementById('email-input').value;
		const password = document.getElementById('password-input').value;
		const password_bis = document.getElementById('password-input-confirmation').value;
		const date = document.getElementById('date-input').value;
		const type = document.getElementById('type-input').value;
		if (name === '' || last_name === '' || email === '' || password === '' || password_bis === '' || type === '' || date === '') {
			this.errorMsg = "Erreur: un ou plusieurs champs n'ont pas été remplis.";
			this.setState({ show: true });
			return;
		} else if (password_bis.localeCompare(password) !== 0) {
			this.errorMsg = 'Erreur: veuillez entrer le même mot de passe.';
			this.setState({ show: true });
			return;
		} else
			var promise = KwiliApi.register(name, last_name, email, password, type);
		promise.then(function (response) {
			if (response != null && response.status === 200) {
				alert("We've sent you a validation email");
			} else {
				this.errorMsg = 'Une erreur est survenue. Veuillez vérifier les informations saisies.';
				this.setState({ show: true });
			}
		});
		// return false;
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleChange(date) {
		this.setState({ startDate: date });
	}

	render() {

		return (
			<div>
				{this.state.isLogin ? (
					<div className={classes.centerScreen}>
						<form className={classes.box}>
							<div className="form-group">
								<input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Courriel" />
								<small id="emailHelp" className="form-text text-muted">Si vous n'avez pas de compte, vous pouvez vous en créer un en cliquant sur S'inscrire</small>
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="password-input" placeholder="Mot de passe" />
							</div>
							<button type="button" className={`btn btn-block btn-success ${classes.btnSpace}`} onClick={this.tryLogin}>Connexion</button>
							<button className={`btn btn-block btn-secondary ${classes.btnSpace}`} onClick={() => this.setState({ isLogin: false })}>S'inscrire</button>
						</form>
						<Modal show={this.state.show} onHide={this.handleClose}>
							<Modal.Body>{this.errorMsg}</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={this.handleClose}>
									Fermer
                        </Button>
							</Modal.Footer>
						</Modal>
					</div>
				) : (
						<div className={classes.centerScreen}>
							<div className={classes.box}>
								<form>
									<div className="form-group">
										<label>Prénom</label>
										<input type="name" className="form-control" id="name-input" placeholder="Indiquez votre prénom" />
									</div>
									<div className="form-group">
										<label>Nom</label>
										<input type="name" className="form-control" id="last_name-input" placeholder="Indiquez votre nom" />
									</div>
									<div className="form-group">
										<label>Date de naissance</label>
										<input type="date" id="date-input" min="1900-01-10" max="2019-06-12" />
									</div>
									<div className="form-group">
										<label>Courriel</label>
										<input type="email" className="form-control" id="email-input" placeholder="Inqiquez votre courriel" />
										<small className="form-text text-muted">Votre courriel ne sera jamais diffusé à des acteurs tiers.</small>
									</div>
									<div className="form-group">
										<label>Mot de passe</label>
										<input type="password" className="form-control" id="password-input" placeholder="Mot de passe" />
									</div>
									<div className="form-group">
										<label>Confirmez votre mot de passe</label>
										<input type="password" className="form-control" id="password-input-confirmation" placeholder="COnfirmation du mot de passe" />
									</div>
									<div className="form-group">
										<label>Type de compte</label>
										<input type="name" className="form-control" id="type-input" placeholder="patient / doctor ?" />
									</div>
									<button type="button" className="btn btn-block btn-primary" onClick={this.tryRegister}>S'inscrire</button>
									<button className={`btn btn-block btn-secondary ${classes.btnSpace}`} onClick={() => this.setState({ isLogin: true })}>Déjà inscrit ?</button>
								</form>
							</div>
							<Modal show={this.state.show} onHide={this.handleClose}>
								<Modal.Body>{this.errorMsg}</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={this.handleClose}>
										Fermer
                        </Button>
								</Modal.Footer>
							</Modal>
						</div>
					)}
			</div>
		)
	}
}

export default withRouter(Login);
