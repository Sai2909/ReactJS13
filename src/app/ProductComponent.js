import React from "react";

export default class ProductComponent extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            UserName: 'John'
        }
       // this.handleUserChange = this.handleUserChange.bind(this);
    }

    handleUserChange(e){
        this.setState({
            UserName: e.target.value
        })
    }
    
    render(){
        return(
            <div className="container-fluid bg-black w-25 h-25">
                <center>
                <h2 style={{color:'white'}}>Enter Product Name:</h2>
               <input type="text" onChange={this.handleUserChange.bind(this)} />
               <br/>
               <h3 style={{color:'white'}} > {this.state.UserName}<span className="bi bi-emoji-laughing"></span></h3>

                </center>
              
            </div>
        )

    }
}

