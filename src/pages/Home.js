import React from "react";
import SampleConvo from "../components/SampleConvo";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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

        <div className="row pt-5 mt-5">
          <p className="display-6 fw-bold border-bottom pb-3 lightBlueText">
            Example lesson:
          </p>
        </div>
      </div>
      <SampleConvo
        sampleLessonCharacterInfo={props.sampleLesson[0]}
        LessonText={props.sampleLesson[1]}
        sampleLessonInfo={props.sampleLessonInfo}
      ></SampleConvo>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pb-4">
            <Link to="/series-Index-Basic-English-Course-One">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none homePageBorderElement flashingBorder"
              >
                Continue reading this lesson...
              </Button>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 pb-4">
            <Link to="/lessonsIndex">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none homePageBorderElement flashingBorder"
              >
                See all lessons
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
