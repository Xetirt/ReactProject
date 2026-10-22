import { useState } from "react";

function HelloUser(props){
    const {username} = props
    return(
        <h2 className="child">Bienvenido: {username}</h2>
    )
}

export default HelloUser;