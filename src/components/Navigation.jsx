import'../Style/App.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
function Navigation() {

    return(
<div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      JoGeek
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href={ <Link to="/"></Link>} target="_blank">Home </a>
    <a href="" target="_blank">Product</a>
    <a href="" target="_blank">About us </a>
    <a href="" target="_blank">Contact us</a>
  </div>
</div>
    );
}
export default Navigation;