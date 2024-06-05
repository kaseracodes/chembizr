/* eslint-disable react/prop-types */
import styles from "./Banner2.module.css";
import { useState, useEffect } from "react";

const Banner2 = ({ imagePath, heading }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (imagePath) {
      setImageUrl(`url("${imagePath}")`);
    }
  }, [imagePath]);

  console.log(imageUrl);

  return (
    <div className={styles.container} style={{ backgroundImage: imageUrl }}>
      <h1 className={styles.heading}>{heading}</h1>
    </div>
  );
};

export default Banner2;
