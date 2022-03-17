import React from "react";
import "./cards.styles.css";

function Cards(props) {
  return (
    <div className="card-section">
      <div className="upload-box card-wrapper">
        <p>Upload Your Picture</p>
      </div>
      <div className="camera-box card-wrapper">
        <p>Take a Picture</p>
      </div>
      <div className="type-box card-wrapper">
        <p>Type Your Equation</p>
      </div>
    </div>
  );
}

export default Cards;
