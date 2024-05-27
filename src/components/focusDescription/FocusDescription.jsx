/* eslint-disable react/prop-types */
import styles from "./FocusDescription.module.css";

const FocusDescription = ({ longDescription, imagePath }) => {
  return (
    <div className={styles.container}>
      <div>
        {longDescription.map((item, index) => (
          <p key={index} className={styles.desc}>
            {item}
          </p>
        ))}
      </div>
      <img src={imagePath} alt="image" />
    </div>
  );
};

export default FocusDescription;
