import { useEffect, useState } from "react";
import { PlacesData } from "../../assets/placesData";
import PlaceCard from "../placeCard/PlaceCard";
import styles from "./Places.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 750 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
  },
};

const Places = () => {
  const [showDots, setShowDots] = useState(window.innerWidth <= 1000);

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
      <Carousel
        responsive={responsive}
        autoPlay={showDots}
        autoPlaySpeed={3000}
        showDots={showDots}
        arrows={false}
        infinite={true}
      >
        {PlacesData.map((item, index) => (
          <div key={index} className={styles.innerContainer}>
            <PlaceCard
              imagePath={item.imagePath}
              country={item.country}
              address={item.address}
              email={item.email}
              phone={item.phone}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Places;
