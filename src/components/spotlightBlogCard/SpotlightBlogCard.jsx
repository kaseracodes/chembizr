/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./SpotlightBlogCard.module.css";

const SpotlightBlogCard = ({ imagePath, desc, blogId, heading }) => {
  const navigate = useNavigate();

  function replaceSpacesWithHyphens(url) {
    return url.replace(/ /g, "-");
  }

  return (
    <div
      className={styles.container}
      onClick={() =>
        navigate(`/insights/${replaceSpacesWithHyphens(heading)}/${blogId}`)
      }
    >
      <img src={imagePath} alt="image" />
      <div className={styles.desc}>{desc.slice(0, 100)}</div>
    </div>
  );
};

export default SpotlightBlogCard;
