/* eslint-disable react/prop-types */
import styles from "./MoreFocusArea.module.css";

const MoreFocusArea = ({ imagePath, heading, description }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />
      <div className={styles.contentDiv}>
        <h5 className={styles.heading}>{heading}</h5>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};

export default MoreFocusArea;
