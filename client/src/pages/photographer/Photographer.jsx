import "./photographer.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Book from "../../components/book/Book";

const Photographer = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/photographers/find/${id}`)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const { dates, options } = useContext(SearchContext);


  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifferent(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY + 1);
    return diffDays
  }

  const days = dayDifferent(dates[0].endDate, dates[0].startDate)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true)
    } else {
      navigate("/login")
    }
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="photographerContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="photographerWrapper">
            <button className="bookNow">Book Now!</button>
            <h1 className="photographerTitle">{data.name}</h1>
            <div className="photographerAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="photographerYear">
              {data.primaryType}
            </span>
            <span className="photographerPriceHighlight">
              only ${data.cheapestPrice} for a 3 hours session
            </span>
            <div className="photographerImages">
              {data.photos?.map((photo, i) => (
                <div className="photographerImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="photographerImg"
                  />
                </div>
              ))}
            </div>
            <div className="photographerDetails">
              <div className="photographerDetailsTexts">
                <h1 className="photographerTitle"> {data.title} ranking</h1>
                <p className="photographerDesc">
                  {data.desc}
                </p>
              </div>
              <div className="photographerDetailsPrice">
                <h1>Professional and Resonable Photoshooting session!</h1>
                <span>
                  Many years of shooting in multiple styple. This photographer will give you the best experiences.
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.session}</b> <br /> ({days} day "hours"-any style)
                </h2>
                <button onClick={handleClick}>Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )},
      {openModal && <Book setOpen={setOpenModal} photographerId={id}/>}
    </div>
  );
};

export default Photographer;
