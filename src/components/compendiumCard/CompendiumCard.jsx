/* eslint-disable react/prop-types */
import styles from "./CompendiumCard.module.css";

const CompendiumCard = ({ imagePath, subHeading, heading, description }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />
      <h5 className={styles.subHeading}>{subHeading}</h5>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default CompendiumCard;
