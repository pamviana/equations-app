import React, { useState, useEffect } from "react";
import "./type.styles.css";
import { useNavigate } from "react-router-dom";
import { addStyles, EditableMathField, StaticMathField } from "react-mathquill";

addStyles();

function TypeEquation(props) {
  let navigate = useNavigate();
  const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");


  useEffect(()=> {
    console.log(latex)
  }, [latex])

  return (
    <div className="type-section">    
      <section className="first-block-type-equation">
        <h3 className="type-title"> Type your equation below </h3>
        <EditableMathField className="editor"
        style={{
          padding: "10px 25px",
          borderRadius: "5px"
        }}
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      />         
        <button
          className="submit-type-equation button"
          onClick={(e) => navigate("/result")}
        >
          Submit
        </button>
      </section>
      <section className="examples-type-section">
        <p className="title-examples">Examples:</p>
        <p className="examples-equations">(2^3+4)*(9^(1/2))=0</p>
        <p className="examples-equations">(7*8)/2</p>
        <p className="examples-equations">2-13+2^5</p>
        <p className="examples-equations">y=x^2+2x+8</p>
      </section>
    </div>
  );
}

export default TypeEquation;
