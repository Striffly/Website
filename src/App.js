import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Index from './Views/Index';
import Login from './Views/Login';

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
                    <Route exact={true} path='/login' render={() => (
                        <div>
                            <Login />
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}   

export default App;