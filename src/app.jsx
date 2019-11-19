import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LobbyPage from 'pages/LobbyPage';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/lobby">
                        <LobbyPage/>
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
