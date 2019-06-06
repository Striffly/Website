import React from "react";
import Navbar from "../Components/Navbar";
import CareApi from "../api";
import NotLogged from "../Components/NotLogged";

export default class Prescription extends React.Component {
    render() {
        if (!CareApi.isConnected())
            return (<NotLogged/>);
        return (
            <Navbar/>
        )
    }
}