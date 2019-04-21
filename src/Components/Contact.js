import React, { Component } from 'react';

import '../Public/Contact.css';

export default class Timeline extends Component { 

    render () {                                   
          return (
              <div className="contact">
                <div className="container" style={{textAlign: "center"}}>

                    <h1 id="contact-title">Nous contacter</h1>
                    <form action="/api/contact" method="POST">
                    <input type="text" id="name" name="name" placeholder="Nom"></input>

                    <input type="text" id="email" name="email" placeholder="Email"></input>

                    {/* 
                    <input type="text" id="subject" name="subject" placeholder="Subject"></input>
                    */}
                    
                    <div className="contact-bottom">
                        <textarea id="message" name="message" placeholder="Message" style={{height: '200px'}}></textarea>

                        <br></br>

                        <input type="submit" value="Envoyer"></input>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}