import { useEffect,usestate } from "react";

export function JsonPlaceholdeComponent(){
const[place,setplace]=usestate([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/photos')
.then(responce=>responce.json())
.then(data=>console.log(data));
},[])


  
}