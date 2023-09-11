import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import LessonsIndex from "./pages/LessonsIndex";
import BasicConvo from "./components/BasicConvo";
import SeriesIndex from "./pages/SeriesIndex";
import Footer from "./components/Footer";

import { seriesList } from "./modules/seriesList";
import ScrollToTopFunction from "./components/ScrollToTopFunction";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopFunction></ScrollToTopFunction>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sampleLesson={seriesList[5].array}
              sampleLessonInfo={seriesList[5]}
            />
          }
        ></Route>
        <Route
          path="/lessonsIndex"
          element={<LessonsIndex seriesList={seriesList} />}
        ></Route>

        {seriesList.map((item) => (
          <Route
            key={item.name}
            path={`/series-Index-${item.urlName}`}
            element={
              <SeriesIndex
                SeriesArray={item.array}
                SeriesName={item.name}
                SeriesDescription={item.description}
              />
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
                  urlName={item.urlName}
                />
              }
            />
          ))
        )}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
