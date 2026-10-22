import { useState, useEffect } from "react";

function Child4(props){
    const [counter, setCounter] = useState(0);
    
    
    useEffect(() => {
        return () =>{
            console.log("El componente se ha desmontado");
        }
}, []);

/*
if(counter == 0){
useEffect(() => {
        return () =>{
            console.log("Inicializando...");
        }
}, [])} else{
    useEffect(() => {
        return () =>{
            console.log("La variable counter ha cambiado");
        }
}, [counter]);*/




    return (
        <>
        <div className="child">
        <h2>Este es un componente hijo4</h2>
        <h3>{counter}</h3>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>
        </>
    );
}

export default Child4;