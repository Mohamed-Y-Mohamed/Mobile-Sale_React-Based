import React, { useState } from "react";
import "./App.css";
import image from "./image.webp";
import image1 from "./1.svg";
import Card from "./components/Card";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      <div className="text-container">
<h1>NovaTech</h1>

     </div>

      <div className={`navbar-area ${isMenuOpen ? "open" : ""}`}>
        <nav className="site-navbar">
          <a href="#home" className="site-logo">
          <h1>NovaTech</h1>
          </a>

          {/* site menu/nav */}
          <ul className={`${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">service</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>

          {/* nav-toggler for mobile version only */}
          <button className={`nav-toggler ${isMenuOpen ? "toggler-open" : ""}`} onClick={toggleMenu}>
            <span></span>
          </button>
        
        </nav>
      </div>
<Card/>

    </div>
    
  );
}

export default App;
