import React, { Component } from 'react';
import _ from 'lodash';
import * as s from './styles';
import * as client from 'client';
import RoomIdDisplay from "components/RoomIdDisplay";

class GamePage extends Component {

    componentDidMount() {
        const { name, roomId } = this.props.match.params;
        client.connectToService(name, roomId);
    }

    render() {
        return (
            <s.GamePage>
                <s.Container>
                </s.Container>
                <RoomIdDisplay roomId={this.props.match.params.roomId}/>
            </s.GamePage>
        );
    }
}

export default GamePage;