import "./App.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      {/* <Login></Login>  */}
      <Home userId={1}></Home>
      
      
    </div>
  );
}

export default App;
