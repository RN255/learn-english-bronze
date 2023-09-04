import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function LessonsIndex(props) {
  return (
    <div className="container lessonIndex">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {props.seriesList.map((item) => (
          <div key={item.name} className="col mb-3 ">
            <Link
              to={`/series-Index-${item.urlName}`}
              className="text-decoration-none"
            >
              <Card className="h-100 border-0 lessonIndexCard">
                <Card.Body className="text-decoration-none ">
                  <Card.Title className="text-center darkBlueText">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="text-center lightBlueText">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
