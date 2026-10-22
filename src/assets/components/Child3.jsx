import { useState, useEffect } from "react";

function Child3(props){
    const [counter, setCounter] = useState(0);
    
    useEffect(() =>{
        console.log("Child se ha renderizado");
        return ()=>{
            console.log("Child se ha destruido");
        }
    }, []) //Los corchetes es un array vacio que se renderiza al utilizar el componente
    return (
        <>
        <h2>Este es el componente hijo3</h2>
        <h3>{counter}</h3>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        </>
    );
}

export default Child3;