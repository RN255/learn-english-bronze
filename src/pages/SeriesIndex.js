import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SeriesIndex(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/lessonsIndex">
            <Button
              variant="link"
              size="sm"
              className="lightBorder lessonSelectButtons my-3 p-3"
            >
              Go back to lesson list
            </Button>
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h2 className="seriesIndexSeriesName">{props.SeriesName}</h2>
          <div className="row">
            {props.SeriesArray.map((item) => (
              <Link
                key={item.number}
                to={`/${item.series}-${item.number}`}
                className="text-decoration-none seriesIndexLink"
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
