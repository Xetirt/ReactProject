import { useState } from "react";

function Child2(props){
    const handleClick = () =>{
        props.handleLogin("Nigga");
    };

    return (
        <>
        <div className="child">
        <h2>Este es un componente hijo2</h2>
        <p>Nombre de usuario: {props.userName}</p>
        <button onClick={handleClick}>Login</button>
        </div>
        </>
    );
}

export default Child2;