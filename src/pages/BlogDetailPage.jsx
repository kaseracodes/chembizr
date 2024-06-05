/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
// import { BlogsData } from "../assets/blogsData";
import styles from "./BlogDetailPage.module.css";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Banner2 from "../components/banner2/Banner2";
import CommentSection from "../components/commentSection/CommentSection";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import {
  collection,
  onSnapshot,
  orderBy,
  where,
  query,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogDetailPage = () => {
  const params = useParams();

  // const blog = userBlog.find((item) => item.id === params.id);
  // const [blog, setBlog] = useState();

  const navigate = useNavigate();
  const handleClickComment = () => {
    navigate(`/comment/${params.id}`);
  };
  const [userBlog, setUserBlog] = useState(null);
  useEffect(() => {
    if (params) {
      const unsubscribe = onSnapshot(
        query(collection(firestore, "blogs"), where("id", "==", params.id)),
        (snapshot) => {
          setUserBlog(snapshot.docs[0]);
          console.log(snapshot.docs[0].data());
        }
      );
      return unsubscribe;
    }
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={false}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      <Banner2
        imagePath={userBlog && userBlog.data().image}
        heading={userBlog && userBlog.data().heading}
        fontSize="80px"
      />

      <div className={styles.mainDiv}>
        <div className={styles.path}>
          <a href="/">ChemBizR</a> / <a href="/blogs">Blogs</a> /{" "}
          <a>{userBlog && userBlog.data().category}</a>
        </div>

        <div className={styles.btnDiv}>
          <button>
            <img src="/images/share_icon.png" /> Share
          </button>
          <button>
            <img src="/images/print_icon.png" /> Print / Save as PDF
          </button>
        </div>

        <div className={styles.contentDiv}>
          <h5>{userBlog && userBlog.data().author}</h5>
          <h5>{userBlog && userBlog.data().date}</h5>
          {/* {userBlog &&
            userBlog
              .data()
              .description.split("\n")
              .map((line, index) => <p key={index}>{line}</p>)} */}
          {userBlog && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: userBlog.data().description }} />
            </div>
          )}
        </div>
      </div>

      <CommentSection
        comments={
          userBlog && userBlog.data().comments ? userBlog.data().comments : []
        }
        userImage="/images/profile_pic.png"
      />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
