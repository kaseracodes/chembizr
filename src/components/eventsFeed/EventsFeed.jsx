/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import { EventsData } from "../../assets/eventsData";
import Button from "../button/Button";
import EventFeedCard from "../eventFeedCard/EventFeedCard";
import EventTitleCard from "../eventTitleCard/EventTitleCard";
import styles from "./EventsFeed.module.css";
// import BussinessVerticals from "../bussinessVerticals/BussinessVerticals";
import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useSearchParams } from "react-router-dom";
import Pagination from "../pagination/Pagination";

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
  const [eventsData, setEventsData] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [buttonColors, setButtonColors] = useState(
    Array(BussinessVerticalsItems.length).fill(COLORS.white)
  );

  const handleClick = (index) => {
    setActiveButton(index);

    const newButtonColors = Array(BussinessVerticalsItems.length).fill(
      COLORS.white
    );
    newButtonColors[index] = COLORS.green;
    setButtonColors(newButtonColors);
  };

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const NEWS_PER_PAGE = 3;
  const hasPrev = NEWS_PER_PAGE * (page - 1) > 0;
  const hasNext = NEWS_PER_PAGE * page < eventsData.length;
  const startIndex = NEWS_PER_PAGE * (page - 1);
  const endIndex = Math.min(startIndex + NEWS_PER_PAGE, eventsData.length);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, "events"), orderBy("date", "desc")),
      (snapshot) => {
        setEventsData(snapshot.docs);
        console.log(snapshot.docs[0].data());
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h5 className={styles.divHeading}>Recent Events</h5>
        <hr className={styles.hr} />
        <div className={styles.titleCardDiv}>
          {eventsData.map((item, index) => (
            <EventTitleCard
              key={index}
              heading={item.data().heading}
              // date={new Date(
              //   item.date.seconds * 1000 +
              //     Math.floor(item.date.nanoseconds / 1000000)
              // ).toLocaleString()}
              date={item.data().date}
            />
          ))}
        </div>
        <hr className={styles.hr} />

        <button className={styles.commentBtn}>Leave a comment!</button>
        <Button content="Subscribe" bgColor={COLORS.orange} />
      </div>

      <div className={styles.middleDiv}>
        {eventsData.slice(startIndex, endIndex).map((item, index) => (
          <EventFeedCard
            key={index}
            category={item.data().category}
            date={item.data().date}
            heading={item.data().heading}
            description={item.data().description}
            imagePath={item.data().images}
            logoPath={item.data().images}

            // category={item.category}
            // date={item.date}
            // heading={item.heading}
            // description={item.description}
            // imagePath={item.imagePath}
            // logoPath={item.logoPath}
          />
        ))}

        <Pagination
          page={page}
          hasPrev={hasPrev}
          hasNext={hasNext}
          parentPage="events"
        />
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
              className={`${styles.bvItem} ${
                index === activeButton ? styles.active : ""
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
  );
};

export default EventsFeed;
