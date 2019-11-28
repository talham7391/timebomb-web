import React, { Component } from "react";
import * as s from "./styles";
import { Header, Button } from "semantic-ui-react";

class RoundHudDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDefusesFound: false,
        };

        this.showNumber = () => {
            this.setState({
                showDefusesFound: true,
            });

            setTimeout(() => {
                this.setState({
                    showDefusesFound: false,
                });
            }, 1000);
        };
    }

    render() {
        return (
            <s.RoundHudDisplay>
                { this.state.showDefusesFound ?
                    <Header as="h1">{this.props.defusesFound}</Header>
                :
                    <Button onClick={this.showNumber}>Show Defuses Found</Button>
                }
            </s.RoundHudDisplay>
        );
    }
}

export default RoundHudDisplay;
