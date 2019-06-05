import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class EpicareCommon extends Component {
    static notLoggedPage() {
        return (
            <div className="center-screen">
                <h1>You must be connected to access this page</h1>
                <Link to="/login" className="btn btn-warning btn-space">Login</Link>
            </div>
        );
    }
}