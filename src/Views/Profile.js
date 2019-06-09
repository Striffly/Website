import '../Public/Profile.css';
import '../Public/Common.css';
import EpicareCommon from '../common'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CareApi from '../Api/api';
import NotLogged from "../Components/NotLogged";

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
        if (CareApi.isConnected())
            CareApi.getProfileInfo().then(this.refreshInfo);
    }
    render() {
        if (!CareApi.isConnected())
            return (<NotLogged/>);
        if (CareApi.isConnected() === false)
            return EpicareCommon.notLoggedPage();
        if (!this.state.user)
            return EpicareCommon.loadingScreenPage();
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{this.state.user.name}</h1>
                    <p className="lead">{this.state.user.last_name}</p>
                    <p className="lead">{this.state.user.email}</p>
                    <hr className="my-4" />
                    <p>{this.state.user.type}</p>
                    <p className="lead">
                        <Link className="btn btn-lg btn-warning btn-space" to="/profile/settings">Settings</Link>
                        <Link className="btn btn-lg btn-outline-danger btn-space" to="/login" onClick={CareApi.logout}>Logout</Link>
                    </p>
                </div>
            </div>
        );
    }
}