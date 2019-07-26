import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing/LandingPage';
// import Register from './Views/Register';
import Chat from './Components/Chat/View';
import Profile from './Components/Profile/Profile';
import Prescription from './Components/Prescription/View';
import Settings from './Components/Settings/Settings';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' render={() => (
                        <div>
                            <LandingPage />
                        </div>
                    )}/>
                    <Route exact={true} path='/login' component={Login}/>
                     {
                       // <Route exact={true} path='/register' component={Register}/>
                     }
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
