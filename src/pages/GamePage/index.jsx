import React, { Component } from 'react';
import _ from 'lodash';
import * as s from './styles';
import * as client from 'client';
import RoomIdDisplay from "components/RoomIdDisplay";
import * as myInfoStore from "store/myInfo";
import * as gameStore from "store/game";

class GamePage extends Component {

    constructor(props) {
        super(props);

        this.onGameState = state => {
            console.log(state);
        };

        this.onMyInfo = info => {
        };
    }

    componentDidMount() {
        myInfoStore.addListener(this.onMyInfo);
        this.onMyInfo(myInfoStore.myInfo);

        gameStore.addListener(this.onGameState);
        this.onGameState(gameStore.gameState);

        const { name, roomId } = this.props.match.params;
        client.connectToService(name, roomId);
    }

    componentWillUnmount() {
        myInfoStore.removeListener(this.onMyInfo);
        gameStore.removeListener(this.onGameState);
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