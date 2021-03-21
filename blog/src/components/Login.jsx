import React, { useState } from "react";

export default function Login() {
  const [name, updateUsername] = useState("");
  const [status, updateStatus] = useState(false);
  return (
    <form className="form-inline" >
      <input
        type="text"
        name="username"
        value={name}
        onChange={(e) => updateUsername(e.target.value)}
      />
      <input type="password" name="password" value="" />
      <button onClick={(e) => updateStatus(true)}>Login</button>
    </form>
  );
}
