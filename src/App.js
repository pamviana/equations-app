import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage/home-page.component";
import HamburguerMenu from "./images/hamburguer-menu-icon.svg";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const handleClickSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <div className="center-main-box">
        <header className="header-main-box">
          <img
            id="hamburguer-menu-icon"
            alt="menu icon"
            src={HamburguerMenu}
            onClick={handleClickSidebar}
          />
          <nav
            className={sidebar ? "side-menu active" : "side-menu"}
            onClick={handleClickSidebar}
          >
            <ul className="sidebar-container">
              <li>Home</li>
              <li>Upload a Picture</li>
              <li>Take a Picture</li>
              <li>Type an Equation</li>
            </ul>
          </nav>
        </header>
        <main className="main-box-container">
          <HomePage />
        </main>
      </div>
    </div>
  );
}

export default App;
