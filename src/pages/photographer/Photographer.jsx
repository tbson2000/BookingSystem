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
import { useState } from "react";

const Photographer = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://img.freepik.com/free-photo/landmark-forest-tourism-sunrise-famous-ancient_1417-1194.jpg?size=626&ext=jpg"
    },
    {
      src:"https://img.freepik.com/free-photo/asian-young-happy-family-enjoy-vacation-beach-evening-dad-mom-kid-relax-playing-together-near-sea-when-sunset-while-travel-holiday-lifestyle-travel-holiday-vacation-summer-concept_7861-2442.jpg?size=626&ext=jpgs"
    },
    {
      src:"https://img.freepik.com/premium-photo/silhouettes-bride-groom-sunset-reflection-pool_199620-8170.jpg?size=626&ext=jpg"
    },
    {
      src:"https://img.freepik.com/free-photo/studio-portrait-loving-mother-with-blonde-hair-embracing-her-playful-baby-magenta-background-smiling-camera-while-baby-moving-her-hands_132075-11614.jpg?size=626&ext=jpg"
    },
    {
      src:"https://img.freepik.com/free-photo/indoor-shot-overjoyed-teenage-girl-makes-online-call-via-smartphone-poses-camera-laughs-joyfully-dressed-winter-coat-hat-holds-bunch-helium-balloons-stands-against-pink-background_273609-58781.jpg?size=626&ext=jpg"
    },
    {
      src:"https://img.freepik.com/free-photo/asian-woman-wearing-vietnam-culture-traditional-strawberry-garden-doi-ang-khang-chiang-mai-thailand_335224-760.jpg?size=626&ext=jpg"
    },
  ];

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

  return (
    <div>
      <Navbar />
      <Header type="list" />
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
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
          <h1 className="photographerTitle">Steve McCurry</h1>
          <div className="photographerAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Cau Giay - Hanoi</span>
          </div>
          <span className="photographerDistance">
            10km away from your position
          </span>
          <span className="photographerPriceHighlight">
            only 500$ for a 3 hours session
          </span>
          <div className="photographerImages">
            {photos.map((photo, i) => (
              <div className="photographerImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="photographerImg"
                />
              </div>
            ))}
          </div>
          <div className="photographerDetails">
            <div className="photographerDetailsTexts">
              <h1 className="photographerTitle">Stay in the heart of City</h1>
              <p className="photographerDesc">
                Photographers use a variety of photographic equipment to capture
                events, people, objects or scenes for records, art or commercial
                use. Many photographers begin their careers as photographic
                assistants, setting up lights and stands, arranging transport
                and occasionally acting as a 'second shooter'.
              </p>
            </div>
            <div className="photographerDetailsPrice">
              <h1>Professional and Resonable Photoshooting session!</h1>
              <span>
                Many years of shooting in multiple styple. This photographer will give you the best experiences.
              </span>
              <h2>
                <b>500$</b> <br /> (3 hours-any style)
              </h2> 
              <button>Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Photographer;
