/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./EventsCard.module.css";

const EventsCard = ({
  logoPath,
  category,
  date,
  heading,
  description,
}) => {
  const navigate = useNavigate();
  const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
  const date1 = new Date(milliseconds);
  const dateString = date1.toLocaleString(); 
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* <div className={styles.imageDiv}>
          <img src={imagePath[0]} alt="image" />
        </div> */}
        <div className={styles.contentDiv}>
          <div className={styles.topDiv}>
            <img src={logoPath} alt="logo" />
            <div className={styles.innerDiv}>
              <h5 className={styles.category}>{category}</h5>
              <p className={styles.date}>{dateString}</p>
            </div>
          </div>

          <h3 className={styles.heading}>{heading}</h3>
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description }}></div>

          <button className={styles.btn} onClick={() => navigate("/events")}>
            Explore More Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
