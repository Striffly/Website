import React, { Component } from 'react';
import KwiliApi from '../Shared/Api/api';
// import NotLogged from '../Shared/LogHandling/NotLogged';
// import KwiliCommon from '../Shared/LogHandling/common';
import classes from '../Chat/Chat.scss';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
		this.refreshInfo = (response) => {
			if (response != null) {
				this.setState({
					user: response.data.user,
				});
			}
		};
	}

	componentWillMount() {
		if (KwiliApi.isConnected())
			KwiliApi.getProfileInfo().then(this.refreshInfo);
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
	}

	cardItem(img, name, msg, updated, msgs) {
		return (
			<div className="row">
				<div className="card col-3">
					<div className="card-header row btn-link" id={`${name}Card`} data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
						<img src={img} className={`card-img ${classes.chatImg}`} alt={name} />
						<div className="btn btn-link" data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
							<h6 className={`card-title ${classes.chatCardTitle}`}>{name}</h6>
							<p className={`card-text ${classes.chatCardMsg}`}>"{msg}"</p>
							<p className={`card-text`}>
								<small className="text-muted">{updated}</small>
							</p>
						</div>
					</div>
				</div>
				<div id={`collapse${name}`} className={`collapse col-6 ${classes.chatBox}`} aria-labelledby={`${name}Card`} data-parent="#chatCards">
					<div className="card-body mx-sm-3 md-2">
						vous: on mange quand ? (3 minutes ago)
						<br></br>
						je test
						<br></br>
						je test
						<br></br>
						je test
						<br></br>
						je test
						<br></br>
						je test
						<br></br>
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
		var arr = datas.map(item => this.cardItem(item.img, item.name, item.msg, item.updated));
		return arr;
	}

	render() {
		//     if (!KwiliApi.isConnected())
		//         return <NotLogged/>;
		//         if (KwiliApi.isConnected() === false)
		//         return KwiliCommon.notLoggedPage();
		//     if (!this.state.user)
		//         return KwiliCommon.loadingScreenPage();
		var datas = [
			{
				img: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-1/c336.233.182.182a/s50x50/17990928_1293295337374153_6142262363840219098_n.jpg?_nc_cat=110&_nc_oc=AQk4yy9M65uwDj80JGXl6WMcmIG88Lm42YDrSUQxwM98J-pD6VHJjUEqjdHJKozGrsI&_nc_ht=scontent-gmp1-1.xx&oh=202cad3abf1a745aa78b86c7aba4a16e&oe=5DFA644B",
				name: "Ludwig",
				msg: "vous: On va manger ?",
				updated: "3 minutes ago",
				histo: [{
					date: "hier",
					name: "Ludwig",
					msg: "Demain on va manger oû ?"
				},
				{
					date: "10h36",
					name: "vous",
					msg: "CAU burger ?"
				},
				{
					date: "11h57",
					name: "vous",
					msg: "On va manger ?"
				},
				],
			},
			{
				img: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-1/p50x50/32266385_1979705905580206_652268668834545664_n.jpg?_nc_cat=106&_nc_eui2=AeEmTPM-C2h04XH_BIHhxIWojlGFYjdAF08xjMi4xY6EH33-9UCRwYox99raWmV-9M-VFNe10EJUHzbosGbK5_jXIL_F-PXwhDAIGvv_-l3kIg&_nc_oc=AQkIqxtbHKdrPWV-VKEQ034XxEcY-U7UVHGkcPfS_ecu53OCdgiatacRhP03CnOvXmw&_nc_ht=scontent-gmp1-1.xx&oh=4b17e82fd654a67d437fe5b0fe5e89c6&oe=5DFF8B66",
				name: "Anatole",
				msg: "Anatole: T'es oû ?",
				updated: "4 hours ago",
			},
		];
		return (
			<div>
				<div className={`accordion ${classes.chat}`} id="chatCards">
					{this.loadChats(datas)}
				</div>
			</div>
		);
	}
}
