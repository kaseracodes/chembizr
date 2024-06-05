import styles from "./EventDetailPage.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { COLORS } from "../assets/constants";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { EventsData } from "../assets/eventsData";
import EventTitleCard from "../components/eventTitleCard/EventTitleCard";
import Button from "../components/button/Button";
import BussinessVerticals from "../components/bussinessVerticals/BussinessVerticals";
import { useEffect, useState } from "react";

const BussinessVerticalsItems = [
  "Adhesives and Sealants",
  "Animal Feed and Nutrition",
  "Composites",
  "Construction",
  "Energy And Resources",
  "Food and Nutrition",
  "Microbials",
  "Oil and Gas",
  "Paints & Coating",
  "Personal Care",
  "Petrochemicals & Downstream",
  "Polymers",
  "Surfactants",
];

const EventDetailPage = () => {
  const params = useParams();
  const event = EventsData.find((item) => item.id === params.id);

  const [showDots, setShowDots] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth < 550);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      <div className={styles.mainContainer}>
        <div className={styles.leftDiv}>
          <h5 className={styles.divHeading}>Recent Events</h5>
          <hr className={styles.hr} />
          <div className={styles.titleCardDiv}>
            {EventsData.map((item, index) => (
              <EventTitleCard
                key={index}
                heading={item.heading}
                date={new Date(
                  item.date.seconds * 1000 +
                  Math.floor(item.date.nanoseconds / 1000000)
                ).toLocaleString()}
              />
            ))}
          </div>
          <hr className={styles.hr} />

          <button className={styles.commentBtn}>Leave a comment!</button>
          <Button content="Subscribe" bgColor={COLORS.orange} />
        </div>

        <div className={styles.eventContainer}>
          <div className={styles.contentDiv}>
            <div className={styles.topDiv}>
              <img src={event && event.logoPath} alt="logo" />
              <div className={styles.innerDiv}>
                <h5 className={styles.category}>{event && event.category}</h5>
                <p className={styles.date}>{event && event.date}</p>
              </div>
            </div>

            <h3 className={styles.heading}>{event && event.heading}</h3>
            <p className={styles.desc}>{event && event.description}</p>
          </div>

          <div className={styles.imageDiv}>
            <Carousel
              responsive={responsive}
              showDots={showDots}
              arrows={!showDots}
            >
              {event &&
                event.imagePath.map((item, index) => (
                  <div key={index} className={styles.image}>
                    <img src={item} alt="image" />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>

        {/* <BussinessVerticals
          BussinessVerticals={BussinessVerticalsItems}
          buttonColor={COLORS.white}
        /> */}

        <div className={styles.bvContainer}>
          <h5 className={styles.divHeading}>Business Verticals</h5>
          <hr className={styles.hr} />
          <div className={styles.bvDiv}>
            {BussinessVerticalsItems.map((item, index) => (
              <button
                style={{ backgroundColor: buttonColors[index] }}
                className={`${styles.bvItem} ${index === activeButton ? styles.active : ""
                  }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
