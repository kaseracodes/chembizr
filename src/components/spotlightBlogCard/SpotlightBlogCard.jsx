/* eslint-disable react/prop-types */
import styles from "./SpotlightBlogCard.module.css";

const SpotlightBlogCard = ({ imagePath, desc }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />
      <div className={styles.desc}>{desc.slice(0, 100)}</div>
    </div>
  );
};

export default SpotlightBlogCard;
