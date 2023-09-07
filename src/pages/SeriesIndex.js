import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SeriesIndex(props) {
  return (
    <div className="container seriesIndex">
      <div className="row">
        <div className="col">
          <Link to="/lessonsIndex">
            <Button
              variant="link"
              size="sm"
              className="lightBorder lessonSelectButtons my-3 p-3"
            >
              Go to Course list
            </Button>
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h2 className="seriesIndexSeriesName">{props.SeriesName}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>Characters</h3>
        </div>
      </div>

      <div className="row justify-content-center px-1">
        <div className="col-md-6 darkBlueBackground p-1 d-flex characterCard">
          <div className="col-4">
            <img
              src={props.SeriesArray[0].character2Image}
              alt="Marco's face"
              className=""
            ></img>
          </div>
          <div className="col-8 p-1">
            <p className="p-0 m-0">{props.SeriesArray[0].character1}</p>
            <p className="p-0 m-0">{props.SeriesArray[0].character1Age}</p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character1Nationality}
            </p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character1Description}
            </p>
          </div>
        </div>
        <div className="col-md-6 lightBlueBackground p-1 d-flex characterCard">
          <div className="col-4">
            <img
              src={props.SeriesArray[0].character2Image}
              alt="Marco's face"
              className=""
            ></img>
          </div>
          <div className="col-8 p-1 ">
            <p className="p-0 m-0">{props.SeriesArray[0].character2}</p>
            <p className="p-0 m-0">{props.SeriesArray[0].character2Age}</p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character2Nationality}
            </p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character2Description}
            </p>
          </div>
        </div>
        <div className="col-md-6 darkBlueBackground p-1 d-flex characterCard">
          <div className="col-4">
            <img
              src={props.SeriesArray[0].character2Image}
              alt="Marco's face"
              className=""
            ></img>
          </div>
          <div className="col-8 p-1">
            <p className="p-0 m-0">{props.SeriesArray[0].character2}</p>
            <p className="p-0 m-0">{props.SeriesArray[0].character2Age}</p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character2Nationality}
            </p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character2Description}
            </p>
          </div>
        </div>
        <div className="col-md-6 lightBlueBackground p-1 d-flex characterCard">
          <div className="col-4">
            <img
              src={props.SeriesArray[0].character2Image}
              alt="Marco's face"
              className=""
            ></img>
          </div>
          <div className="col-8 p-1">
            <p className="p-0 m-0">{props.SeriesArray[0].character2}</p>
            <p className="p-0 m-0">{props.SeriesArray[0].character2Age}</p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character2Nationality}
            </p>
            <p className="p-0 m-0">
              {props.SeriesArray[0].character2Description}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>Chapters</h3>
        </div>
      </div>

      <div className="row">
        {props.SeriesArray.map((item) =>
          item.number ? (
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
          ) : null
        )}
      </div>
    </div>
  );
}
