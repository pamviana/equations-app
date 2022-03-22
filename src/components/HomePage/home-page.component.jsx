import React from "react";
import Cards from "../Cards/cards.component";
import "./home-page.styles.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UpdatePicture from "../UpdatePicture/drop-zone.component";
import Result from '../Result/result.component';
import Camera from '../Camera/camera.component';
import TypeEquation from '../TypeEquation/type.component';

function HomePage() {
  return (
        
    <Router>
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route path="/upload" element={<UpdatePicture />} />
        <Route path="/result" element={<Result/>}/>
        <Route path="/camera" element={<Camera/>}/>
        <Route path="/type" element={<TypeEquation/>}/>
      </Routes>
    </Router>
  );
}

export default HomePage;
