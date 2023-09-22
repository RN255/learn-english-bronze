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
              className="lightBorder lessonSelectButtons my-3 px-3 py-2"
            >
              Go to Course list
            </Button>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col mt-3">
          <h3>Title</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="seriesIndexSeriesName">{props.SeriesName}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-9 col-md-6 col-lg-4 col-xxl-3 mt-2">
          <p>Level: {props.SeriesArray[0].level}</p>
        </div>
        <div className="row">
          <div className="col">
            <p className="seriesIndexSeriesDescription">
              {props.SeriesDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col mt-3 mb-1">
          <h3>Main Characters</h3>
        </div>
      </div>

      <div className="row justify-content-start px-1">
        <div className="col-md-6 p-1 my-1 characterCard">
          <div className="col d-flex darkBlueBackground h-100">
            <div className="col-4 col-lg-3">
              <img
                src={props.SeriesArray[0].character1Image}
                alt="Marco's face"
                className=""
              ></img>
            </div>
            <div className="col-8 py-1 ps-2 pe-1 col-lg-9">
              <p className="p-0 m-0">{props.SeriesArray[0].character1}</p>
              <p className="p-0 m-0">{props.SeriesArray[0].character1Age}</p>
              <p className="p-0 m-0">
                {props.SeriesArray[0].character1Nationality}
              </p>
              <p className="p-0 m-0 setCharacterDescHeight">
                {props.SeriesArray[0].character1Description}
              </p>
            </div>
          </div>
        </div>
        {props.SeriesArray[0].character2 && (
          <div className="col-md-6 p-1 my-1 characterCard">
            <div className="col d-flex darkBlueBackground h-100">
              <div className="col-4 col-lg-3">
                <img
                  src={props.SeriesArray[0].character2Image}
                  alt="Marco's face"
                  className=""
                ></img>
              </div>
              <div className="col-8 py-1 ps-2 pe-1 col-lg-9">
                <p className="p-0 m-0">{props.SeriesArray[0].character2}</p>
                <p className="p-0 m-0">{props.SeriesArray[0].character2Age}</p>
                <p className="p-0 m-0">
                  {props.SeriesArray[0].character2Nationality}
                </p>
                <p className="p-0 m-0 setCharacterDescHeight">
                  {props.SeriesArray[0].character2Description}
                </p>
              </div>
            </div>
          </div>
        )}
        {props.SeriesArray[0].character3 && (
          <div className="col-md-6 p-1 my-1 characterCard">
            <div className="col d-flex darkBlueBackground h-100">
              <div className="col-4 col-lg-3">
                <img
                  src={props.SeriesArray[0].character3Image}
                  alt="Marco's face"
                  className=""
                ></img>
              </div>
              <div className="col-8 py-1 ps-2 pe-1 col-lg-9">
                <p className="p-0 m-0">{props.SeriesArray[0].character3}</p>
                <p className="p-0 m-0">{props.SeriesArray[0].character3Age}</p>
                <p className="p-0 m-0">
                  {props.SeriesArray[0].character3Nationality}
                </p>
                <p className="p-0 m-0 setCharacterDescHeight">
                  {props.SeriesArray[0].character3Description}
                </p>
              </div>
            </div>
          </div>
        )}
        {props.SeriesArray[0].character4 && (
          <div className="col-md-6 p-1 my-1 characterCard">
            <div className="col d-flex darkBlueBackground h-100">
              <div className="col-4 col-lg-3">
                <img
                  src={props.SeriesArray[0].character4Image}
                  alt="Marco's face"
                  className=""
                ></img>
              </div>
              <div className="col-8 py-1 ps-2 pe-1 col-lg-9">
                <p className="p-0 m-0">{props.SeriesArray[0].character4}</p>
                <p className="p-0 m-0">{props.SeriesArray[0].character4Age}</p>
                <p className="p-0 m-0">
                  {props.SeriesArray[0].character4Nationality}
                </p>
                <p className="p-0 m-0 setCharacterDescHeight">
                  {props.SeriesArray[0].character4Description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="row mt-4 mb-1">
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
                <div className="col">{item.title}</div>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}
