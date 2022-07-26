import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.thephotoargus.com/wp-content/uploads/2019/08/fineartphotography01.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Portrait</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://i.insider.com/5d5ec2082e22af2954154b84?width=700"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Event</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://kitaography.com/wp-content/uploads/2015/06/photo-1468242218924-27d5aa058a89.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Landscape</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
