import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Public/Index.css';

export default class Tiles extends Component {

    render() {
        return (
            <div className="container">
                <div className="items">
                    <div className="textbox left">
                        <div className="textbox-title">
                            <h3>Chat en ligne</h3>
                        </div>
                        <div className="textbox-text">
                            <p>Ce chat entre le médecin et le patient, permet de demander et de donner des informations complémentaires concernant le suivi d'un traitement.</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../Images/Chat.jpg")} className="img-thumbnail" style={{ height: 'auto', width: 'auto', maxWidth: '300px', maxHeight: '300px' }} alt="chat"></img>
                    </div>
                </div>
            </div>
        )
    }
}