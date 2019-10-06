import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class KwiliCommon extends Component {
    static notLoggedPage() {
        return (
            <div className="centerScreen">
                <h1>You must be connected to access this page</h1>
                <Link to="/login" className="btn btn-warning btn-space">Login</Link>
            </div>
        );
    }
    static loadingScreenPage() {
        return (
            <div className="centerScreen">
                <h1>Loading ...</h1>
                <button className="btn btn-lg btn-warning" onClick={this.refreshInfo}>Too long ?</button>
            </div>
        );
    }
}