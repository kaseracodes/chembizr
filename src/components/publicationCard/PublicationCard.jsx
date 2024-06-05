/* eslint-disable react/prop-types */
import styles from "./PublicationCard.module.css";

const PublicationCard = ({ imagePath, date, heading, description }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imagePath} alt="image" />
      <h5 className={styles.date}>{date}</h5>
      <h3 className={styles.heading}>{heading.slice(0, 55) + "..."}</h3>
      <p className={styles.desc}>{description.slice(0, 180) + "..."}</p>
    </div>
  );
};

export default PublicationCard;
