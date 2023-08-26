import React from "react";
import { arrayOfStories } from "../modules/storyHolder";
import { Link } from "react-router-dom";
import { basicCourse1Array } from "../modules/basicCourse1";

export default function LessonsIndex() {
  return (
    <div className="container">
      <div className="row">
      {arrayOfStories.map((item) => (
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
      <div className="row mt-5">
      {basicCourse1Array.map((item) => (
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
  );
}
