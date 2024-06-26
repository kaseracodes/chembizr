/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Events.module.css";
import { EventsData } from "../../assets/eventsData";
import EventsCard from "../eventsCard/EventsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import { COLORS } from "../../assets/constants";
import Heading from "../heading/Heading";

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

const Events = ({ category }) => {
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

  if ( category == "All"  ){
    useEffect(() => {
      const unsubscribe = onSnapshot(
        query(
          collection(firestore, "events"), 
          orderBy("date", "desc")),
        (snapshot) => {
          setEventsData(snapshot.docs);
          // console.log(snapshot.docs[0].data());
          // console.log(eventsData.length);
        }
      );
  
      return unsubscribe;
    }, []);
  }
  else{
    useEffect(() => {
      const unsubscribe = onSnapshot(
        query(
          collection(firestore, "events"), 
          where("category", "==", category),
          orderBy("date", "desc")),
        (snapshot) => {
          setEventsData(snapshot.docs);
          // console.log(snapshot.docs[0].data());
          // console.log(eventsData.length);
        }
      );
  
      return unsubscribe;
    }, []);
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  let eventItems = [];
  for (let i = 0; i < eventsData.length; i++) {
    eventItems.push(
      <div key={i} className={styles.innerCardDiv}>
        <EventsCard
          imagePath={eventsData[i].data().images}
          logoPath={EventsData[0].logoPath}
          category={eventsData[i].data().category}
          date={eventsData[i].data().date}
          heading={eventsData[i].data().heading}
          description={eventsData[i].data().description}
        />
      </div>
    );
    // eventItems.push(<InnerCarousel />);
  }

  if (!eventsData || eventsData.length === 0) {
    return null; // Do not render anything if eventsData is empty
  }

  return (
    <div className={styles.container}>
      {/* <h3 className={styles.heading}>Events</h3> */}
      <Heading content="Events" />
      <div className={styles.carouselContainer}>
        <Carousel responsive={responsive} arrows={true}>
          {eventsData
            .slice(0, Math.min(8, eventsData.length))
            .map((item, index) => (
              <div key={index} className={styles.innerCardDiv}>
                <EventsCard
                  imagePath={item.data().images}
                  logoPath={EventsData[0].logoPath}
                  category={item.data().category}
                  date={formatDate(item.data().date)}
                  heading={item.data().heading}
                  description={item.data().description}
                />
              </div>
            ))}
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
        </Carousel>
      </div>

      <div className={styles.mobileCardDiv}>
        {eventsData && eventsData.length > 0 && (
          <EventsCard
            imagePath={eventsData[0].data().images}
            logoPath={EventsData[0].logoPath}
            category={eventsData[0].data().category}
            date={formatDate(eventsData[0].data().date)}
            heading={eventsData[0].data().heading}
            description={eventsData[0].data().description}
          />
        )}
        <button className={styles.btn} onClick={() => navigate("/events")}>
          Explore More Events{" "}
          <ArrowIcon color={COLORS.white} height="12" width="18" />
        </button>
      </div>
    </div>
  );
};

export default Events;
