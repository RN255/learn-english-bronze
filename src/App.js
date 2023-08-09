import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrayOfLessons } from "./modules/lessonText";
import MainConvo from "./components/MainConvo";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <MainConvo LessonText={arrayOfLessons[0]}></MainConvo>
    </>
  );
}

export default App;
