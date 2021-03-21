import React, { useState } from "react";

export default function Login() {
  const [name, updateUsername] = useState("");
  const [status, updateStatus] = useState(false);
  return (
    <form >
        <div className="form-row">
      <input
        type="text"
        name="username"
        value={name}
        onChange={(e) => updateUsername(e.target.value)}
      />
      </div>
      <div className="form-row">
      <input type="password" name="password" value="" />
      </div>
      <button className="btn btn-primary" onClick={(e) => updateStatus(true)}>Login</button>
    </form>
  );
}
