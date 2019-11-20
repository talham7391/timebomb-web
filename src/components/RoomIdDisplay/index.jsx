import React, { Component } from 'react';
import * as s from './styles';
import { Header } from 'semantic-ui-react';

class RoomIdDisplay extends Component {

    render() {
        return (
            <s.RoomIdDisplay>
                <p>Room Id</p>
                <Header as="h1">{this.props.roomId}</Header>
            </s.RoomIdDisplay>
        );
    }
}

export default RoomIdDisplay;
