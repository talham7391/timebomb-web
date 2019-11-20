import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LobbyPage from 'pages/LobbyPage';
import GamePage from 'pages/GamePage';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/lobby/:name/:roomId" component={LobbyPage}/>
                    <Route path="/game/:name/:roomId" component={GamePage}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
