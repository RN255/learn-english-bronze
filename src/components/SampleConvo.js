import React from "react";
import "../styles/styles.css";

export default function BasicConvo(props) {
  var character1 = props.LessonText.character1;
  var character2 = props.LessonText.character2;
  var character3 = props.LessonText.character3;

  const output = [];
  for (let i = 0; i < props.LessonText.numberOfLines; i++) {
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
          <h2>{props.LessonText.title}</h2>
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
