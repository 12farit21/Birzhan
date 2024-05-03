import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://aquarida-tour.kz/userfiles/item/5640/fullimage1.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">База отдыха Arman-Su</h1>
        <span className="siDistance">200м от берега</span>
        <span className="siTaxiOp">Бесплатная парковка</span>
        <span className="siSubtitle">
          Трехразовое питание + кондиционер
        </span>
        <span className="siFeatures">
          Однокомнатная • 21м² • 2 кровати • уборная
        </span>
        <span className="siCancelOp">Платная отмена </span>
        <span className="siCancelOpSubtitle">
          Бесплатная отмена за 5 дней до аренды
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Отлично</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">12.000тг/сутки</span>
          <form action="/hotels/1" target="_blank">
          <button className="siCheckButton">Арендовать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
