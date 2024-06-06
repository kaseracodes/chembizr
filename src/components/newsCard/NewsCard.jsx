/* eslint-disable react/prop-types */
import styles from "./NewsCard.module.css";

const NewsCard = ({ date, heading, description }) => {
  // const milliseconds =
  //   date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
  // const date1 = new Date(milliseconds);
  const dateString = date.toLocaleString();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <div className={styles.newsCardcontainer}>
      <h5 className={styles.date}>{formatDate(dateString)}</h5>
      <h3 className={styles.heading}>{heading.slice(0, 50) + "..."}</h3>
      <p className={styles.desc}>{description.slice(0, 200) + "..."}</p>
    </div>
  );
};

export default NewsCard;
