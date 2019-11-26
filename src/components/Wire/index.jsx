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
            <s.Wire color={this.colorMap[this.props.type]}>
            </s.Wire>
        );
    }
}

export default Index;
