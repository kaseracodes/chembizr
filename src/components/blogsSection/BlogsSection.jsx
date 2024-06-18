import { useNavigate } from "react-router-dom";
// import { BlogsData } from "../../assets/blogsData";
import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Heading from "../heading/Heading";
import styles from "./BlogsSection.module.css";
import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const BlogsSection = () => {
  const navigate = useNavigate();

  const [blogsData, setBlogsData] = useState();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "blogs"),
        // where("category", "==", Topics[currTopic]),
        orderBy("timestamp", "desc"),
        limit(8)
      ),
      (snapshot) => {
        setBlogsData(snapshot.docs);
        console.log(snapshot.docs[0].data().image);
      }
    );

    return unsubscribe;
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const replaceSpacesWithHyphens = (url) => {
    return url.replace(/ /g, "-");
  };

  return (
    <div className={styles.container}>
      <Heading content="Our Latest Insights" />

      <div className={styles.blogsContainer}>
      
        <div
          className={styles.one}
          style={{
            backgroundImage: `url("${blogsData && blogsData[0].data().image}")`,
          }}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[0].data().heading
              )}/${blogsData[0].data().id}`
            )
          }
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && formatDate(blogsData[0].data().date)}</p>
            <h5>
              {blogsData && blogsData[0].data().heading.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.two}
          style={{
            backgroundImage: `url("${blogsData && blogsData[1].data().image}")`,
          }}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[1].data().heading
              )}/${blogsData[1].data().id}`
            )
          }
        ></div>

        <div
          className={styles.three}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[1].data().heading
              )}/${blogsData[1].data().id}`
            )
          }
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && formatDate(blogsData[1].data().date)}</p>
            <h5>
              {blogsData && blogsData[1].data().heading.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.four}
          style={{
            backgroundImage: `url("${blogsData && blogsData[2].data().image}")`,
          }}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[2].data().heading
              )}/${blogsData[2].data().id}`
            )
          }
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && formatDate(blogsData[2].data().date)}</p>
            <h5>
              {blogsData && blogsData[2].data().heading.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.five}
          style={{
            backgroundImage: `url("${blogsData && blogsData[3].data().image}")`,
          }}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[3].data().heading
              )}/${blogsData[3].data().id}`
            )
          }
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && formatDate(blogsData[3].data().date)}</p>
            <h5>
              {blogsData && blogsData[3].data().heading.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div
          className={styles.six}
          style={{
            backgroundImage: `url("${blogsData && blogsData[4].data().image}")`,
          }}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[4].data().heading
              )}/${blogsData[4].data().id}`
            )
          }
        >
          <div className={styles.contentDiv}>
            <p>{blogsData && formatDate(blogsData[4].data().date)}</p>
            <h5>
              {blogsData && blogsData[4].data().heading.slice(0, 90) + "..."}
            </h5>
          </div>
        </div>

        <div className={styles.seven}>
          <div
            className={styles.contentDiv}
            onClick={() =>
              navigate(
                `/blogs/${replaceSpacesWithHyphens(
                  blogsData[5].data().heading
                )}/${blogsData[5].data().id}`
              )
            }
          >
            <p>{blogsData && formatDate(blogsData[5].data().date)}</p>
            <h5>
              {blogsData && blogsData[5].data().heading.slice(0, 90) + "..."}
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
            backgroundImage: `url("${blogsData && blogsData[5].data().image}")`,
          }}
          onClick={() =>
            navigate(
              `/blogs/${replaceSpacesWithHyphens(
                blogsData[5].data().heading
              )}/${blogsData[5].data().id}`
            )
          }
        ></div>

      </div>
    </div>
  );
};

export default BlogsSection;
