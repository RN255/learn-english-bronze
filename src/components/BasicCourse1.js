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
      <p
        key={i}
        className={
          props.LessonText[`line${i + 1}Speaker`] === character1
            ? "text-warning"
            : props.LessonText[`line${i + 1}Speaker`] === character2
            ? "text-success"
            : props.LessonText[`line${i + 1}Speaker`] === character3
            ? "text-danger"
            : ""
        }
      >
        {props.LessonText[`line${i + 1}`]}
      </p>
    );
  }

  return (
    <div className="container pt-3">
      <SideBar StoryText={props.LessonText} parentArray={props.parentArray}></SideBar>
      <div className="row justify-content-center mb-4">
        <h2>Story number: {props.LessonText.number}</h2>
        {output}
      </div>
    </div>
  );
}
