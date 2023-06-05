import React from 'react';
import { useNavigate } from 'react-router-dom';
import iphone14 from '../images/iphone14proMax.webp';
import iphone13 from '../images/iphone-13-pro-blue.jpg';
import Nord from '../images/oneplusNordBlack.webp';
import Pro9 from '../images/oneplus9broBlack.jpg';
import samsungs22 from '../images/samsungs22Black.png';
import samsungs23 from '../images/samsungS22pinkGold.png';
import ultra from '../images/samsung s23 ultra black.webp';
import '../Style/App.css';

function Card() {
  const navigate = useNavigate();

  // Array of card data
  const cardData = [
    {
      name: 'One Plus Nord',
      message: 'More Details >',
      img: Nord,
      description: 'The OnePlus Nord uses the Qualcomm Snapdragon 765G processor (octa-core CPU with a 2.4 GHz Kryo 475 Prime core, a 2.2 GHz Kryo 475 Gold core, 6 1.8 GHz Kryo 475 Silver core and an Adreno 620 GPU), which has a 5G modem, making it the cheapest 5G',
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    {
      name: 'iPhone 14 Pro Max',
      message: 'More Details >',
      img: iphone14,
      description: 'Reviews of the iPhone 14 Pro and iPhone 14 Pro Max were positive, highlighting the major new features such as an always-on display with a new Dynamic Island, upgraded cameras with a 48-megapixel main lens, car crash detection and satellite connectivity for emergencies, the A16 Bionic chip for faster performance',
      Storage1: '128GB',
      Storage2: '256GB',
      Storage3: '565GB'
    },
    {
      name: 'iPhone 13 Pro',
      message: 'More Details >',
      img: iphone13,
      description: 'Reviews of the iPhone 13 Pro and iPhone 13 Pro Max were positive, highlighting the major new features such as an always-on display with a new Dynamic Island, upgraded cameras with a 48-megapixel main lens, car crash detection and satellite connectivity for emergencies, the A16 Bionic chip for faster performance',
      Storage1: '128GB',
      Storage2: '256GB',
      Storage3: '565GB'
    },
    {
      name: 'One Plus 9 Pro',
      message: 'More Details >',
      img: Pro9,
      description: "The OnePlus 9 Pro packs a Snapdragon 888, currently the best system-on-chip you can get in an Android device, paired with either 8GB or 12GB of RAM. I'm confident that you cannot make this phone stutter or slow down. It's a veritable powerhouse",
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    {
      name: 'Samsung S22',
      message: 'More Details >',
      img: samsungs22,
      description: "This phone is just as powerful as other 2022 flagships including the S22 Ultra, and compares favorably to the year's other smartphones, too, including the OnePlus 10 Pro, Oppo Find X5 Pro, and the Xiaomi 12 Pro, though it lags behind newer 2023 flagships.",
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    {
      name: 'Samsung S22 Plus',
      message: 'More Details >',
      img: samsungs23,
      description: "This phone is just as powerful as other 2022 flagships including the S22 Ultra, and compares favorably to the year's other smartphones, too, including the OnePlus 10 Pro, Oppo Find X5 Pro, and the Xiaomi 12 Pro, though it lags behind newer 2023 flagships.",
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    {
      name: 'Samsung S23',
      message: 'More Details >',
      img: samsungs22,
      description: "This phone is just as powerful as other 2023 flagships including the S23 Ultra, and compares favorably to the year's other smartphones, too, including the OnePlus 10 Pro, Oppo Find X5 Pro, and the Xiaomi 12 Pro, though it lags behind newer 2023 flagships.",
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    {
      name: 'Samsung S23 Plus',
      message: 'More Details >',
      img: samsungs23,
      description: "This phone is just as powerful as other 2023 flagships including the S23 Ultra, and compares favorably to the year's other smartphones, too, including the OnePlus 10 Pro, Oppo Find X5 Pro, and the Xiaomi 12 Pro, though it lags behind newer 2023 flagships.",
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    {
      name: 'Samsung S23 Ultra',
      message: 'More Details >',
      img: ultra,
      description: "This phone is just as powerful as other 2023 flagships including the S23 Ultra, and compares favorably to the year's other smartphones, too, including the OnePlus 10 Pro, Oppo Find X5 Pro, and the Xiaomi 12 Pro, though it lags behind newer 2023 flagships.",
      Storage1: '64GB',
      Storage2: '128GB',
      Storage3: '256GB'
    },
    // Rest of the card data objects...
  ];

  const handleClick = (item) => {
    navigate('/blogs', {
      state: {
        deviceName: item.name,
        description: item.description,
        image: item.img,
        storage1: item.Storage1,
        storage2: item.Storage2,
        storage3: item.Storage3
      }
    });
  };

  return (
    <>
      {cardData.map((item, index) => (
        <figure className="snip1577" key={index}>
          <img src={item.img} alt="sample99" />
          <figcaption>
            <h3>{item.name}</h3>
            <h4 onClick={() => handleClick(item)}>
              <a href="/blogs">{item.message}</a>
            </h4>
          </figcaption>
        </figure>
      ))}
    </>
  );
}

export default Card;

 