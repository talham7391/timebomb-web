import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/index';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch exact path="/">
                    <HomePage/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
