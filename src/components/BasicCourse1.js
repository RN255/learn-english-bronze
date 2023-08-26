import React from "react";
import "../styles/styles.css";
import SideBar from "./SideBar";

export default function BasicCourse1(props) {
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
            ? "row my-1 darkBlueBackground"
            : props.LessonText[`line${i + 1}Speaker`] === character2
            ? "row my-1 lightBlueBackground"
            : props.LessonText[`line${i + 1}Speaker`] === character3
            ? "row my-1 greenBackground"
            : ""
        }
      >
        <div className="col">
          <p className="my-2">{props.LessonText[`line${i + 1}`]}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-3">
      <SideBar
        StoryText={props.LessonText}
        parentArray={props.parentArray}
      ></SideBar>
      <div className="row mt-3 mb-5 text-center">
        <div className="col">
          <h2>{props.LessonText.number}{" "}| {props.LessonText.title}</h2>
        </div>
      </div>
      {output}
    </div>
  );
}
