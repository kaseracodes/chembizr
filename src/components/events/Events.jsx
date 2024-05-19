import styles from "./Events.module.css";
import { EventsData } from "../../assets/eventsData";
import EventsCard from "../eventsCard/EventsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import { COLORS } from "../../assets/constants";

const InnerCarousel = () => {
  const responsive = {
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

  const items = [
    <div key="1">
      <p>hii</p>
    </div>,
    <div key="2">
      <p>hii</p>
    </div>,
    <div key="3">
      <p>hii</p>
    </div>,
  ];

  return (
    <Carousel
      responsive={responsive}
      ssr
      infinite
      containerClass="inner-carousel-container"
      itemClass="inner-carousel-item"
      showDots
    >
      {items}
    </Carousel>
  );
};

const Events = () => {
  const navigate = useNavigate();

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
    const unsubscribe = onSnapshot(
      query(collection(firestore, "events"), orderBy("date", "desc")),
      (snapshot) => {
        setEventsData(snapshot.docs);
        console.log(snapshot.docs[0].data());
      }
    );

    return unsubscribe;
  }, []);

  let eventItems = [];
  for (let i = 0; i < EventsData.length; i++) {
    eventItems.push(
      <div key={i} className={styles.innerCardDiv}>
        <EventsCard
          imagePath={EventsData[i].imagePath}
          logoPath={EventsData[i].logoPath}
          category={EventsData[i].category}
          date={EventsData[i].date}
          heading={EventsData[i].heading}
          description={EventsData[i].description}
        />
      </div>
    );
    // eventItems.push(<InnerCarousel />);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Events</h3>
      <div className={styles.carouselContainer}>
        <Carousel responsive={responsive} ssr>
          {/* {eventsData.map((item, index) => (
            <EventsCard
              key={index}
              imagePath={item.data().imagePath}
              logoPath={item.data().logoPath}
              category={item.data().category}
              date={item.data().date}
              heading={item.data().heading}
              description={item.data().description}
            />

          ))} */}
          {/* {EventsData.map((item, index) => (
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
          ))} */}

          {eventItems}

          {/* <InnerCarousel />
          <InnerCarousel />
          <InnerCarousel /> */}
        </Carousel>
      </div>

      <div className={styles.mobileCardDiv}>
        <EventsCard
          imagePath={EventsData[0].imagePath}
          logoPath={EventsData[0].logoPath}
          category={EventsData[0].category}
          date={EventsData[0].date}
          heading={EventsData[0].heading}
          description={EventsData[0].description}
        />
        <button className={styles.btn} onClick={() => navigate("/events")}>
          Explore More Events{" "}
          <ArrowIcon color={COLORS.white} height="12" width="18" />
        </button>
      </div>
    </div>
  );
};

export default Events;
