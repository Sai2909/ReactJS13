import React, { useEffect, useState } from "react";

// export default function Binding(){
// const Products={
//     Name:'tv',
//     Price:38799.00,
//     Stock: true
// }

//     return(
//         <>
//         <dt>NAME</dt>
//         <dd>{Products.Name}</dd>
//         <dt>NAME</dt>
//         <dd><input type='text' value={Products.Name} /></dd>
//         <dt>Price</dt>
//         <dd>{Products.Price}</dd>
//         <dt>Stock</dt>
//         <dd>{(Products.Stock)?'available':'unavilable'}</dd>


//         </>
//     )
// }


// export default function Binding() {
//     const arrays = ["saikiran", 22, "male", "potharam"]
//     return (
//         <>
//             <h2>List</h2>
//             <ol>
//                 {
//                     arrays.map(array =>
//                         <li>{array}</li>
//                     )
//                 }
//             </ol>
//                 <h2>Select</h2>
//             <select>
//                {
//                 arrays.map(array=>
//                     <option value={array}>{array}</option>
//                     )
//                }
//             </select>
//         </>
//     )
// }

// export default function Binding(){
// const Products=[
//     {Name:"realme",Price:13000},
//     {Name:"redmenote10",Price:15000}
// ]

//     return(
//     <div>
//         <table className="table table-dark table-hover " style={{Width:"200px"}}>
//             <thead>
//                 <tr>
//                     <td>Name</td>
//                     <td>Price</td>
//                 </tr>
//             </thead>
//             <tbody>
//             {
//                         Products.map(product=>
//                             <tr>
//                                 <td>{product.Name}</td>
//                                 <td>{product.Price}</td>
//                             </tr>
//                             )
//                     }

//             </tbody>
//         </table>

//         </div> 

//     )
// }

//nested iteration
// export default function Binding(){
//     const menu =[
//         {category:"Dresses",Brands:["dennislingo","celio","arrow"]},
//         {category:"Pants" ,Brands:["netplay","avasa","cargo"]}
//     ]

//     return(
//         <div className=" container-fluid">
//             <h2>Nested iteration</h2>
//             <ol>
//                 {
//                     menu.map(e=>
//                         <li>
//                             {e.category}
//                             <ul>
//                                 {
//                                     e.Brands.map(brand=>
//                                         <li>
//                                             {brand}
//                                         </li>)
//                                 }
//                             </ul>
//                         </li>)
//                 }
//             </ol>
//                 <h2>select</h2>
//                 <select className="form-select"  >
//                     {
//                         menu.map(opt=>
//                             <optgroup key={opt.category} label={opt.category}>
//                                 {
//                                     opt.Brands.map(brand=>
//                                         <option>{brand}</option>)
//                                 }
//                             </optgroup>)
//                     }
//                 </select>
//         </div>
//     )
// }



// export default function Binding(){

//     const [mars,setmars]=useState();
//     useEffect(()=>{
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
//         .then(response=>response.json())
//         .then(data=>
//             //console.log(data)
//             {
//                 setmars(data)
//             }
//             )
//     },[])

//     return(
//         <div className=" container-fluid">
//             <table className=" table table-hover">
//                 <thead className=" table table-dark">
//                     <tr>
//                     <td>ID</td>
//                     <td>CAMERA NAME</td>
//                     <td>ROVER NAME</td>
//                     <td>PREVIEW</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         mars?.photos.map(photo=>
//                             <tr>
//                                 <td>{photo.id}</td>
//                                 <td>{photo.camera.full_name}</td>
//                                 <td>{photo.rover.name}</td>
//                                 <td>
//                                     <img src={photo.img_src} width="100" height="100" alt="images"></img>
//                                 </td>
//                             </tr>


//                             )
//                     }
//                 </tbody>
//             </table>


//         </div>
//     )
// }


// export default function Binding(){

//     const[Data,setData]=useState();
//     useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(responce=>responce.json())
//     .then(data=>
//         //console.log(data)
//         setData(data)
//         )

// },[])

//     return(
//         <div className="container-fluid">
//             <table className=" table table-hover">
//             <thead className="table table-dark">
//                 <tr>
//                     <td>ID</td>
//                     <td>TITLE</td>
//                     <td>IMAGE</td>
//                 </tr>
//             </thead>   
//             <tbody>
//                 {
//                     Data?.map((lol)=>(
//                         <tr>
//                             <td>{lol.id}</td>
//                             <td>{lol.title}</td>
//                             <td>
//                                 <img src={lol.url} width="100" height="100" alt="imag"/>
//                             </td>
//                         </tr>
//                     )
//                         )
//                 }


//             </tbody>          
//             </table>

//         </div>
//     )
// }

// export default function Binding() {
//     const [Data, setData] = useState();
//     useEffect(() => {
//         fetch("http://restapi.adequateshop.com/api/Feed/GetNewsFeed")
//             .then(responce => responce.json())
//             .then(data =>
//             //console.log(data)
//             {
//                 setData(data)
//             }
//             )
//     }, [])
//     return (
//         <div className=" container-fluid">
//             <table className=" table table-primary">
//                 <thead>
//                     <tr>
//                         <td>USERID</td>
//                         <td>NAME</td>
//                         <td>PROFILE</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         Data?.data.map(users =>
//                             <tr>
//                                 <td>{users.user.userid}</td>
//                                 <td>{users.user.name}</td>
//                                 <td>{users.user.profilepicture}</td>

//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }


export default function Binding(){
    const[Usa,setUsa]=useState();
    useEffect(()=>{
        fetch("http://universities.hipolabs.com/search?country=United+States")
        .then(responce=>responce.json())
        .then(data=>
           // console.log(data)
           {
            setUsa(data)
           })
    },[])


    return(
        <div className=" container-fluid">
            <table className="table table-hover ">
                <thead className="table table-danger">
                    <tr>
                        <td>NAME</td>
                        <td>DOMAIN</td>
                        <td>WEBPAGES</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Usa?.map(e=>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.domains}</td>
                                <td>
                                   <b>{e.web_pages}</b>
                                </td>
                            </tr>
                            )
                        
                    }
                </tbody>

            </table>
        </div>
    )
}