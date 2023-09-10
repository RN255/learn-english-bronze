import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function NextPrev(props) {
  const nextLessonNum = parseInt(props.LessonText.number) + 1;
  const prevLessonNum = parseInt(props.LessonText.number) - 1;

  return (
    <div className="container sideBar">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {prevLessonNum < 1 ? (
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none"
              disabled
            >
              &lt; Previous
            </Button>
          ) : (
            <Link to={`/${props.LessonText.series}-${prevLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                &lt; Previous
              </Button>
            </Link>
          )}
        </div>
        <div className="col col-lg-2 col-xl-2 text-center ">
          <Link to={`/series-Index-${props.urlName}`}>
            <Button variant="link" size="sm" className="lessonsIndexButton">
              Series Index
            </Button>
          </Link>
        </div>
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {nextLessonNum > props.parentArray.length - 1 ? (
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none"
              disabled
            >
              Next &gt;
            </Button>
          ) : (
            <Link to={`/${props.LessonText.series}-${nextLessonNum}`}>
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
