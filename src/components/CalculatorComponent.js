import { useState } from "react"
import '../components/CalculatorComponent.css';

export default function CalculatorComponent(){
const [input , setInput]=useState("");
const [result,setResult]=useState('0');

function handler(e){
setInput(e.target.value)
}

    return(
        
        <div>
            <center>
               
                <h1 >CALCULATOR<span className="bi bi-calculator"></span></h1>
                <input  autoComplete="off" type= "text" value={input} name="input" onChange={handler} className='form-control w-25 mt-3'/>
                <br></br>
                <button className="btn btn-dark" onClick={()=>setResult(eval(input))}> Result</button>
                <h2>Result is:{result}</h2>
                

                <button className="btn btn-dark" onClick={()=>setInput(input+'1')}>1</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'2')}>2</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'3')}>3</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'4')}>4</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'5')}>5</button>
  
                <button className="btn btn-dark" onClick={()=>setInput(input+'8')}>8</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'6')}>6</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'7')}>7</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'8')}>8</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'9')}>9</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'0')}>0</button><br/>

                <button className="btn btn-dark" onClick={()=>setInput(input+'+')}>+</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'-')}>-</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'*')}>*</button>
                <button className="btn btn-dark" onClick={()=>setInput(input+'%')}>%</button>
                <button className="btn btn-dark" onClick={()=>setInput('')}>clr</button>
                <br/>
            </center>
        </div>
    
    )
}