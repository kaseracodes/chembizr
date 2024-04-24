/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./BlogListingCard.module.css";

const BlogListingCard = ({
  blogId,
  imagePath,
  heading,
  author,
  desc,
  category,
  date,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={styles.mainContainer}
        onClick={() => navigate(`/blogs/${blogId}`)}
      >
        <div className={styles.contentDiv}>
          <h3 className={styles.heading}>{heading}</h3>
          <h5 className={styles.author}>{author}</h5>
          <p className={styles.desc}>{desc.slice(0, 200) + "..."}</p>
          <div className={styles.bottomDiv}>
            <button className={styles.category}>{category}</button>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
        <img src={imagePath} alt="image" />
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default BlogListingCard;
