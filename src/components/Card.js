import image from '../image.webp';
import '../App.css';
const Card = () => {
  // Generate random image URL
  const getRandomImage = () => {
    // Replace this logic with your own random image URL generation
    const randomImageUrls = [image, image, image];
    const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
    return randomImageUrls[randomIndex];
  };

  // Array of card data
  const cardData = [
    { name: 'Giraffe 1', message: 'Happy Birthday 1' },
    { name: 'Giraffe 2', message: 'Happy Birthday 2' },
    { name: 'Giraffe 3', message: 'Happy Birthday 3' },
  ];

  return (
    <>
      {cardData.map((item, index) => (
        <div className="card-container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={getRandomImage()} alt="Random" />
              </div>
              <div className="contentBx">
                <h3>
                  {item.name}
                  <br />
                  <span>{item.message}</span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">happy</a>
              </li>
            </ul>
          </div>
        </div>
      ))}
  </>
  );
};

export default Card;
