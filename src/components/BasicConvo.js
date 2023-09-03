import React from "react";
import "../styles/styles.css";
import SideBar from "./SideBar";

export default function BasicConvo(props) {
  var character1 = props.LessonText.character1;
  var character2 = props.LessonText.character2;
  var character3 = props.LessonText.character3;

  const output = [];
  for (let i = 0; i < props.LessonText.numberOfLines; i++) {
    output.push(
      <div
        key={i}
        className={
          props.LessonText[`line${i + 1}Speaker`] === character1
            ? "row my-1 justify-content-center"
            : props.LessonText[`line${i + 1}Speaker`] === character2
            ? "row my-1 justify-content-center"
            : props.LessonText[`line${i + 1}Speaker`] === character3
            ? "row my-1 justify-content-center"
            : ""
        }
      >
        <div
          className={
            props.LessonText[`line${i + 1}Speaker`] === character1
              ? "col-lg-6 darkBlueBackground"
              : props.LessonText[`line${i + 1}Speaker`] === character2
              ? "col-lg-6 lightBlueBackground"
              : props.LessonText[`line${i + 1}Speaker`] === character3
              ? "col-lg-6 greenBackground"
              : ""
          }
        >
          <p className="my-2">{props.LessonText[`line${i + 1}`]}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-3 mb-5">
      <SideBar
        StoryText={props.LessonText}
        parentArray={props.parentArray}
        SeriesName={props.SeriesName}
      ></SideBar>
      <div className="row mt-3 mb-4 text-center">
        <div className="col">
          <h2>
            {props.LessonText.number} | {props.LessonText.title}
          </h2>
        </div>
      </div>
      <div className="row justify-content-center px-1">
        <div className="col-lg-3 darkBlueBackground me-1 p-1 d-flex">
            <div className="w-50">
              <img
                src={props.LessonText.character1Image}
                alt="Marco's face"
                className=""
              ></img>
            </div>
            <div className="p-1 my-auto w-50">
              <p className="p-0 m-0">{character1}</p>
              <p className="p-0 m-0">{props.LessonText.character1Age}</p>
              <p className="p-0 m-0">
                {props.LessonText.character1Nationality}
              </p>
              <p className="p-0 m-0">
                {props.LessonText.character1Description}
              </p>
          </div>
        </div>
        <div className="col-lg-3 lightBlueBackground p-1 d-flex">
            <div className="w-50">
              <img
                src={props.LessonText.character2Image}
                alt="Marco's face"
                className=""
              ></img>
            </div>
            <div className="p-1 my-auto w-50">
              <p className="p-0 m-0">{character2}</p>
              <p className="p-0 m-0">{props.LessonText.character2Age}</p>
              <p className="p-0 m-0">
                {props.LessonText.character2Nationality}
              </p>
              <p className="p-0 m-0">
                {props.LessonText.character2Description}
              </p>
          </div>
        </div>
      </div>
      {output}
    </div>
  );
}
