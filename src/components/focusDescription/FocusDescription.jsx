/* eslint-disable react/prop-types */
import styles from "./FocusDescription.module.css";

const FocusDescription = ({ longDescription }) => {
  return (
    <div className={styles.container}>
      {longDescription.map((item, index) => (
        <p key={index} className={styles.desc}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default FocusDescription;
