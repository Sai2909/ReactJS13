
import React from "react";
export function PropertyComponent(){

    const Data=obj=>(
        <div className="card w-25 h-25">
        <div className="card-header">
        <h3>{obj.Name}</h3>
        </div>
        <div className="card-body">
            <img src={obj.Photo}/>
            </div>
            <div className="card-footer">
                <h2>{obj.Speed}</h2>
            </div>
            </div>
    );

    return(
        <div>
            <Data Name={'Running'} Photo={'src/components/images/running1.jpg'} Speed={200}></Data>

        </div>
    )
}