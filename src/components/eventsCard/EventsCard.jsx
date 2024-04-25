/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./EventsCard.module.css";

const EventsCard = ({
  imagePath,
  logoPath,
  category,
  date,
  heading,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageDiv}>
          <img src={imagePath[0]} alt="image" />
        </div>
        <div className={styles.contentDiv}>
          <div className={styles.topDiv}>
            <img src={logoPath} alt="logo" />
            <div className={styles.innerDiv}>
              <h5 className={styles.category}>{category}</h5>
              <p className={styles.date}>{date}</p>
            </div>
          </div>

          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.desc}>{description}</p>

          <button className={styles.btn} onClick={() => navigate("/events")}>
            Explore More Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
