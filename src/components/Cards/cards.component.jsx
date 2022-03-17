import React from "react";
import "./cards.styles.css";

function Cards(props) {
  return (
    <div className="card-wrapper">
      <p>{props.title}</p>
    </div>
  );
}

export default Cards;
