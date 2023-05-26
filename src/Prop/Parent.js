 import React from "react";
 import Child from "./Child";
 export default class Parent extends React.Component {
    doSomething() {
        console.log("Parent component");
    }
    render() {
        return <div>
            <Child
                text="This is the child number 1"
                title="Title 1"
                onClick={this.doSomething} />
            <Child
                text="This is the child number 2"
                title="Title 2"
                onClick={this.doSomething} />
        </div>
    }
}
