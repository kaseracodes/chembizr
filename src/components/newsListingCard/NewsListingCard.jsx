/* eslint-disable react/prop-types */
import { useState } from "react";
import { COLORS } from "../../assets/constants";
import GreaterThanIcon from "../../svgIcons/GreaterThanIcon";
import styles from "./NewsListingCard.module.css";

const NewsListingCard = ({ date, heading, description, category }) => {
  const [expanded, setExpanded] = useState(false);
  const [desc, setDesc] = useState(description.slice(0, 400) + "...");

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
      <p className={styles.date}>{date}</p>
      <h5 className={styles.heading}>{heading}</h5>
      <p className={styles.desc}>{desc}</p>
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
