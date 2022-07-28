import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTyQ4GN0YgGkjB7YLK-dcAczYTbtpZ6ErcOYnsB8gIzv6YZy8I0I7Y8Qw9KkhKAj6Ee"
          alt=""
          className="siImg"
        />
        <span className="fpName">Steve McCurry</span>
        <span className="fpCity">Hanoi</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.datocms-assets.com/56778/1635523352-1634721749411298-20212010-annie-leibovitz.jpeg?auto64=Zm9ybWF0LGNvbXByZXNz&cs=srgb"
          alt=""
          className="siImg"
        />
        <span className="fpName">Annie Leibovitz</span>
        <span className="fpCity">Ho Chi Minh</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img

          src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQAL0y9TiHDIy9H4jokRnrMhqHhTewfFhCmvF5QD6vtcFw7GAYt9e7HZEx8Qwls2xWl"
          alt=""
          className="siImg  "
        />
        <span className="fpName">Elliott Erwitt</span>
        <span className="fpCity">Da Nang</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img

          src="https://www.nationalgeographic.com/content/dam/expeditions/experts/expert-ami-vitale.ngsversion.1530212855456.adapt.1900.1.jpg"
          alt=""
          className="siImg"
        />
        <span className="fpName">Ami Vitale</span>
        <span className="fpCity">Hanoi</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
