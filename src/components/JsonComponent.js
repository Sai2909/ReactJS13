import { useEffect, useState } from "react";
import axios from "axios";
export function JsonComponent() {
    const [values, setValues] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(
            responce => setValues(responce.data)
        )
    }, [])

    return (

        <div className="container-fluid">
            <h2>Fake store api</h2>
            <div className="d-flex flex-wrap">
            {
                    values.map(value =>
                        <div className="card p-2 m-2 w-25">
                            <div className="card-header h-100"> <img src={value.image} className='w-50 h-50'></img></div>
                           <div className="card-body"> {value.title}</div>
                             

                              <div className="card-footer">
                              <span className="bi bi-star-fill text-success"></span>
                                        {value.rating.rate} <span>[{value.rating.count}]</span>
                              </div>
                             

                            </div>
                     
                       )
                }
            </div>
        
        </div>
    
    )
}
