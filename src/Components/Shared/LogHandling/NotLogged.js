import {Link} from "react-router-dom";
import React from "react";

const NotLogged = () => (
        <div className="center-screen">
            <h1>You must be connected to access this page</h1>
            <Link to="/login" className="btn btn-warning btn-space">Login</Link>
        </div>
    );
export default NotLogged;