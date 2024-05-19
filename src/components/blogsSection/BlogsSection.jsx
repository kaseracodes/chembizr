import { useNavigate } from "react-router-dom";
import { BlogsData } from "../../assets/blogsData";
import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Heading from "../heading/Heading";
import styles from "./BlogsSection.module.css";
import { useEffect, useState } from "react";
// import {
//   collection,
//   getDocs,
//   limit,
//   onSnapshot,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import { firestore } from "../../firebase/firebase";

const BlogsSection = () => {
  const navigate = useNavigate();

  const blogsData = BlogsData.slice(6, 12);

  return (
    <div className={styles.container}>
      <Heading content="Our Latest Blogs" />
      <div className={styles.blogsContainer}>
        <div
          className={styles.one}
          style={{
            backgroundImage: `url(${blogsData && blogsData[0].imagePath})`,
          }}
          onClick={() => navigate(`/blogs/${blogsData[0].id}`)}
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && blogsData[0].date}</p>
            <h5>
              {blogsData && blogsData[0].description.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.two}
          style={{
            backgroundImage: `url(${blogsData && blogsData[1].imagePath})`,
          }}
          onClick={() => navigate(`/blogs/${blogsData[1].id}`)}
        ></div>

        <div
          className={styles.three}
          onClick={() => navigate(`/blogs/${blogsData[1].id}`)}
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && blogsData[1].date}</p>
            <h5>
              {blogsData && blogsData[1].description.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.four}
          style={{
            backgroundImage: `url(${blogsData && blogsData[2].imagePath})`,
          }}
          onClick={() => navigate(`/blogs/${blogsData[2].id}`)}
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && blogsData[2].date}</p>
            <h5>
              {blogsData && blogsData[2].description.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.five}
          style={{
            backgroundImage: `url(${blogsData && blogsData[3].imagePath})`,
          }}
          onClick={() => navigate(`/blogs/${blogsData[3].id}`)}
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && blogsData[3].date}</p>
            <h5>
              {blogsData && blogsData[3].description.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.six}
          style={{
            backgroundImage: `url(${blogsData && blogsData[4].imagePath})`,
          }}
          onClick={() => navigate(`/blogs/${blogsData[4].id}`)}
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && blogsData[4].date}</p>
            <h5>
              {blogsData && blogsData[4].description.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div className={styles.seven}>
          <div
            className={styles.contentDiv}
            onClick={() => navigate(`/blogs/${blogsData[5].id}`)}
          >
            <p>{blogsData && blogsData[5].date}</p>
            <h5>
              {blogsData && blogsData[5].description.slice(0, 90) + "..."}
            </h5>
          </div>

          <button className={styles.btn} onClick={() => navigate("/blogs")}>
            Read More On Our Blog{" "}
            <ArrowIcon color={COLORS.white} height="12" width="18" />
          </button>
        </div>

        <div
          className={styles.eight}
          style={{
            backgroundImage: `url(${blogsData && blogsData[5].imagePath})`,
          }}
          onClick={() => navigate(`/blogs/${blogsData[5].id}`)}
        ></div>
      </div>
    </div>
  );
};

export default BlogsSection;
