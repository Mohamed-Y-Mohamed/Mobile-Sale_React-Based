import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Style/App.css";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Description from "./components/discription";

function App() {
  return (
    <div className="containers">
      <div className="text-container">
        <h1>NovaTech</h1>
      </div>
      <Navigation />
      <div className="Main">
        <Routes>
        <Route path="/" element={<Card />}/>
          
          <Route path="/blogs" element={<Description />} />

      
      </Routes>
      </div>
    </div>
  );
}

export default App;
