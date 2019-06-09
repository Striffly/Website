// import '../Public/Profile.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, FormControl,
} from 'react-bootstrap';
import ChatBubble from 'react-chat-bubble';
import CareApi from '../api';
import Navbar from './Navbar';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.sentMessage = [<div>Test</div>];
    this.state = {
      messages: [{
        type: 0,
        image: 'user_default_avatar.png',
        text: 'Hello! Good Morning!',
      }, {
        type: 1,
        image: 'user_default_avatar.png',
        text: 'Hello! Good Afternoon!',
      }, {
        type: 0,
        image: 'user_default_avatar.png',
        text: 'Hello! Good Morning!',
      }, {
        type: 0,
        image: 'user_default_avatar.png',
        text: 'Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!Hello! Good Morning!',
      }],
      user: null,
      input: '',
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
    // alert(this.state.input);
    this.sentMessage.push(<div>{this.state.input}</div>);
    this.setState({ sentMessage: this.sentMessage });
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
              <ChatBubble messages={this.state.messages} />
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
