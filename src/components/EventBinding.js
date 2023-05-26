import React, { useState } from "react";
export  function EventBindingComponent(){

    const[Username,setUsername]=useState('sai');

    function userhandler(e){
        setUsername(e.target.value);
       
    }
    

    return(
        <div>
        <dl>
            <dt>UserNAME</dt>
       <dd><input type="text" value={Username} onChange={userhandler}></input></dd>
       <h2>{Username}</h2> 

        </dl>
        
        </div>
    )
}