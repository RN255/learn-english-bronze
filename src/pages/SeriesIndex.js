import React from "react";
import { Link } from "react-router-dom";
import { basicCourse1Array } from "../modules/basicCourse1";

export default function SeriesIndex(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/lessonsIndex">Go back to lesson list</Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            {props.SeriesArray.map((item) => (
              <Link
                key={item.number}
                to={`/${item.series}-${item.number}`}
                className="text-decoration-none"
              >
                <div className="row border-bottom py-2 LessonItem">
                  <div className="col-1">{item.number}</div>
                  <div className="col col-lg-4 col-xl-3">{item.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
