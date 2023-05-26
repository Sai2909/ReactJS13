import React,{useReducer, useState} from "react";

const initialState = {count:0};
function reducer(state,action){
    switch(action.type){
        case 'increment':
        return{count:state.count+1};
        case 'decrement':
        return{count:state.count-1};
        default:
            throw new Error();
    }
}

export default function UserReducerComponent(){
    const [state , dispatch]=useReducer(reducer,initialState);


    return(

        <center>
        <h1>Count:{state.count}</h1>
        <button className="btn btn-danger" onClick={()=>dispatch({type:'decrement'})} style={{width:'50px'}}>-</button>
        <button  className="btn btn-success" onClick={()=>dispatch({type:'increment'})}style={{width:'50px'}}>+</button>
        </center>
    )
}