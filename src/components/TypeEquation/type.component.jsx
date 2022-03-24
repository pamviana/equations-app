import React, { useState, useEffect } from "react";
import "./type.styles.css";
import { useNavigate } from "react-router-dom";

function TypeEquation(props) {
  let navigate = useNavigate();
  const [typedEquation, setTypedEquation] = useState("");
    

  return (
    <div className="type-section">
      <section className="first-block-type-equation">
        <h3 className="type-title"> Type your equation below </h3>
        <textarea value={typedEquation} className="input-type" type="text" onChange={(e)=> setTypedEquation(e.target.value)}></textarea>
        <button
          className="submit-type-equation button"
          onClick={(e) => navigate("/result")}
        >
          Submit
        </button>
      </section>
      <section className="examples-type-section">
        <p className="title-examples">Examples:</p>
        <p className="examples-equations">(x^3+4)*(x^(1/2))=0</p>
        <p className="examples-equations">(7*8)/2</p>
        <p className="examples-equations">x=2-13+2^5</p>
        <p className="examples-equations">y=x^2+2x+8</p>
      </section>
    </div>
  );
}

export default TypeEquation;
