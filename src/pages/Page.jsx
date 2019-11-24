import React, { Component } from 'react';
import * as client from "client/index";
import GameStore from "store/game";

class Page extends Component {

    constructor(props) {
        super(props);

        this.onGameState = state => {
            const { name, roomId } = this.props.match.params;
            if (state == null) {
                if (!this.props.match.path.includes("lobby")) {
                    this.props.history.push(`/lobby/${name}/${roomId}`);
                }
            } else {
                if (!this.props.match.path.includes("game")) {
                    this.props.history.push(`/game/${name}/${roomId}`);
                }
            }
        };

        this.init = () => {
            const { name, roomId } = this.props.match.params;
            const connectionInfo = client.getConnectionInfo();

            if (connectionInfo.roomId !== roomId || connectionInfo.name !== name) {
                client.disconnect();
            }
            client.connect(name, roomId);
        };
    }

    componentDidMount() {
        this.gameStateKey = GameStore.addListener(this.onGameState);
        this.onGameState(GameStore.getValue());
        this.init();
    }

    componentDidUpdate(prevProps) {
        const { prevName, prevRoomId } = prevProps.match.params;
        const { name, roomId } = this.props.match.params;

        if (prevName !== name || prevRoomId !== roomId) {
            this.init();
        }
    }

    componentWillUnmount() {
        GameStore.removeListener(this.gameStateKey);
    }
}

export default Page;
