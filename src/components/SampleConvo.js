import React from "react";
import "../styles/styles.css";

export default function BasicConvo(props) {
  var character1 = props.LessonText.character1;
  var character2 = props.LessonText.character2;
  var character3 = props.LessonText.character3;

  const output = [];
  for (let i = 0; i < 10; i++) {
    output.push(
      <div key={i} className={"row my-1 justify-content-center"}>
        <div
          className={
            props.LessonText[`line${i + 1}Speaker`] === character1
              ? "col-lg-6 p-0 darkBlueBackground d-flex"
              : props.LessonText[`line${i + 1}Speaker`] === character2
              ? "col-lg-6 p-0 lightBlueBackground d-flex"
              : props.LessonText[`line${i + 1}Speaker`] === character3
              ? "col-lg-6 p-0 greenBackground d-flex"
              : props.LessonText[`line${i + 1}Speaker`] === "text"
              ? "col-lg-6 p-4 text-center"
              : ""
          }
        >
          <div>
            {props.LessonText[`line${i + 1}Speaker`] === "text" ? null : (
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
            )}
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
      <div className="row mt-3 mb-4 text-center">
        <div className="col">
          <h2>{props.sampleLessonInfo.name}</h2>
        </div>
      </div>
      <div className="row justify-content-center px-1">
        <div className="col-md-6 p-1 my-1 characterCard">
          <div className="col d-flex darkBlueBackground">
            <div className="col-4 col-lg-3 col-xl-2">
              <img
                src={props.sampleLessonCharacterInfo.character1Image}
                alt="Marco's face"
                className=""
              ></img>
            </div>
            <div className="col-8 p-1 col-lg-9 col-xl-10">
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1}
              </p>
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1Age}
              </p>
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1Nationality}
              </p>
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1Description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-1 my-1 characterCard">
          <div className="col d-flex darkBlueBackground">
            <div className="col-4 col-lg-3 col-xl-2">
              <img
                src={props.sampleLessonCharacterInfo.character2Image}
                alt="Marco's face"
                className=""
              ></img>
            </div>
            <div className="col-8 p-1 col-lg-9 col-xl-10">
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1}
              </p>
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1Age}
              </p>
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1Nationality}
              </p>
              <p className="p-0 m-0">
                {props.sampleLessonCharacterInfo.character1Description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 mb-4 text-center">
        <div className="col">
          <h3>{props.LessonText.title}</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 px-4 text-center">
          <p>{props.LessonText.intro}</p>
        </div>
      </div>
      {output}
    </div>
  );
}
