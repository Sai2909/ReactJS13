
import { useState, useEffect } from "react";
export function FakeStoreApiComponent(){
    const [Mars,setMars]=useState({});
    useEffect(()=>{
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot')
        .then(responce=>responce.json())
        .then( data =>{
            setMars(data);
        
    })
},[])
    return(
        <div className="container">
            <h2>Nasa Api</h2>
            <div className="d-flex flex-wrap">
                {
                    Mars.photos.map(photo =>
                        <div className="card p-2 m-2 w-25 " key={photo.camera.full_name}>
                            <img key={photo.img_src} src={photo.img_src} width="200" height="200" />
                            <p key={photo.rover.name}>{photo.rover.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}