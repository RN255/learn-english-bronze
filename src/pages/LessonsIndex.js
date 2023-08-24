import React from "react";
import { arrayOfStories } from "../modules/storyHolder";
import { Link } from "react-router-dom";

export default function LessonsIndex() {
  return (
    <div className="container">
      {arrayOfStories.map((item) => (
        <Link
          key={item.storyNumber}
          to={`/story${item.storyNumber}`}
          className="text-decoration-none"
        >
          <div className="row border-bottom py-2 LessonItem">
            <div className="col-1">{item.storyNumber}</div>
            <div className="col col-lg-4 col-xl-3">{item.storyTitle}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
