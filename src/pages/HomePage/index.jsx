import React, { Component } from 'react';
import * as s from "./styles";
import { Header, Button, Form } from 'semantic-ui-react';

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
        };

        this.setName = event => {
            this.setState({
                name: event.target.value,
            });
        };

        this.isNameMissing = () => {
            return this.state.name == null || this.state.name === "";
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
                                        onChange={this.setName}/>
                                </Form.Field>
                            </Form>
                        </s.Form>
                        <s.Buttons>
                            <Button primary disabled={this.isNameMissing()}>Create Game</Button>
                            <Button disabled={this.isNameMissing()}>Join Game</Button>
                        </s.Buttons>
                    </s.Menu>
                </s.Container>
            </s.HomePage>
        );
    }
}

export default HomePage;