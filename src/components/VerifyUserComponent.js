import React from "react";

export class VerifyUserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Users:
            [
            {UserName: 'john'},
            {UserName: 'john1'},
            {UserName: 'david'},
            {UserName: 'david_nit'}
            ],
        msg:''
    };
    this.handleUsername=this.handleUsername.bind(this);
}
handleUsername(e){
    for(var user of this.state.Users){
        if(user.UserName==e.target.value)
        {
            this.setState({
                
                msg:'invalid user',
            
                
            })
                break;
        }else{
                    this.setState({
                        msg:'Valid User'
                    })
                }
            
    }
    }

   

    
    render(){
        return(
            <div className="container-fluid">
            <input type= "text" onChange={this.handleUsername}></input>
            <br/>
            <p >{this.state.msg}</p>
            </div>
        )
    }
}
