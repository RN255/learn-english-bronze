import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrayOfLessons } from "./modules/lessonText";
import { arrayOfStories } from "./modules/storyHolder";
import MainConvo from "./components/MainConvo";
import MainConvoNew from "./components/MainConvoNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Home></Home>
      <MainConvo LessonText={arrayOfLessons[0]}></MainConvo>
      <MainConvoNew StoryText={arrayOfStories[0]}></MainConvoNew>
      <MainConvoNew StoryText={arrayOfStories[1]}></MainConvoNew>
      <Routes>
        {arrayOfStories.map((item) => (
          <Route
            key={item}
            path={`/story${item.storyNumber}`}
            element={<MainConvoNew StoryText={item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
