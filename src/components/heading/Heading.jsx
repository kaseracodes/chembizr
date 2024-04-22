/* eslint-disable react/prop-types */
import styles from "./Heading.module.css";

const Heading = ({ content }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{content}</h1>
      <hr className={styles.hr} />
    </div>
  );
};

export default Heading;
