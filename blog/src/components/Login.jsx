import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { BlogContext } from "../context";

export default function Login({ handleLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(BlogContext);
    context.blogApi.resetCurrentUser() 

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "60rem",
          textAlign: "center",
          marginBottom: "3rem",
          marginTop: "3rem",
        }}
      >
        <Card.Body>
          <form>
            <Card.Text>
              <div className="form-group row">
                <label for="inputUser3" className="col-sm-2 col-form-label">
                  User Name
                </label>
                <div className="col-sm-8">
                  <input
                    id="inputEmail3"
                    className="form-control"
                    placeholder="User Name"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="form-group row">
                <div className="col-sm-12">
                    
                </div>
            </div> */}
            </Card.Text>
          </form>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => handleLogin(username, password)}
          >
            Login
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}
