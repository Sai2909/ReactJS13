import React from "react";


export class NavModelComponent extends React.Component{

    DataOperations(e){
        switch(e.target.value)
        {
        case "Insert":
        alert("Record Inserted");
        break;
        case "Update":
        alert("Record Updated");
        break;
        case "Delete":
        alert("Record Deleted");
        break;
        }
        }

    render(){
        return(
            <div>
                <div className="btn-group">
 <button name="btnInsert" value="Insert"
onClick={this.DataOperations} className="btn btnprimary">Insert</button>
 <button name="btnUpdate" value="Update"
onClick={this.DataOperations} className="btn btnsuccess">Update</button>
 <button name="btnDelete" value="Delete"
onClick={this.DataOperations} className="btn btndanger">Delete</button>
 </div>
 <h2 align="center"></h2>

            </div>
        )
    }
}