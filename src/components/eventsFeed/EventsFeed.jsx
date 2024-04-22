/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import { EventsData } from "../../assets/eventsData";
import Button from "../button/Button";
import EventFeedCard from "../eventFeedCard/EventFeedCard";
import EventTitleCard from "../eventTitleCard/EventTitleCard";
import styles from "./EventsFeed.module.css";
import BussinessVerticals from "../bussinessVerticals/BussinessVerticals";

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

const EventsFeed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h5 className={styles.divHeading}>Recent Events</h5>
        <hr className={styles.hr} />
        <div className={styles.titleCardDiv}>
          {EventsData.map((item, index) => (
            <EventTitleCard
              key={index}
              heading={item.heading}
              date={item.date}
            />
          ))}
        </div>
        <hr className={styles.hr} />

        <button className={styles.commentBtn}>Leave a comment!</button>
        <Button content="Subscribe" bgColor={COLORS.orange} />
      </div>

      <div className={styles.middleDiv}>
        {EventsData.map((item, index) => (
          <EventFeedCard
            key={index}
            category={item.category}
            date={item.date}
            heading={item.heading}
            description={item.description}
            imagePath={item.imagePath}
            logoPath={item.logoPath}
          />
        ))}
      </div>

      <BussinessVerticals BussinessVerticals={BussinessVerticalsItems} buttonColor={COLORS.white}/>
    </div>
  );
};

export default EventsFeed;
