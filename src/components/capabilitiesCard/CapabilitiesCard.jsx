/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import GreaterThanIcon from "../../svgIcons/GreaterThanIcon";
import styles from "./CapabilitiesCard.module.css";

const CapabilitiesCard = ({ imagePath, heading, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageDiv}>
          <img src={imagePath} alt="image" />
        </div>

        <div className={styles.contentDiv}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.desc}>{description.slice(0, 90) + "..."}</p>
        </div>
      </div>
      <button className={styles.btn}>
        Read More <GreaterThanIcon color={COLORS.green} />
      </button>
    </div>
  );
};

export default CapabilitiesCard;
