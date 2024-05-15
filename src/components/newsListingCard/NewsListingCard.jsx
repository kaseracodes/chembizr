/* eslint-disable react/prop-types */
import { useState } from "react";
import { COLORS } from "../../assets/constants";
import GreaterThanIcon from "../../svgIcons/GreaterThanIcon";
import styles from "./NewsListingCard.module.css";

const NewsListingCard = ({ date, heading, description, category }) => {
  const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
  const date1 = new Date(milliseconds);
  const dateString = date1.toLocaleString(); 
  const [expanded, setExpanded] = useState(false);
  const [desc, setDesc] = useState(description);

  const handleClick = () => {
    if (expanded) {
      setDesc(description.slice(0, 400) + "...");
    } else {
      setDesc(description);
    }

    setExpanded(!expanded);
  };
  return (
    <div className={styles.container}>
      <p className={styles.date}>{dateString}</p>
      <h5 className={styles.heading}>{heading}</h5>
      <p className={styles.desc}>{desc && (desc.length > 400 ?desc.slice(0, 400) + "..." : desc)}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.category}>{category}</button>
        <button
          className={`${styles.icon} ${expanded ? styles.active : ""}`}
          onClick={handleClick}
        >
          <GreaterThanIcon color={COLORS.darkGray} />
        </button>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default NewsListingCard;
