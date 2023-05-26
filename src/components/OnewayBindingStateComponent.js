import React from "react";

export class OnewayBindingStateComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Name:'Dog',
            Age:20,
            Stock:'true',
            City:['jagitial','karimnagar'],
            Rating:{rate:4.5, cost:6700}


        }
    }
   


    render(){
        return(
            <div className="container-fluid">
                <h2>Dogs Adda</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Age</dt>
                    <dd>{this.state.Age}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock==true)?"Availbale":"not available"}</dd>
                    <dt>City</dt>
                    <dd>{
                       this.state.City.map(Citys=>
                            <li>{Citys}</li>
                            )
                        }</dd>
                        <dt>Rating</dt>
                        <dd><span className="bi bi-star-fill text-success"></span> {this.state.Rating.rate} [{this.state.Rating.cost}]</dd>

                </dl>

            </div>
        )
    }
}