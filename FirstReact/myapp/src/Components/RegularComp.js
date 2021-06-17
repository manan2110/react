import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log("Rendered Regular Component")
        return (
            <div>
                This is a Regular Compononet {this.props.name}
            </div>
        )
    }
}

export default RegularComp;
