/* eslint-disable react/prop-types */
import styles from "./EventTitleCard.module.css";

const EventTitleCard = ({ heading, date }) => {
  return (
    <div className={styles.titleCardContainer}>
      <p className={styles.titleCardHeading}>{heading}</p>
      <p className={styles.titleCardDate}>{date}</p>
    </div>
  );
};

export default EventTitleCard;
