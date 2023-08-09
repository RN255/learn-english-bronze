import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
    </>
  );
}

export default App;
