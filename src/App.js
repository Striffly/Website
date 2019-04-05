import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Index from './Views/Index';

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
                </div>
            </BrowserRouter>
        );
    }
}   

export default App;