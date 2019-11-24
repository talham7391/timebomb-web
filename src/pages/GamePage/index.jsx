import React from 'react';
import Page from 'pages/Page';
import * as s from './styles';
import RoomIdDisplay from "components/RoomIdDisplay";
import MyInfoStore from "store/myInfo";

class GamePage extends Page {

    constructor(props) {
        super(props);

        this.onMyInfo = info => {
            console.log(info);
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.myInfoStoreKey = MyInfoStore.addListener(this.onMyInfo);
        this.onMyInfo(MyInfoStore.getValue());
    }

    componentWillUnmount() {
        MyInfoStore.removeListener(this.myInfoStoreKey);
        super.componentWillUnmount()
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