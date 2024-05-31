/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Heading from "../heading/Heading";
import styles from "./UVP.module.css";
import { UVPData } from "../../assets/uvpData.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ imagePath, heading, desc }) => {
  return (
    <div className={styles.cardDiv}>
      <img src={imagePath} />
      <h5>{heading}</h5>
      <p>{desc}</p>
    </div>
  );
};

const UVP = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1250, min: 950 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 950, min: 600 },
      items: 2,
    },
    smallMobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const [showDots, setShowDots] = useState(window.innerWidth <= 1250);

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

  return (
    <div className={styles.container}>
      <Heading content="Unique Value Proposition" />

      <div className={styles.cardContainer}>
        <Carousel
          responsive={responsive}
          showDots={showDots}
          autoPlay={showDots}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={false}
        >
          {UVPData.map((item, index) => (
            <div key={index} className={styles.innerCardContainer}>
              <Card
                imagePath={item.imagePath}
                heading={item.heading}
                desc={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default UVP;
