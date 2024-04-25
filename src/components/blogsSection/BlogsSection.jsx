import { useNavigate } from "react-router-dom";
import { BlogsData } from "../../assets/blogsData";
import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Heading from "../heading/Heading";
import styles from "./BlogsSection.module.css";

const BlogsSection = () => {
  const navigate = useNavigate();

  const blogs = BlogsData.slice(6, 12);

  return (
    <div className={styles.container}>
      <Heading content="Our Latest Blogs" />
      <div className={styles.blogsContainer}>
        <div
          className={styles.one}
          style={{ backgroundImage: `url(${blogs[0].imagePath})` }}
        >
          <div className={styles.contentDiv}>
            <p>{blogs[0].date}</p>
            <h5>{blogs[0].description.slice(0, 100) + "..."}</h5>
          </div>
        </div>

        <div
          className={styles.two}
          style={{ backgroundImage: `url(${blogs[1].imagePath})` }}
        ></div>

        <div className={styles.three}>
          <div className={styles.contentDiv}>
            <p>{blogs[1].date}</p>
            <h5>{blogs[1].description.slice(0, 100) + "..."}</h5>
          </div>
        </div>

        <div
          className={styles.four}
          style={{ backgroundImage: `url(${blogs[2].imagePath})` }}
        >
          <div className={styles.contentDiv}>
            <p>{blogs[2].date}</p>
            <h5>{blogs[2].description.slice(0, 100) + "..."}</h5>
          </div>
        </div>

        <div
          className={styles.five}
          style={{ backgroundImage: `url(${blogs[3].imagePath})` }}
        >
          <div className={styles.contentDiv}>
            <p>{blogs[3].date}</p>
            <h5>{blogs[3].description.slice(0, 100) + "..."}</h5>
          </div>
        </div>

        <div
          className={styles.six}
          style={{ backgroundImage: `url(${blogs[4].imagePath})` }}
        >
          <div className={styles.contentDiv}>
            <p>{blogs[4].date}</p>
            <h5>{blogs[4].description.slice(0, 100) + "..."}</h5>
          </div>
        </div>

        <div className={styles.seven}>
          <div className={styles.contentDiv}>
            <p>{blogs[5].date}</p>
            <h5>{blogs[5].description.slice(0, 100) + "..."}</h5>
          </div>

          <button className={styles.btn} onClick={() => navigate("/blogs")}>
            Read More On Our Blog{" "}
            <ArrowIcon color={COLORS.white} height="12" width="18" />
          </button>
        </div>

        <div
          className={styles.eight}
          style={{ backgroundImage: `url(${blogs[5].imagePath})` }}
        ></div>
      </div>
    </div>
  );
};

export default BlogsSection;
