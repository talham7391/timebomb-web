import React, { Component } from 'react';
import _ from 'lodash';
import * as s from './styles';
import * as client from 'client';
import * as playersStore from 'store/players';
import { Header, List, Button } from 'semantic-ui-react';
import RoomIdDisplay from "components/RoomIdDisplay";

class LobbyPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            connectedPlayers: [],
        };

        this.onConnectedPlayers = players => {
            this.setState({
                connectedPlayers: players,
            });
        };

        this.onStartGame = () => {
            client.startGame();
        };
    }

    componentDidMount() {
        playersStore.addListener(this.onConnectedPlayers);
        this.onConnectedPlayers(playersStore.connectedPlayers);

        const { name, roomId } = this.props.match.params;
        client.connectToService(name, roomId);
    }

    componentWillUnmount() {
        playersStore.removeListener(this.onConnectedPlayers);
    }

    render() {
        return (
            <s.LobbyPage>
                <s.Container>
                    <Header as="h1">Connected Players</Header>
                    <s.ConnectedPlayers>
                        <List bulleted>
                            { _.map(this.state.connectedPlayers, player => (
                                <List.Item key={player}>{player}</List.Item>
                            )) }
                        </List>
                    </s.ConnectedPlayers>
                    <s.Buttons>
                        <Button
                            disabled={this.state.connectedPlayers.length < 4 || this.state.connectedPlayers.length > 8}
                            onClick={this.onStartGame}
                            primary>
                            Start Game
                        </Button>
                    </s.Buttons>
                </s.Container>
                <RoomIdDisplay roomId={this.props.match.params.roomId}/>
            </s.LobbyPage>
        );
    }
}

export default LobbyPage;