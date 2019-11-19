import React, { Component } from 'react';
import * as s from "./styles";
import { Header, Button, Form } from 'semantic-ui-react';
import * as client from 'client';

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            creatingGame: false,
            joiningGame: false,
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
                // transition to game lobby
            } catch {
                // show the error
            }
            this.setState({ creatingGame: false });
        };

        this.onJoinGame = async () => {
            this.setState({ joiningGame: true });
            const roomId = undefined;
            if (await client.checkGame(roomId)) {
                // transition to game lobby
            } else {
                // show some error
            }
            this.setState({ joiningGame: false });
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
                        </s.Buttons>
                    </s.Menu>
                </s.Container>
            </s.HomePage>
        );
    }
}

export default HomePage;