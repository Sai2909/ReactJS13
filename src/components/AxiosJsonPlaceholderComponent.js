import { useEffect,useState } from "react";
import axios from "axios";
export function AxiosJsonPlaceholderComponent(){
const [values,setValues]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            responce => setValues(responce.data)
        )
    },[])

    return(
        <div className="container-fluid">

            <nav className="border-3">
            <ol>{
                values.map(value=>
                    
                    <li key={value.title}>
                        {value.title}
                    </li>)
                }
               
            </ol>

            </nav>
            


        </div>

    )
}