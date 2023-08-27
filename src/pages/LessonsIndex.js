import React from "react";
import { Link } from "react-router-dom";
import { basicCourse1Array } from "../modules/basicCourse1";
import { course3Array } from "../modules/course3";

import Card from "react-bootstrap/Card";

export default function LessonsIndex(props) {
  return (
    <div className="container lessonIndex">
      <div className="row">
        <div className="col">
          <Link to={`/series-Index-${props.seriesList[0].name}`}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col">
        <Link to={`/series-Index-${props.seriesList[1].name}`}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
