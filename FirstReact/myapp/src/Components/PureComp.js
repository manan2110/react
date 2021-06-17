import React, { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component rendered")
        return <div>This is a pure component{this.props.name}</div>;
    }
}
export default PureComp;
//Pure Components are not re-rendered unless the state and props are changed
//Pure components optimize react code and imporves performance