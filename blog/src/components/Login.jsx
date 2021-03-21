import React, { useState } from "react";


export function Login() {
    const [name, updateUsername] = useState()
    const [status, updateStatus] = useState(false);
  return (
        <form>
            <input type="text" name="username" value=""  onChange={(e) => updateUsername("name", e.target.value)}/>
            <input type="password" name="password" value="" />
            <button onClick= {(e)=> updateStatus(true)} >Login</button>   
        </form>    
  );
}
