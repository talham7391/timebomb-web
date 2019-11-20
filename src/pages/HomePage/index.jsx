import React, { Component } from 'react';
import * as s from "./styles";
import { Header, Button, Form } from 'semantic-ui-react';
import * as client from 'client';
import JoinModal from './JoinModal';

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            creatingGame: false,
            joiningGame: false,
            showJoinModal: false,
        };

        this.setName = event => {
            this.setState({
                name: event.target.value,
            });
        };

        this.isNameMissing = () => {
            return this.state.name == null || this.state.name === "";
        };

        this.isMakingRequest = () => {
            return this.state.creatingGame || this.state.joiningGame;
        };

        this.shouldDisableButton = () => {
            return this.isNameMissing() || this.isMakingRequest();
        };

        this.onCreateGame = async () => {
            this.setState({ creatingGame: true });
            try {
                const roomId = await client.createGame();
                this.gotoLobby(roomId);
            } catch {
                // show the error
            }
            this.setState({ creatingGame: false });
        };

        this.onJoinGame = async () => {
            this.setState({showJoinModal: true});
        };

        this.onRoomId = async roomId => {
            this.setState({
                showJoinModal: false,
                joiningGame: true,
            });
            if (await client.checkGame(roomId)) {
                this.gotoLobby(roomId);
            } else {
                // show some error
            }
            this.setState({ joiningGame: false });
        };

        this.closeJoinModal = () => {
            this.setState({showJoinModal: false});
        };

        this.gotoLobby = roomId => {
            this.props.history.push(`/lobby/${this.state.name}/${roomId}`);
        };
    }

    render() {
        return (
            <s.HomePage>
                <s.Container>
                    <s.Title>
                        <Header as="h1">Time Bomb</Header>
                        <img src="https://i.imgur.com/nsdtV4h.png"/>
                    </s.Title>
                    <s.Description>
                        <p>A game of lies and deception!</p>
                    </s.Description>
                    <s.Menu>
                        <s.Form>
                            <Form>
                                <Form.Field required>
                                    <label>Name</label>
                                    <input
                                        placeholder="bobby"
                                        value={this.state.name}
                                        onChange={this.setName}
                                        disabled={this.isMakingRequest()}/>
                                </Form.Field>
                            </Form>
                        </s.Form>
                        <s.Buttons>
                            <Button
                                primary
                                loading={this.state.creatingGame}
                                onClick={this.onCreateGame}
                                disabled={this.shouldDisableButton()}>
                                Create Game
                            </Button>
                            <Button
                                loading={this.state.joiningGame}
                                onClick={this.onJoinGame}
                                disabled={this.shouldDisableButton()}>
                                Join Game
                            </Button>
                            <JoinModal
                                open={this.state.showJoinModal}
                                onClose={this.closeJoinModal}
                                onRoomId={this.onRoomId}/>
                        </s.Buttons>
                    </s.Menu>
                </s.Container>
            </s.HomePage>
        );
    }
}

export default HomePage;