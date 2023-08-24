import React from "react";
import "../styles/styles.css";

export default function MainConvoNew(props) {
  var character1 = props.StoryText.character1;
  var character2 = props.StoryText.character2;
  var character3 = props.StoryText.character3;

  const output = [];
  for (let i = 0; i < props.StoryText.numberOfLines; i++) {
    output.push(
      <p
        key={i}
        className={
          props.StoryText[`line${i + 1}Speaker`] === character1
            ? "text-warning"
            : props.StoryText[`line${i + 1}Speaker`] === character2
            ? "text-success"
            : props.StoryText[`line${i + 1}Speaker`] === character3
            ? "text-danger"
            : ""
        }
      >
        {props.StoryText[`line${i + 1}`]}
      </p>
    );
  }

  return (
    <div className="container pt-3">
      <div className="row justify-content-center mb-4">
        <h2>Story number: {props.StoryText.storyNumber}</h2>
        {output}
      </div>
    </div>
  );
}
