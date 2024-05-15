import styles from "./Events.module.css";
// import { EventsData } from "../../assets/eventsData";
import EventsCard from "../eventsCard/EventsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

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

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
      const unsubscribe = onSnapshot(query(collection(firestore, "events"), orderBy("date", "desc")), (snapshot) => {
        setEventsData(snapshot.docs);
          console.log(snapshot.docs[0].data());
      });

      return unsubscribe;
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Events</h3>
      <div className={styles.carouselContainer}>
        <Carousel responsive={responsive}>
          {eventsData.map((item, index) => (
            <EventsCard
              key={index}
              imagePath={item.data().imagePath}
              logoPath={item.data().logoPath}
              category={item.data().category}
              date={item.data().date}
              heading={item.data().heading}
              description={item.data().desc}
            />

          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
