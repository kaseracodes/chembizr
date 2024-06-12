/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./SpotlightBlogCard.module.css";

const SpotlightBlogCard = ({ imagePath, desc, blogId }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/blogs/${blogId}`)}
    >
      <img src={imagePath} alt="image" />
      <div className={styles.desc}>{desc.slice(0, 100)}</div>
    </div>
  );
};

export default SpotlightBlogCard;
