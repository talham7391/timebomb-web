import React from 'react';
import Page from 'pages/Page';
import * as s from './styles';
import _ from "lodash";
import * as client from "client";
import GameStore from 'store/game';
import MyInfoStore from "store/myInfo";
import RoomIdDisplay from "components/RoomIdDisplay";
import SnipsDisplay from "components/SnipsDisplay";
import InfoDisplay from "components/InfoDisplay";
import Wire from "components/Wire";
import { sleep } from "utils/index";

class GamePage extends Page {

    constructor(props) {
        super(props);

        this.state = {
            myInfo: null,
            gameState: null,
        };

        this.onMyInfo = info => {
            if (this.state.myInfo == null || info == null) {
                this.setState({ myInfo: info });
                return;
            }

            if (this.state.myInfo.data.wires.length !== info.data.wires.length) {
                setTimeout(() => {
                    this.setState({ myInfo: info });
                }, 3500);
            }
        };

        this.gamePageOnGameState = state => {
            this.setState({ gameState: state });
        };

        this.hasSnips = () => {
            const idx = this.state.myInfo && this.state.myInfo.index;
            const snipsIdx = this.state.gameState && this.state.gameState.playerIndexWithSnips;
            return idx != null && idx === snipsIdx;
        };

        this.onWireClicked = async idx => {
            try {
                this.state.myInfo.data.wires[idx].pulsate = true;
                this.setState({ myInfo: this.state.myInfo });

                const type = await client.snipWire(idx);
                console.log(type);
                await sleep(1500);

                this.state.myInfo.data.wires[idx].revealed = true;
                this.state.myInfo.data.wires[idx].pulsate = false;
                this.setState({ myInfo: this.state.myInfo });
            } catch (err) {
                console.log(err);
            }
        };
    }

    componentDidMount() {
        super.componentDidMount();

        this.myInfoStoreKey = MyInfoStore.addListener(this.onMyInfo);
        this.onMyInfo(MyInfoStore.getValue());

        this.gamePageOnGameStateKey = GameStore.addListener(this.gamePageOnGameState);
        this.gamePageOnGameState(GameStore.getValue());
    }

    componentWillUnmount() {
        MyInfoStore.removeListener(this.myInfoStoreKey);
        GameStore.removeListener(this.gamePageOnGameStateKey);
        super.componentWillUnmount()
    }

    render() {
        return (
            <s.GamePage>
                <s.Container>
                    { _.map(this.state.myInfo && this.state.myInfo.data.wires, (wire, idx) => (
                        <s.WireContainer key={idx}>
                            <Wire
                                pulsate={!!wire.pulsate}
                                type={wire.type}
                                revealed={wire.revealed}
                                onClick={() => { this.onWireClicked(idx) }}/>
                        </s.WireContainer>
                    )) }
                </s.Container>
                <RoomIdDisplay roomId={this.props.match.params.roomId}/>
                <SnipsDisplay show={this.hasSnips()}/>
                <InfoDisplay
                    isGood={this.state.myInfo && this.state.myInfo.data.role === "good"}
                    wires={this.state.myInfo && this.state.myInfo.data.wires}/>
            </s.GamePage>
        );
    }
}

export default GamePage;