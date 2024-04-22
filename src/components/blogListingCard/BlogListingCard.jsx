/* eslint-disable react/prop-types */
import styles from "./BlogListingCard.module.css";

const BlogListingCard = ({
  imagePath,
  heading,
  author,
  desc,
  category,
  date,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.contentDiv}>
          <h3 className={styles.heading}>{heading}</h3>
          <h5 className={styles.author}>{author}</h5>
          <p className={styles.desc}>{desc}</p>
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
