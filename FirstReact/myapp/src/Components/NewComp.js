import React, { Component } from 'react'
import BellA from "./BellA.png"
import BellB from "./BellB.png"
export class NewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Subscribe",
            sub: "Subscribe",
            img_url: BellB
        };
    }
    ButtonChange = () => {
        this.setState({
            message: "Hit the bell icon",
            sub: "Subscribed"
        });
    };
    styles = {
        fontStyles: "italic",
        color: "red"
    };
    imageChange = () => {
        this.setState({
            img_url: BellA,
            message: "Thank You !"
        })
    }
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p />
                <img style={{ width: "30px", height: "30px" }} src={this.state.img_url} onClick={this.imageChange} alt=""></img>
            </div>
        )
    }
}

export default NewComp
