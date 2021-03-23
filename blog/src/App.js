import { Router } from "@reach/router";
import "./App.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Post from "./components/Post";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Home path="/" userId={1}></Home>
      <UserProfile path="/users/:userId"></UserProfile>
      <Post path="/posts/:postId"></Post>
      <Login path="/login"></Login>
    </Router>
    // <div className="App">
    //   {/* <Login></Login>  */}
    //   <Home userId={1}></Home>
    // </div>
  );
}

export default App;
