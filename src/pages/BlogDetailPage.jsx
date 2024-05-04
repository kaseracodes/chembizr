/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { BlogsData } from "../assets/blogsData";
import styles from "./BlogDetailPage.module.css";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Banner2 from "../components/banner2/Banner2";
import CommentSection from "../components/commentSection/CommentSection";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";

const BlogDetailPage = () => {
  const params = useParams();
  const blog = BlogsData.find((item) => item.id === params.id);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.white}
        invertLogo={false}
        iconColor={COLORS.white}
      />

      <Banner2 imagePath={blog.imagePath} heading={blog.heading} />

      <div className={styles.mainDiv}>
        <div className={styles.path}>
          <Link to="/">ChemBizR</Link> / <a href="/blogs">Blogs</a> /{" "}
          <Link>{blog.category}</Link>
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
          <h5>{blog.author}</h5>
          <h5>{blog.date}</h5>
          {blog.description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <CommentSection
        comments={blog.comments}
        userImage="/images/profile_pic.png"
      />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
