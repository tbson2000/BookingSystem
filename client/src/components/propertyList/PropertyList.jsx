import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/photographers/countByPriType");
  // console.log(data)
  const images = [
    "https://expertphotography.b-cdn.net/wp-content/uploads/2021/02/children-photographers-2-1.jpg",
    "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6-1.jpg",
    "https://e3.365dm.com/19/08/2048x1152/skynews-pewdiepie-marzi-bisognin_4751188.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2021-05/13/18/asset/b8c401eadbd6/sub-buzz-609-1620930319-24.jpg",
    "https://i.pinimg.com/originals/46/cd/e1/46cde1793ed0e7727ffbf6dc7a7ea189.jpg",
  ]
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1> {data[i]?.primaryType} </h1>
                  <h2> {data[i]?.count} photographers</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
