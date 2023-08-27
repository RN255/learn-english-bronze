import React from "react";
import { Link } from "react-router-dom";
import { basicCourse1Array } from "../modules/basicCourse1";
import { course3Array } from "../modules/course3";

import Card from "react-bootstrap/Card";

export default function LessonsIndex(props) {
  return (
    <div className="container lessonIndex">
      <div className="row row-cols-3">
        {props.seriesList.map((item) => (
          <div className="col mb-3">
            <Link to={`/series-Index-${item.name}`}>
              <Card className="h-100">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
