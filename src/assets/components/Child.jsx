import { useState } from "react";

function Child(props){
    const {msg, person} = props;
    return (
        <>
        <h2>Este es el componente hijo</h2>
        <div className="child">
            <p>{msg}</p>
            <div>{person.sex} - {person.age}</div>
        </div>
        </>
    );
}

export default Child;