import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Public/Index.css';
import Contact from '../Components/Contact';
import Tiles from '../Components/Tiles'

export default class Timeline extends Component {
  
    render () {                                   
        return (
            <div>
                <div className="overlay">
                    <div className="overlay-text">
                        <div className="overlay-title">Epicare</div>
                        <p>Ma santé dans ma poche</p>
                        <a href="#ov1" id="but" className="overlay-button">En savoir plus</a>
                    </div>
                    <div className="first-shape"></div>
                    <div className="second-shape"></div>
                </div>

                <div>
                    <div className="container" id="ov1">
                        <div className="container-intro">
                            <div className="intro-title">Notre vision</div>
                            <p>Proposant entre autres un chat instantané avec le médecin, EpiCare est une application mobile ayant pour but de simplifier et centraliser les échanges entre professionnels de la santé et patients.</p>
                        </div>
                        <div className="items">
                            <div className="textbox right">
                                <div className="textbox-title">
                                    <h3>Ordonnances en ligne</h3>
                                </div>
                                <div className="textbox-text">
                                    <p>Partagée directement entre le personnel médical et le patient, l'ordonnance en ligne permet de diminuer l'utilisation de papier ainsi que les temps d'attentes chez le pharmacien.</p>
                                </div>
                            </div>
                            <div className="left">
                                <img src={require("../Images/Ordonnance.jpg")} className="img-thumbnail" alt="ordonnance"></img>
                            </div>
                        </div>
                    </div>

                    <Tiles title="Chat en ligne" img="Chat.jpg" content="Ce chat entre le médecin et le patient, permet de demander et de donner des informations complémentaires concernant le suivi d'un traitement." />
                    
                    <Tiles title="Notifications et rappels" img="Notification.jpg" content="Des notifications permettant au patient de ne pas oublier de prendre son traitement, ainsi qu'un système de rappel des vaccins à venir." />

                    <div className="container">
                        <div className="items">
                            <div className="textbox left">
                                <div className="textbox-title">
                                    <h3>Télé-consultations</h3>
                                </div>
                                <div className="textbox-text">
                                    <p>Un système de télé-consultations remboursées par la sécurité sociale permettant de réduire les déplacements et d'apporter une solution aux déserts médicaux.</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={require("../Images/Teleconsultation.jpg")} alt="tele" className="img-thumbnail" style={{height: 'auto', width: 'auto', maxWidth: '300px', maxHeight: '300px'}}></img>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="items">
                            <div className="textbox right">
                                <div className="textbox-title">
                                    <h3>Urgence ou pas ?</h3>
                                </div>
                                <div className="textbox-text">
                                    <p> Grace aux médecins disponible en ligne, vous savez immédiatement si votre blessure nécessite un traitement d'urgence ou si un simple rendez-vous suffit. </p>
                                </div>
                            </div>
                            <div className="left">
                                <img src={require("../Images/DMP.jpg")} alt="dmp" className="img-thumbnail" style={{height: 'auto', width: 'auto', maxWidth: '300px', maxHeight: '300px'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        )
    }
}
