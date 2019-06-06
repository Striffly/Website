import '../Public/Chat.css'
import React, { Component } from 'react';
import CareChat from '../Chat';
import ChatView from '../Components/Chat'

export default class Chat extends Component {
    constructor() {
        super();
        this.socket = new CareChat('azeaze1az3e13az1e3', this.on_receive);
        this.socket.start();
    }
    on_send() {
        var msg = document.getElementById('m').value;
        if (msg.length === 0) {
            console.log("Not sending an empty message");
        }
        else if (this.socket.is_connected) {
            this.socket.send(msg);
            document.getElementById('m').value = "";
        }
        else {
            console.log("Can't send '" + msg + "', reconnecting to the server ...");
            document.getElementById('m').style.backgroundColor = "#"
        }
    }
    on_receive(message) {
        document.getElementById('messages').append('<li>' + message + '</li>');
    }
    render() {
        return (
          <ChatView />
            // <div className="container bg-faded box">
            //     <br></br><br></br><br></br>
            //     <div className="row list-group" id="messages" action="">
            //     </div>
            //     <div className="row input-group col-4 mx-auto chat-input">
            //         <input id="m" type="text" className="form-control" placeholder="Écrivez un message..." aria-label="Écrivez un message..." aria-describedby="basic-addon2" onSubmit={this.on_send.bind(this)}></input>
            //         <div className="input-group-append">
            //             <button className="btn btn-secondary" type="button" onClick={this.on_send.bind(this)}> Send </button>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
