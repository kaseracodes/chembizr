/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import { EventsData } from "../../assets/eventsData";
import Button from "../button/Button";
import EventFeedCard from "../eventFeedCard/EventFeedCard";
import EventTitleCard from "../eventTitleCard/EventTitleCard";
import styles from "./EventsFeed.module.css";
// import BussinessVerticals from "../bussinessVerticals/BussinessVerticals";
import React, { useState, useEffect, useRef } from "react";
import { auth, firestore } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
} from "firebase/firestore";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const BussinessVerticalsItems = [
  "All",
  "Adhesives and Sealants",
  "Animal Feed and Nutrition",
  "Composites",
  "Construction",
  "Clean Energy And Resources",
  "Food, Nutrition & Beverages",
  "Microbials",
  "Mobility",
  "Paints & Coating",
  "Personal Care & Cosmetics",
  "Petrochemicals & Downstream",
  "Speciality Polymers",
  "Surfactants",
];

const EventsFeed = () => {
  const [eventsData, setEventsData] = useState([]);
  const [alleventsData, setAllEventsData] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [content, setContent] = useState("");
  const [user] = useAuthState(auth);

  const initialColors = BussinessVerticalsItems.map((item, index) =>
    index === 0 ? COLORS.green : COLORS.gray3
  );

  const [buttonColors, setButtonColors] = useState(initialColors);

  const handleClick = (index) => {
    setActiveButton(index);

    const newButtonColors = Array(BussinessVerticalsItems.length).fill(
      COLORS.white
    );
    newButtonColors[index] = COLORS.green;
    setButtonColors(newButtonColors);
  };

  const middleDivRef = useRef(null);
  const { pathname } = useLocation();
  const currentPage = new URLSearchParams(window.location.search).get("page");

  useEffect(() => {
    middleDivRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, currentPage]);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const EVENTS_PER_PAGE = 5;
  const hasPrev = EVENTS_PER_PAGE * (page - 1) > 0;
  const hasNext = EVENTS_PER_PAGE * page < eventsData.length;
  const startIndex = EVENTS_PER_PAGE * (page - 1);
  const endIndex = Math.min(startIndex + EVENTS_PER_PAGE, eventsData.length);

  useEffect(() => {
    let q;

    if (activeButton === 0) {
      q = query(collection(firestore, "events"), orderBy("date", "desc"));
    } else {
      q = query(
        collection(firestore, "events"),
        where("category", "==", BussinessVerticalsItems[activeButton]),
        orderBy("date", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEventsData(snapshot.docs);
      // console.log(snapshot.docs[0].data());
    });

    return unsubscribe;
  }, [activeButton]);

  useEffect(() => {
    const q = query(
      collection(firestore, "events"),
      orderBy("date", "desc"),
      limit(3)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllEventsData(snapshot.docs);
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to submit a comment.");
      return;
    }

    if (!content.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    try {
      const commentData = {
        author: user.displayName || user.email,
        content: content,
        email: user.email,
        timestamp: serverTimestamp(),
      };

      const commentRef = doc(
        firestore,
        "comments",
        user.uid + "_" + Date.now()
      );
      await setDoc(commentRef, commentData);

      setContent("");
      alert("Comment submitted successfully!");
    } catch (error) {
      console.error("Error submitting comment: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h5 className={styles.divHeading}>Recent Events</h5>
        <hr className={styles.hr} />
        <div className={styles.titleCardDiv}>
          {alleventsData.map((item, index) => (
            <EventTitleCard
              key={index}
              category={item.data().category}
              date={formatDate(item.data().date)}
              heading={item.data().heading}
              description={item.data().description}
              imagePath={item.data().images}
              logoPath={item.data().images}
            />
          ))}
        </div>
        <hr className={styles.hr} />

        {/* <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment..."
            required
          />
          <button
            type="button" // Use type="button" to avoid submitting the form if wrapped in a form tag
            onClick={handleSubmitComment}
            disabled={!user}
          >
            Submit Comment
          </button>
        </div> */}

        <input
          type="text"
          placeholder="Write your comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.commentBtn}
        />
        <Button
          content="Submit"
          bgColor={COLORS.orange}
          disabled={!user}
          onClick={handleSubmitComment}
        />
      </div>

      <div className={styles.middleDiv} ref={middleDivRef}>
        {eventsData.slice(startIndex, endIndex).map((item, index) => (
          <EventFeedCard
            key={index}
            category={item.data().category}
            date={formatDate(item.data().date)}
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
