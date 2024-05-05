import styles from "./Events.module.css";
import { EventsData } from "../../assets/eventsData";
import EventsCard from "../eventsCard/EventsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Events = () => {
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
      <h3 className={styles.heading}>Events</h3>
      <div className={styles.carouselContainer}>
        <Carousel responsive={responsive}>
          {EventsData.map((item, index) => (
            <div key={index} className={styles.innerCardDiv}>
              <EventsCard
                imagePath={item.imagePath}
                logoPath={item.logoPath}
                category={item.category}
                date={item.date}
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
