import { useEffect,useState } from "react";
import axios from "axios";
export function NasaComponent(){
const [values,setValues]=useState({});

    useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(
            responce => setValues(responce.data)
        )
    },[])

    return(
        <div className="container-fluid">

            <nav className="border-3">
            <ol>{
                values.photos.map(photo=>
                    
                    <li key={photo.id}>
                        {photo.id}
                    </li>)
                }
               
            </ol>

            </nav>
            


        </div>

    )
}