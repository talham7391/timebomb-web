import React, { Component } from "react";
import * as s from './styles';

class SnipsDisplay extends Component {

    render() {
        return (
            <s.SnipsDisplay className={this.props.show ? "show" : ""}>
                <img src="https://i.imgur.com/Sjm4Dva.png"/>
                <p>You have the snips!</p>
            </s.SnipsDisplay>
        );
    }
}

export default SnipsDisplay;
