import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import LessonsIndex from "./pages/LessonsIndex";

import BasicConvo from "./components/BasicConvo";
import { basicCourse1Array } from "./modules/basicCourse1";
import { course3Array } from "./modules/course3";
import SeriesIndex from "./pages/SeriesIndex";

function App() {
  const seriesList = [
    { name: "Basic-Course-One", array: basicCourse1Array },
    { name: "Course-Three", array: course3Array }
  ];

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/lessonsIndex"
          element={<LessonsIndex seriesList={seriesList} />}
        ></Route>

        {seriesList.map((item) => (
          <Route
            key={item.name}
            path={`/series-Index-${item.name}`}
            element={<SeriesIndex SeriesArray={item.array} />}
          />
        ))}

        {/* <Route
          path="/SeriesIndex1"
          element={<SeriesIndex SeriesArray={basicCourse1Array} />}
        ></Route>
        <Route
          path="/SeriesIndex2"
          element={<SeriesIndex SeriesArray={course3Array} />}
        ></Route> */}

        {basicCourse1Array.map((item) => (
          <Route
            key={item}
            path={`/${item.series}-${item.number}`}
            element={
              <BasicConvo LessonText={item} parentArray={basicCourse1Array} />
            }
          />
        ))}
        {course3Array.map((item) => (
          <Route
            key={item}
            path={`/${item.series}-${item.number}`}
            element={
              <BasicConvo LessonText={item} parentArray={course3Array} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
