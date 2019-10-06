import { Link } from "react-router-dom";
import React from "react";
import classes from '../../../Styles.scss';

const NotLogged = () => (
        <div className={classes.centerScreen}>
            <h1>You must be connected to access this page</h1>
            <Link to="/login" className="btn btn-warning btn-space">Login</Link>
        </div>
    );
export default NotLogged;