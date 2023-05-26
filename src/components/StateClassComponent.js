import React from "react";

export default class StateClassComponent extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            UserName: 'John',
            Age:20
        }
        //this.handleUserChange = this.handleUserChange.bind(this);
    }

    handleUserChange(e){
        this.setState({
            UserName: e.target.value,
            Age:this.state.Age
        })
    }
   
    handleAge(e){
        this.setState({
            UserName: this.state.UserName,
            Age:e.target.value
        })
    }

    render(){
        return(
            <div className="container-fluid">
               <h2>User Details</h2>
               <input type="text" placeholder="UserNAME" onChange={this.handleUserChange.bind(this)} />
               <br/>
               <input type="number" onChange={this.handleAge.bind(this)}/>
               <br/>
               <p>Hello ! {this.state.UserName}</p>
               <p>Your Age is:{this.state.Age}</p>
            </div>
        )

    }
}
