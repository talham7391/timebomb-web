import React, { Component } from "react";
import * as s from "./styles";
import { Modal, Button, Header } from "semantic-ui-react";

class InfoDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showInfo: false,
            bleedWarning: false,
        };

        this.onClose = () => {
            this.setState({showInfo: false});
        };

        this.showModal = () => {
            this.setState({
                showInfo: true,
                bleedWarning: false,
            });
        };

        this.onReady = () => {
            this.setState({bleedWarning: true});
        };
    }

    render() {
        return (
            <s.InfoDisplay>
                <s.InfoButton onClick={this.showModal}>
                    <img src="https://i.imgur.com/B5GDkXz.png"/>
                </s.InfoButton>
                <Modal
                    size="mini"
                    open={this.state.showInfo}
                    onClose={this.onClose}>
                    <Modal.Content>
                        { this.state.bleedWarning ?
                            <s.InfoContainer>
                                <s.RoleContainer roleColor={ this.props.isGood ? "green" : "red" }>
                                    <Header as="h3">Role:</Header>
                                    <Header as="h3">
                                        { this.props.isGood ? "Good" : "Bad" }
                                    </Header>
                                </s.RoleContainer>
                            </s.InfoContainer>
                        :
                            <s.WarningContainer>
                                <p>Make sure no one can see your screen.</p>
                                <Button primary onClick={this.onReady}>Ready</Button>
                            </s.WarningContainer>
                        }
                    </Modal.Content>
                </Modal>
            </s.InfoDisplay>
        );
    }
}

export default InfoDisplay;
