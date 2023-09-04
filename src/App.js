import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import LessonsIndex from "./pages/LessonsIndex";
import BasicConvo from "./components/BasicConvo";
import SeriesIndex from "./pages/SeriesIndex";

import { seriesList } from "./modules/seriesList";

function App() {
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
            path={`/series-Index-${item.urlName}`}
            element={
              <SeriesIndex SeriesArray={item.array} SeriesName={item.name} />
            }
          />
        ))}

        {seriesList.map((item) =>
          item.array.map((arrayItem) => (
            <Route
              key={arrayItem.name}
              path={`/${arrayItem.series}-${arrayItem.number}`}
              element={
                <BasicConvo
                  LessonText={arrayItem}
                  parentArray={item.array}
                  SeriesName={item.name}
                />
              }
            />
          ))
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
