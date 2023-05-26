import { Fragment } from "react";
import CustomCounterComponent from "./CustomCounterComponent";

export default function CountComponent(){
    const[count,increment,decrement,reset]=CustomCounterComponent();
    return(
        <Fragment>
            <h1>Count =={count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>

        </Fragment>



    )
}