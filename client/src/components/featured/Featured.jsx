import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/photographers/countByCity?cities=hanoi,hcm,nd")
  return (
    <div className="featured">
      {loading ? (
        "Loadiung please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/photos/tran-quoc-pagoda-picture-id481045024?k=20&m=481045024&s=612x612&w=0&h=2W86P_TyoaVLYr7MKhJglkGwA3dYXBFi5idBCIfAV_k="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hanoi</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i.insider.com/5d5ec2082e22af2954154b84?width=700"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ho Chi Minh</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://kitaography.com/wp-content/uploads/2015/06/photo-1468242218924-27d5aa058a89.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nam Dinh</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>)}
    </div>
  );
};

export default Featured;
