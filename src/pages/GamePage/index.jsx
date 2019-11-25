import React from 'react';
import Page from 'pages/Page';
import * as s from './styles';
import GameStore from 'store/game';
import MyInfoStore from "store/myInfo";
import RoomIdDisplay from "components/RoomIdDisplay";
import SnipsDisplay from "components/SnipsDisplay";
import InfoDisplay from "components/InfoDisplay";

class GamePage extends Page {

    constructor(props) {
        super(props);

        this.state = {
            myInfo: null,
            gameState: null,
        };

        this.onMyInfo = info => {
            console.log(info);
            this.setState({ myInfo: info });
        };

        this.gamePageOnGameState = state => {
            this.setState({ gameState: state });
        };

        this.hasSnips = () => {
            const idx = this.state.myInfo && this.state.myInfo.index;
            const snipsIdx = this.state.gameState && this.state.gameState.playerIndexWithSnips;
            return idx != null && idx === snipsIdx;
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
                </s.Container>
                <RoomIdDisplay roomId={this.props.match.params.roomId}/>
                <SnipsDisplay show={this.hasSnips()}/>
                <InfoDisplay
                    isGood={this.state.myInfo && this.state.myInfo.data.role === "good"}/>
            </s.GamePage>
        );
    }
}

export default GamePage;