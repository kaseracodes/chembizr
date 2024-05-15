/* eslint-disable react/prop-types */
import styles from "./NewsCard.module.css";

const NewsCard = ({ date, heading, description }) => {
  const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
  const date1 = new Date(milliseconds);
  const dateString = date1.toLocaleString(); 
  return (
    <div className={styles.container}>
      <h5 className={styles.date}>{dateString}</h5>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default NewsCard;
