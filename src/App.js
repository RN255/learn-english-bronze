import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrayOfStories } from "./modules/storyHolder";
import MainConvoNew from "./components/MainConvoNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LessonsIndex from "./pages/LessonsIndex";
import { basicCourse1Array } from "./modules/basicCourse1";
import BasicCourse1 from "./components/BasicCourse1";
import { course3Array } from "./modules/course3";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/lessonsIndex" element={<LessonsIndex />} />
        {arrayOfStories.map((item) => (
          <Route
            key={item}
            path={`/${item.series}-${item.number}`}
            element={
              <MainConvoNew StoryText={item} parentArray={arrayOfStories} />
            }
          />
        ))}
        {basicCourse1Array.map((item) => (
          <Route
            key={item}
            path={`/${item.series}-${item.number}`}
            element={
              <BasicCourse1 LessonText={item} parentArray={basicCourse1Array} />
            }
          />
        ))}
        {course3Array.map((item) => (
          <Route
            key={item}
            path={`/${item.series}-${item.number}`}
            element={
              <BasicCourse1 LessonText={item} parentArray={basicCourse1Array} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
