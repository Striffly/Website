import React, { Component } from 'react';
import KwiliApi from '../Shared/Api/api';
import KwiliCommon from '../Shared/LogHandling/common';
import classes from '../Chat/Chat.scss';
import CareChat from './Api';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			chat: new CareChat(KwiliApi.getSessionToken(), this.onMessage),
			data: [],
		};
		this.onMessage = (response) => {
			console.log("message: " + response);
			if (response != null) {
				this.setState({
				});
			}
		};
		this.refreshInfo = (response) => {
			console.log(response);
			if (response != null) {
				this.setState({
					users: response.data,
				});
				console.log(this.state.users);
			}
		};
	}

	componentWillMount() {
		KwiliApi.searchUser('').then(this.refreshInfo);
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
	}

	msgBox(msg) {
		return (
			<li key={msg.msg}>
				{msg.name} : {msg.msg} ({msg.date})
			</li>
		)
	}

	messagesDisplayer(msgs) {
		//var arr = msgs.map(item => this.msgBox(item));
		//return arr;
	}

	cardItem(img, name) {
		return (
			<div className="row" key={name}>
				<div className="card col-3">
					<div className="card-header row btn-link" id={`${name}Card`} data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
						<img src={img} className={`card-img ${classes.chatImg}`} alt={name} />
						<div className="btn btn-link" data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
							<h6 className={`card-title ${classes.chatCardTitle}`}>{name}</h6>
							<p className={`card-text ${classes.chatCardMsg}`}>last message</p>
							<p className={`card-text`}>
								<small className="text-muted">4 minutes ago</small>
							</p>
						</div>
					</div>
				</div>
				<div id={`collapse${name}`} className={`collapse col-6 ${classes.chatBox}`} aria-labelledby={`${name}Card`} data-parent="#chatCards">
					<div className="card-body mx-sm-3 md-2">
						<ul className={` ${classes.chatText}`}>
							{this.messagesDisplayer(this.state.users[name])}
						</ul>
					</div>
					<form className="card-body form-inline">
						<div className="form-group mx-sm-3 md-2">
							<input type="text" className="form-control" id={`MessageInput${name}`} placeholder="Écriver un message ..." />
						</div>
					</form>
				</div>
			</div>
		)
	}

	loadChats(datas) {
		console.log(datas);
		var arr = datas.map(item => this.cardItem('https://intra.epitech.eu/file/userprofil/profilview/maxence.fourrier.jpg', item.name));
		return arr;
	}

	render() {
		if (KwiliApi.isConnected() === false)
			return KwiliCommon.notLoggedPage();
		this.state.chat.start("5d9a527f46906778e730c047");
		return (
			<div>
				<div className={`accordion ${classes.chat}`} id="chatCards">
					{this.loadChats(this.state.users)}
				</div>
			</div>
		);
	}
}
