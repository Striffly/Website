// import '../Public/Profile.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, FormControl,
} from 'react-bootstrap';
import { ChatFeed, Message } from 'react-chat-ui';
import CareApi from '../api';
import Navbar from './Navbar';

// Ajout du fichier css
// import '../Public/Chat.css';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        new Message({ id: 1, message: "Bienvenue sur la plateforme Epicare ! Que pouvons-nous faire pour vous aujourd'hui ?", senderName: 'Epicare Bot' }),
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.refreshInfo = (response) => {
      if (response != null) {
        console.log(response.data.user);
        this.setState({
          user: response.data.user,
        });
      }
    };
  }

  componentWillMount() {
    CareApi.getProfileInfo().then(this.refreshInfo);
  }

  notLoggedPage() {
    return (
          <div className="center-screen">
              <h1>You must be connected to access this page</h1>
                <Link to="/login" className="btn btn-warning btn-space">Login</Link>
            </div>
        );
    }
    loadingScreenPage() {
        return (
            <div className="center-screen">
                <h1>Loading ...</h1>
            </div>
        );
    }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  sendMessage() {
    const messages = this.state.messages;
    if ((typeof this.state.input !== 'undefined') && (this.state.input !== '')) {
      messages.push(new Message({ id: 0, message: this.state.input }));
      messages.push(new Message({ id: 1, message: "Désolé, je n'ai pas compris votre question :'(", senderName: 'Epicare Bot' }));
      messages.push(new Message({ id: 1, message: "Essayez avec l'un des mots suivants : chat, ordonnances.", senderName: 'Epicare Bot' }));
    }
    this.setState({ input: '' });
  }

  render() {
    if (!CareApi.isConnected()) {
      return this.notLoggedPage();
    }
    if (!this.state.user) {
      return this.loadingScreenPage();
    }
    const displayName = `${this.state.user.last_name} ${this.state.user.name}`;
    return (
      <div>
        <Navbar />
        {
        // <div className="jumbotron">
        //   <h1 className="display-4">{this.state.user.name}</h1>
        //   <p className="lead">{this.state.user.last_name}</p>
        //   <p className="lead">{this.state.user.email}</p>
        // </div>
      }
        <Container>
          <Row style={{ border: '1px solid' }}>
            <Col sm={1} style={{ paddingTop: '25px', paddingBottom: '25px' }}>
              <img alt="avatar" style={{ width: '100%', height: 'auto' }} src={`${process.env.PUBLIC_URL}/user_default_avatar.png`} />
            </Col>
            <Col sm={2} style={{ paddingTop: '30px', paddingBottom: '25px' }}>{displayName}</Col>
          </Row>
          <Row style={{ borderLeft: '1px solid', borderRight: '1px solid', height: '70vh', overflowY: 'scroll' }}>
            <Col>
              {
                // <ChatBubble messages={this.state.messages} />
              }
              <ChatFeed
                messages={this.state.messages} // Boolean: list of message objects
                isTyping={this.state.is_typing} // Boolean: is the recipient typing
                hasInputField={false} // Boolean: use our input, or use your own
                showSenderName // show the name of the user who sent the message
                bubblesCentered={false} // Boolean should the bubbles be centered in the feed?
                // JSON: Custom bubble styles
                bubbleStyles={
                  {
                    chatbubble: {
                      color: '#00FF00',
                    },
                  }
                }
              />
            </Col>
          </Row>
          <Row style={{ border: '1px solid', height: '5vh' }}>
            <Col sm={11}>
              <FormControl style={{ height: '4vh', resize: 'none' }} value={this.state.input} as="textarea" aria-label="With textarea" placeholder="Envoyer un message" onChange={this.handleChange} />
            </Col>
            <Col sm={1}>
              <button type="button" onClick={this.sendMessage}>
                <i className="far fa-2x fa-paper-plane" />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
