import React from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    const sayHello = () => {
        console.log('hello from parent');
    }
    return (
        <>
            <ChildComponent
                name="saikiran"
                mystyle={{ color: 'green' }}
                onsayhello={sayHello}   //btn click from child
                
            />
        </>
    );
}