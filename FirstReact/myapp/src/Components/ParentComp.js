import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Yo"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Yo"
            });
        }, 3000);
    }
    render() {
        console.log("Parent Rendered")
        return (
            <div>
                This is a parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        );
    }
}

export default ParentComp
