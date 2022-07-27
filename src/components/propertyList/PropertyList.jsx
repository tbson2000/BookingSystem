import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2021/02/children-photographers-2-1.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Children</h1>
          <h2>233 photographers</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/originals/46/cd/e1/46cde1793ed0e7727ffbf6dc7a7ea189.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Landscape</h1>
          <h2>2331 photographers</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6-1.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Black & White</h1>
          <h2>2331 photographers</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://img.buzzfeed.com/buzzfeed-static/static/2021-05/13/18/asset/b8c401eadbd6/sub-buzz-609-1620930319-24.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Wild & Natural</h1>
          <h2>2331 photographers</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://res.cloudinary.com/yaffa-publishing/image/fetch/q_auto:best,c_fit,w_630,f_auto/http%3A%2F%2Fyaffa-cdn.s3.amazonaws.com%2Fyaffadsp%2Fimages%2FdmImage%2FSourceImage%2Fjavier-garciabpishutterstock-.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Sport</h1>
          <h2>2331 photographers</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
