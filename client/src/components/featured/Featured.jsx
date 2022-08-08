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
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG8lMjBjaGklMjBtaW5oJTIwY2l0eSUyMHZpZXRuYW18ZW58MHx8MHx8&w=1000&q=80"
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
              src="https://image.vietnamlawmagazine.vn/uploadvietnamlaw/2017/11/3/trang-30jpg17012695.jpg"
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
