import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/App.css';

function Discription() {
  let location = useLocation();
  const name = location.state.deviceName;
  const Ddiscription = location.state.description;
  const Image = location.state.image;
  const storage1 = location.state.storage1;
  const storage2 = location.state.storage2;
  const storage3 = location.state.storage3;

  return (
    <>
      <main className="discription-container">
        <div className="left-column">
          <img data-image="black" className="active" src={Image} alt="" />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>SmartPhones</span>
            <h1>{name}</h1>
            <h3>{Ddiscription}</h3>
          </div>

          <div className="product-configuration">
            <div className="cable-config">
              <span>Storage Space</span>
              <div className="cable-choose">
                <button>{storage1}</button>
                <button>{storage2}</button>
                <button>{storage3}</button>
              </div>
            </div>
          </div>

          <div className="product-price">
            <span>£600</span>
            <a href="" className="cart-btn">
              Add to cart
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Discription;
