/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./MoreFocusArea.module.css";

const MoreFocusArea = ({ imagePath, heading, description }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />
      <div className={styles.contentDiv}>
        <h5 className={styles.heading}>{heading}</h5>
        <p className={styles.desc}>{description}</p>
        <Button content="Read More" bgColor={COLORS.orange} />
      </div>
    </div>
  );
};

export default MoreFocusArea;
