import { Link } from "react-router-dom";
import "./searchItem.css";

// FIRST SEARCH ITEM
const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siYear">{item.title}</span>
        <span className="siHighlight">Editors' Choice</span>
        <span className="siSubtitle">
          34 years of experience
        </span>
        {/* <span className="siFeatures">{item.desc}</span> */}
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/photographers/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>

    </div>
  );
};


//SECOND SEARCH ITEM
const SearchItem2 = () => {
  return (
    <div className="searchItem2">
      <img
        src="https://www.datocms-assets.com/56778/1635523352-1634721749411298-20212010-annie-leibovitz.jpeg?auto64=Zm9ybWF0LGNvbXByZXNz&cs=srgb"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Annie Leibovitz</h1>
        <span className="siYear">62 years old</span>
        <span className="siHighlight">Editors' Choice</span>
        <span className="siSubtitle">
          36 years of experience
        </span>
        <span className="siFeatures">
          Black & White • Portrait • Event
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>

    </div>
  );
};

//THIRD SEARCH ITEM
const SearchItem3 = () => {
  return (
    <div className="searchItem3">
      <img
        src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQAL0y9TiHDIy9H4jokRnrMhqHhTewfFhCmvF5QD6vtcFw7GAYt9e7HZEx8Qwls2xWl"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Elliott Erwitt</h1>
        <span className="siYear">84 years old</span>
        <span className="siSubtitle">
          56 years of experience
        </span>
        <span className="siFeatures">
          Landscape • Wild & Natural
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>

    </div>
  );
};

//FOURTH SEARCH ITEM
const SearchItem4 = () => {
  return (
    <div className="searchItem4">
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9a7y0D_ulLJkESsht0iHOtEgEu_DQzxdVZ8OqtJK22CcU6GtG"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Alicia Isabelle</h1>
        <span className="siYear">52 years old</span>
        <span className="siSubtitle">
          34 years of experience
        </span>
        <span className="siFeatures">
          Event • Sport
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>

    </div>
  );
};

// FIFTH SEARCH ITEM
const SearchItem5 = () => {
  return (
    <div className="searchItem5">
      <img
        src="http://totallyhistory.com/wp-content/uploads/2013/12/David-Bailey-2.jpg"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">David Bailey</h1>
        <span className="siYear">76 years old</span>
        <span className="siSubtitle">
          47 years of experience
        </span>
        <span className="siFeatures">
          Black & White • Portrait
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>

    </div>
  );
};

// SIXTH SEARCH ITEM
const SearchItem6 = () => {
  return (
    <div className="searchItem6">
      <img
        src="https://www.nationalgeographic.com/content/dam/expeditions/experts/expert-ami-vitale.ngsversion.1530212855456.adapt.1900.1.jpg"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Ami Vitale</h1>
        <span className="siYear">51 years old</span>
        <span className="siSubtitle">
          29 years of experience
        </span>
        {/* <span className="siFeatures">
          E
        </span> */}
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>

    </div>
  );
};
export { SearchItem, SearchItem2, SearchItem3, SearchItem4, SearchItem5, SearchItem6 };

