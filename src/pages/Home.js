import React from "react";
import SampleConvo from "../components/SampleConvo";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col">
            <h1 className="lightBlueText">
              Learn English conversation with short stories
            </h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <h2 className="size1point5rem">
              Learn English online for free with conversation dialogues
            </h2>
          </div>
        </div>
        <div className="row mt-5">
          <p className="border-bottom pb-3 lightBlueText size2rem">
            Example story
          </p>
        </div>
      </div>
      <SampleConvo
        sampleLessonCharacterInfo={props.sampleLesson[0]}
        LessonText={props.sampleLesson[2]}
        sampleLessonInfo={props.sampleLessonInfo}
      ></SampleConvo>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pb-4">
            <Link to="/series-Index-Marco-Studies-Abroad">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none homePageBorderElement flashingBorder"
              >
                Continue reading this course...
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
