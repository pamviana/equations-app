import React from "react";
import Cards from "../Cards/cards.component";
import "./home-page.styles.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UpdatePicture from "../UpdatePicture/drop-zone.component";
import Result from '../Result/result.component';

function HomePage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route path="/upload" element={<UpdatePicture />} />
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default HomePage;
