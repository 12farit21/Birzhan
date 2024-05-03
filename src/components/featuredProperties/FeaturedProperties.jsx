import "./featuredProperties.css";
//import "./img/logo.png";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1331/full.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Айтуар</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Цена начиная от 8000 тг.</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Отлично</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1299/full.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Арман Су</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Цена начиная от 10000 тг.</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Прекрасно</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1259/full.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aiken deluxe (Айкен делюкс)</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Цена начиная от 7000 тг.</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Отлично</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1322/full"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Оркен</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Цена начиная от 10000 тг.</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Отлично</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
