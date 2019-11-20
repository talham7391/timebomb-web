import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import * as s from './styles';

class JoinModal extends Component {

    constructor() {
        super();

        this.state = {
            roomId: "",
        };

        this.disableJoin = () => {
            return this.state.roomId == null || this.state.roomId === "";
        };

        this.onRoomIdChange = event => {
            this.setState({
                roomId: event.target.value,
            });
        };

        this.sendRoomId = () => {
            this.props.onRoomId(this.state.roomId);
        };
    }

    render() {
        return (
            <Modal size="mini" open={this.props.open} onClose={this.props.onClose}>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Room Id</label>
                            <input value={this.state.roomId} onChange={this.onRoomIdChange}/>
                        </Form.Field>
                    </Form>
                    <s.Buttons>
                        <Button
                            primary
                            disabled={this.disableJoin()}
                            onClick={this.sendRoomId}>
                            Join Game
                        </Button>
                    </s.Buttons>
                </Modal.Content>
            </Modal>
        );
    }
}

export default JoinModal;