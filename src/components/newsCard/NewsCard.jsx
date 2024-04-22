/* eslint-disable react/prop-types */
import styles from "./NewsCard.module.css";

const NewsCard = ({ date, heading, description }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.date}>{date}</h5>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default NewsCard;
