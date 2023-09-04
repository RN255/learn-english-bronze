import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  const nextLessonNum = parseInt(props.StoryText.number) + 1;
  const prevLessonNum = parseInt(props.StoryText.number) - 1;

  return (
    <div className="container sideBar">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {prevLessonNum < 1 + 1 ? (
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none"
              disabled
            >
              &lt; Previous
            </Button>
          ) : (
            <Link to={`/${props.StoryText.series}-${prevLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                &lt; Previous
              </Button>
            </Link>
          )}
        </div>
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {nextLessonNum > (props.parentArray.length - 1) ? (
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none"
              disabled
            >
              Next &gt;
            </Button>
          ) : (
            <Link to={`/${props.StoryText.series}-${nextLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                Next &gt;
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
