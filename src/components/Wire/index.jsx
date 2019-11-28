import React, { Component } from "react";
import * as s from "./styles";

class Index extends Component {

    constructor(props) {
        super(props);

        this.colorMap = {
            "dud": "black",
            "defuse": "green",
            "bomb": "red",
        };
    }

    render() {
        return (
            <s.Wire
                className={!!this.props.pulsate ? "pulsate" : ""}
                onClick={this.props.onClick}
                color={this.props.revealed ? this.colorMap[this.props.type] : "lightgray"}>
            </s.Wire>
        );
    }
}

export default Index;
