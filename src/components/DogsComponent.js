import React, { useState } from "react";
export function DogComponent(){
    const[Dogs ,setDogs]=useState({DogName:'',DogPrice:0,DogsInstock:true ,City:''});
    const[NewDogs ,NewsetDogs]=useState({DogName:'',DogPrice:0,DogsInstock:true ,City:''});
    function handleDogName(e){
        setDogs({
            DogName:e.target.value,
            DogPrice:Dogs.DogPrice,
            DogsInstock:Dogs.DogsInstock,
            City:Dogs.City
        })

    }

    function handleprice(e){
        setDogs({
            DogName:Dogs.DogName,
            DogPrice:e.target.value,
            DogsInstock:Dogs.DogsInstock,
            City:Dogs.City
        })  
    }
    function handleStock(e){
        setDogs({
            DogName:Dogs.DogName,
            DogPrice:Dogs.DogPrice,
            DogsInstock:e.target.value,
            City:Dogs.City
        }) 
    }
    function handlecity(e){
        setDogs({
            DogName:Dogs.DogName,
            DogPrice:Dogs.DogPrice,
            DogsInstock:Dogs.DogsInstock,
            City:e.target.value
        }) 
    }
    function handleRegisterClick(e){
        NewsetDogs(Dogs);
    }
    return(
<div className="container-fluid">
<div className="row">
    <div className="col-4">
        <dl>
            <dt>Dog NAME</dt>
            <dd><input type="text" onChange={handleDogName}></input></dd>
            <dt>Dog PRICE</dt>
            <dd><input type='number' onChange={handleprice}></input></dd>
            <dt>Dog INSTOCK</dt>
            <dd><input type='checkbox' onChange={handleStock}></input></dd>
            <dt>Dog city</dt>
            <dd>
            <select onChange={handlecity}>
             <option>karimanagar</option>   
             <option>jagitial</option> 
            </select>
            </dd>
        </dl>
        <button onClick={handleRegisterClick} className="btn btn-primary w-100">Register</button>
    </div>
    <div className="col-8">
        <dl>
            <dt>DOGSNAME</dt>
            <dd>{NewDogs.DogName}</dd>
            <dt>DOGSPRICE</dt>
            <dd>{NewDogs.DogPrice}</dd>
            <dt>DOGSINSTOCK</dt>
            <dd>
            {(NewDogs.DogsInstock==true)?"Available":"Out of Stock"}</dd>
            <dt>DOGSIN CITY</dt>
            <dd>{NewDogs.City}</dd>
        </dl>

    </div>
</div>

</div>

    )
}