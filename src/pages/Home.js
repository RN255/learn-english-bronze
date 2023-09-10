import React from "react";
import SampleConvo from "../components/SampleConvo"

export default function Home(props) {
  return (
    <>
      <div className="container">
        <p>Home</p>
        <p>Can we add something to the home please, it's about time.</p>
        <p>Be patient Robert!</p>
        <p>Keep going.</p>
        <p>{props.sampleLesson[1].line1}</p>
        <p>{props.sampleLesson[2].line1}</p>
      </div>
      <SampleConvo LessonText={props.sampleLesson[2]}></SampleConvo>
    </>
  );
}
