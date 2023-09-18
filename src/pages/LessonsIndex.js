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
                  <Card.Text className="lightBlueText">
                    <div className="col mb-2">Level: {item.array[0].level}</div>
                    <div className="col mb-3">{item.description}</div>
                    <div className="col d-flex darkBlueBackground my-1">
                      <div>
                        <img
                          src={item.array[0].character1Image}
                          alt="Marco's face"
                          className="smallRoundPortrait"
                        ></img>
                      </div>
                      <div className="p-1 my-auto ms-2">
                        <p className="p-0 m-0">{item.array[0].character1}</p>
                      </div>
                    </div>
                    <div className="col d-flex darkBlueBackground my-1">
                      <div>
                        <img
                          src={item.array[0].character2Image}
                          alt="Marco's face"
                          className="smallRoundPortrait"
                        ></img>
                      </div>
                      <div className="p-1 my-auto ms-2">
                        <p className="p-0 m-0">{item.array[0].character2}</p>
                      </div>
                    </div>
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
