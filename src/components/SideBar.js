import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { arrayOfStories } from "../modules/storyHolder";

export default function SideBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nextLessonNum = parseInt(props.StoryText.storyNumber) + 1;
  const prevLessonNum = parseInt(props.StoryText.storyNumber) - 1;

  return (
    <div className="container sideBar">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {prevLessonNum < 1 ? (
            <Button
              variant="link"
              size="sm"
              className="lessonSelectButtons text-decoration-none"
              disabled
            >
              &lt; Previous
            </Button>
          ) : (
            <Link className="nextPrevLink" to={`/story${prevLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                &lt; Previous
              </Button>
            </Link>
          )}
        </div>
        <div className="col col-lg-2 col-xl-2 text-center ">
          <Button
            variant="link"
            size="sm"
            className="lessonsIndexButton"
            onClick={handleShow}
          >
            Lesson Index
          </Button>
        </div>
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {nextLessonNum > arrayOfStories.length ? (
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none"
              disabled
            >
              Next &gt;
            </Button>
          ) : (
            <Link to={`/story${nextLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                Next &gt;
              </Button>
            </Link>
          )}
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <div className="container overflow-auto">
          <div className="row">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Lesson Index</Offcanvas.Title>
            </Offcanvas.Header>
          </div>
          <Offcanvas.Body>
            {arrayOfStories.map((item) => (
              <div className="row py-1" key={item.storyNumber}>
                <Link
                  to={`/story${item.storyNumber}`}
                  onClick={handleClose}
                  className="lessonLink"
                >
                  {item.storyNumber} {item.storyTitle}
                </Link>
              </div>
            ))}
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </div>
  );
}