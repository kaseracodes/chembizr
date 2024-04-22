/* eslint-disable react/prop-types */
import styles from "./CoreValuesCard.module.css";

const CoreValuesCard = ({ imagePath, heading, description }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default CoreValuesCard;
