import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1213/full.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rivera</h1>
          <h2></h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1317/full.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Эко-Алаколь</h1>
          <h2></h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://aquarida-tour.kz/userfiles/dir/1271/full.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Арасан</h1>
          <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
