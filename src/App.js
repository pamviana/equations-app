import "./App.css";
import HomePage from "./components/HomePage/home-page.component";
import HamburguerMenu from './images/hamburguer-menu-icon.svg';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="center-main-box">
        <header className="header-main-box">
          <img id="hamburguer-menu-icon" alt="menu icon" src={HamburguerMenu}/>
        </header>
        <main className="main-box-container">        
          <HomePage />
        </main>
      </div>
    </div>
  );
}

export default App;
