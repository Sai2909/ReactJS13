import React from "react";
//PASSING PROPS USING STANDARD APPROCH
// export default function ChildComponent(props) {
//     return (
//         <>
//             <h3 style={props.myStyle}>
//                 CHILD NAME:{props.name}
//             </h3>
//             <button onClick={props.onSayhello}>CHILD BTN CLICK</button>
//         </>
//     );
// }

//USING PROPS DESTRUCTURING

export default function ChildComponent({name,
    onsayhello,
    mystyle}){


    return(
        <>
        <h3 style={mystyle}>child name:{name}</h3>
        <button onClick={onsayhello}>
            child btn clciked

        </button>
        
        </>
    )
}