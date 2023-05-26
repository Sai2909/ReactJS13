import { useState } from "react";

export default function CalcComponent(){
const [input , setInput]=useState("");
const [result,setResult]=useState(0);
const handler = e=>{
setInput(e.target.value);
}
    return(
        <>
        <div>
            <center id="image">
                <input autoComplete="off" type= "text" value={input} name="input" onChange={handler}/>
                <br></br>
                <button onClick={()=>setResult(eval(input))}> Result</button>
                <h4>Result is:{result}</h4>
            </center>
        </div>
        </>
    )
}