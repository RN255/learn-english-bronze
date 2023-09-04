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
              ? "col-lg-6 p-0 darkBlueBackground d-flex"
              : props.LessonText[`line${i + 1}Speaker`] === character2
              ? "col-lg-6 p-0 lightBlueBackground d-flex"
              : props.LessonText[`line${i + 1}Speaker`] === character3
              ? "col-lg-6 greenBackground d-flex"
              : ""
          }
        >
          <div>
            <img
              src={
                props.LessonText[`line${i + 1}Speaker`] === character1
                  ? props.LessonText.character1Image
                  : props.LessonText[`line${i + 1}Speaker`] === character2
                  ? props.LessonText.character2Image
                  : ""
              }
              alt="A face"
              className="p-0 m-1"
            ></img>
          </div>

          <div className="my-auto ms-2 p-0">
            <p className="my-auto p-0">{props.LessonText[`line${i + 1}`]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-3 mb-5 basicConvo">
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
      {output}
    </div>
  );
}
