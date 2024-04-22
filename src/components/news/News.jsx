/* eslint-disable react/prop-types */
import { NewsData } from "../../assets/newsData";
import NewsCard from "../newsCard/NewsCard";
import styles from "./News.module.css";

const News = ({ bgColor, textColor }) => {
  return (
    <div
      className={styles.container}
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
