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
  const price=location.state.price;
  return (
    <>
      <main className="discription-container">
      <div class="gallery">
  <img src={Image} alt=''/>
  <img src={Image} alt=''/>
 

</div>

        <div className="rowsecond">
          <div className="product-description">
            <span>SmartPhones</span>
            <h1>{name}</h1>
            <h3>{Ddiscription}</h3>
          </div>

          <div className="product-configuration">
            <div className="cable-config">
              <span>Storage Space</span>
              <div className="cable-choose">
              <button className="highlight">{storage1} </button>
                <button className="highlight">{storage2}</button>
                <button className="highlight">{storage3}</button>
              </div>
            </div>
          </div>

          <div className="product-price">
            <span>{price}</span>
            <button>Add to cart</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Discription;
