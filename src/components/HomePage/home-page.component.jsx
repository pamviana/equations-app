import React from "react";
import Cards from "../Cards/cards.component";
import "./home-page.styles.css";

function HomePage() {
  return (
    <>
      <Cards title="Upload Your Picture"/>
      <Cards title="Take a Picture"/>
      <Cards title="Write Your Equation"/>
    </>
  );
}

export default HomePage;
