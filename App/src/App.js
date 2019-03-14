import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Timeline from './Views/Timeline';
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

                    <Route exact={true} path='/timeline' render={() => (
                        <div>
                        <Timeline />
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}   

export default App;