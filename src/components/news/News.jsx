/* eslint-disable react/prop-types */
import { NewsData } from "../../assets/newsData";
import NewsCard from "../newsCard/NewsCard";
import styles from "./News.module.css";
import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const News = ({ bgColor, textColor }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, "news"), orderBy("date", "desc")),
      (snapshot) => {
        setNewsData(snapshot.docs);
        // console.log(snapshot.docs[0].data());
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div
      className={styles.newsContainer}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h3 className={styles.heading}>Industry News</h3>
      <div className={styles.newsCarouselDiv}>
        <div
          className={styles.slideTrack}
          style={{ width: `calc(500px * ${NewsData.length}` }}
        >
          {NewsData.map((item, index) => (
            <NewsCard
              key={index}
              date={item.date}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
