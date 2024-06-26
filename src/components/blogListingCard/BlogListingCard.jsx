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
  function replaceSpacesWithHyphens(url) {
    return url.replace(/ /g, '-');
  }
  function sanitizeUrl(url) {
    // Replace spaces and invalid URL characters with hyphens
    return url.replace(/[\s?]/g, '-');
  }
  // console.log(date);
  // const milliseconds =
  //   date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
  // const date1 = new Date(milliseconds);
  // const dateString = date1.toLocaleString();
  const dateString = date.toLocaleString();
  // console.log(dateString);
  return (
    <div className={styles.container}>
      <div
        className={styles.mainContainer}
        onClick={() => navigate(`/insights/${sanitizeUrl(heading)}/${blogId}`)}
      >
        <div className={styles.contentDiv}>
          <h3 className={styles.heading}>{heading}</h3>
          <h3 className={styles.mobileHeading}>
            {heading.slice(0, 50) + "..."}
          </h3>
          <h5 className={styles.author}>{author}</h5>
          {/* <p className={styles.desc}>
            {desc && (desc.length > 200 ? desc.slice(0, 200) + "..." : desc)}
          </p> */}
          <div
            dangerouslySetInnerHTML={{
              __html:
                desc && (desc.length > 200 ? desc.slice(0, 200) + "..." : desc),
            }}
            className={styles.desc}
          />

          {/* parse rich text */}
          <div className={styles.bottomDiv}>
            <button className={styles.category}>{category}</button>
            <p className={styles.date}>{dateString}</p>
          </div>
        </div>
        {imagePath && <img src={imagePath} alt="image" />}
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default BlogListingCard;
