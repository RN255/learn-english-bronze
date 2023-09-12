import React from "react";
import "../styles/styles.css";

export default function Info() {
  return (
    <div className="infoPage container">
      <div className="row mb-4">
        <div className="col">
          <h2>About</h2>
          <p>
            This site is to help you learn English. <br></br> More features and
            lessons will be added in the future...
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <h2>Contact</h2>
          <p>
            If you have any questions, complaints, suggestions or comments
            please contact us:
            {/* <a href="#">(will be updated in future)</a> */}
          </p>
        </div>
      </div>
    </div>
  );
}
