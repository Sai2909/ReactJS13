import React from "react";
export default  class Child extends React.Component {
    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.text}</h2>
        </div>
    }
}