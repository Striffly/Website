import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from './Views/Index';
import Login from './Views/Login';
import Register from './Views/Register';
import Chat from './Views/Chat';
import Profile from './Views/Profile';
import Prescription from './Views/Prescription';
import Settings from './Views/Settings';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' render={() => (
                        <div>
                            <Index />
                        </div>
                    )}/>
                    <Route exact={true} path='/login' component={Login}/>
                    <Route exact={true} path='/register' component={Register}/>
                    <Route exact={true} path='/chat' component={Chat}/>
                    <Route exact={true} path='/profile' component={Profile}/>
                    <Route exact={true} path='/prescription' component={Prescription}/>
                    <Route exact={true} path='/profile/settings' component={Settings}/>
                </div>
            </BrowserRouter>
        );
    }
}   

export default App;