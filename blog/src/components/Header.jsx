
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";
import Post from "./Post";
import UserProfile from "./UserProfile";
import { useContext } from "react";
import { BlogContext } from "../context";

export default function Header({ children }) {

  const context = useContext(BlogContext);
  const user = context.blogApi.currentUser
  return (
    <div>
      {/* <Navbar bg="dark">
        <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
      </Navbar> */}
      <Navbar  bg="dark">
        <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link ><Link to={`/users/${user.id}`}>{user.name}</Link></Nav.Link>
        <Nav.Link ><Link to="/login">Logout</Link></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      
      {children}
    </div>
  );
}


