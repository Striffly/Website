import '../Public/Settings.css';
import '../Public/Common.css';
import EpicareCommon from '../common'
import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import CareApi from '../api';

export default class Settings extends Component {
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
                console.log(this.state.user);
            }
        };
        this.handleChange = (event) => {
            let user = this.state.user;
            user[event.target.id] = event.target.value;
            this.setState({
                user: user,
            });
        }
    }
    componentWillMount() {
        if (CareApi.isConnected())
            CareApi.getProfileInfo().then(this.refreshInfo);
    }
    render() {
        if (CareApi.isConnected() === false)
            return EpicareCommon.notLoggedPage();
        if (!this.state.user)
            return EpicareCommon.loadingScreenPage();
        return (
            <div className="center-screen">
                <div className="box glob col-6 glob">
                    <div className="input-borders col-11">
                        <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.user.name} onChange={this.handleChange} />
                        <input type="text" className="form-control" id="last_name" placeholder="Lastname" value={this.state.user.last_name} onChange={this.handleChange} />
                        <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.user.email} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-lg btn-success">Accept changes</button>
                </div>
            </div>
        );
    }
}
