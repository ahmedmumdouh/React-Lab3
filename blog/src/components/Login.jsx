import React from "react";
import { useEffect, useState } from "react";


export function Login() {
    const [name, updateUsername] = useState()
  return creatorService.loading ? (
    <h1>Loading...</h1>
  ) : (
        <form>
            <input type="text" name="username" value=""  onChange={(e) => updateUsername("name", e.target.value) ></input>
            <input type="password" name="password" value=""  ></input>
            <button onClick= {} >Login</button>
           
        </form>    
  );
}
