import { navigate, Router } from "@reach/router";
import "./App.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Post from "./components/Post";
import UserProfile from "./components/UserProfile";
import { useBlogApi } from "./hooks"
import { PrivateRoute } from "./components/PrivateRoute";
import { useCallback } from "react";
import { BlogContext } from "./context";
import Header from "./components/Header";


function App() {
  const blogApi = useBlogApi();

  const handleLogin = useCallback(
    (username, password) => {
      blogApi.login(username, password).then(() => {
        // createContext({ blogApi: null });
        navigate("/");
      });
    },
    [blogApi]
  );
  console.log(blogApi);

  return (
    <BlogContext.Provider value={{ blogApi: blogApi }}>
      <Router>
      <PrivateRoute path="/">
          
      
          <Header path="/">
              <Home path="/" >
                {{ blogApi: blogApi }}
                
              </Home>
              <UserProfile path="/users/:userId"></UserProfile>
              <Post path="/posts/:postId"></Post>     
          </Header>  
     
        </PrivateRoute>
        <Login  handleLogin={handleLogin} path="/login"></Login>
      </Router>
    </BlogContext.Provider>
    // <div className="App">
    //   {/* <Login></Login>  */}
    //   <Home userId={1}></Home>
    // </div>
  );
}

export default App;
