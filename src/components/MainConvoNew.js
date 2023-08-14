import React, { useState } from "react";
import "../styles/styles.css";

export default function MainConvo(props) {
  var character1 = props.StoryText.character1;

  const output = [];
  for (let i = 0; i < 3; i++) {
    output.push(<p key={i}>{props.StoryText.convoLine1}</p>);
  }

  return (
    <div className="container pt-3">
      <div className="row justify-content-center mb-4">
        <p>{props.StoryText.storyNumber}</p>
        <h2>{props.StoryText.storyNumber}</h2>
        <p
          className={
            props.StoryText.convoLine1Speaker === character1
              ? "text-warning"
              : ""
          }
        >
          {props.StoryText.convoLine1}
        </p>
        <p>{props.StoryText.convoLine2}</p>
        <p>{props.StoryText.convoLine3}</p>
        <p>{props.StoryText.convoLine4}</p>
        <p>{props.StoryText.convoLine5}</p>
        {output}
      </div>
    </div>
  );
}
