import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
// import hotelData from "../../data/hotel.json"; 

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { id } = useParams(); // Extract id parameter from URL

  const [hotelData, setHotelData] = useState(null); // State to hold hotel data
  useEffect(() => {
    // Dynamically import JSON based on id
    import(`../../data/${id}.json`)
      .then((data) => setHotelData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, [id]); // Re-run effect when id changes

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  if (!hotelData) return <div>Такой страницы не существует</div>;

  const { name, address, location, priceHighlight, details, reserveText, price } = hotelData.hotel;
  const photos = hotelData.photos;

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          
          <h1 className="hotelTitle">{name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{address}</span>
          </div>
          <span className="hotelDistance">{location}</span>
          <span className="hotelPriceHighlight">{priceHighlight}</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{details.title}</h1>
              <p className="hotelDesc">{details.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>{reserveText}</h1>
              <h2>
                <b>{price}</b>
              </h2>
              <button>Успей арендовать!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
