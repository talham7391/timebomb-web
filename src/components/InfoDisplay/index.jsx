import React, { Component } from "react";
import * as s from "./styles";
import _ from "lodash";
import { Modal, Button, Header } from "semantic-ui-react";
import Wire from "components/Wire";

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

        this.getWiresOfType = type => {
            return _.filter(this.props.wires, wire => wire.type === type).length;
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
                                <s.WiresContainer>
                                    { _.map(["dud", "defuse", "bomb"], type => (
                                        <s.WireTypeContainer key={type} amount={this.getWiresOfType(type)}>
                                            <Wire type={type} revealed={true}/>
                                            <Header as="h1">x{this.getWiresOfType(type)}</Header>
                                        </s.WireTypeContainer>
                                    ))}
                                </s.WiresContainer>
                                <Button onClick={this.onClose}>Done</Button>
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
