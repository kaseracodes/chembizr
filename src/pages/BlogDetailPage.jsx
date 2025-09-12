/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
// import { BlogsData } from "../assets/blogsData";
import styles from "./BlogDetailPage.module.css";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Banner2 from "../components/banner2/Banner2";
import CommentSection from "../components/commentSection/CommentSection";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

/* Small helper that injects JSON-LD */
const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/* Small inline sanitizer for JSON-LD description (used only for schema) */
const stripHtml = (html = "") => ("" + html).replace(/<[^>]*>?/gm, "").trim();

/* Safe date converter that handles Firestore Timestamp or plain values */
const toISOStringSafe = (d) => {
  if (!d) return undefined;
  // Firestore Timestamp
  if (typeof d.toDate === "function") return d.toDate().toISOString();
  // ISO string / number / Date
  const date = new Date(d);
  return isNaN(date.getTime()) ? undefined : date.toISOString();
};

const BlogDetailPage = () => {
  const params = useParams();
  const [shareFeedbackText, setShareFeedbackText] = useState("");

  // const blog = userBlog.find((item) => item.id === params.id);
  // const [blog, setBlog] = useState();

  // const navigate = useNavigate();

  // const handleClickComment = () => {
  //   navigate(`/comment/${params.id}`);
  // };

  const handleShareButtonClick = () => {
    const pageUrl = window.location.href; // Get the current page URL

    if (navigator.clipboard && window.isSecureContext) {
      // Use the modern Clipboard API
      navigator.clipboard
        .writeText(pageUrl)
        .then(() => {
          setShareFeedbackText("Link copied!");
          setTimeout(() => setShareFeedbackText(""), 3000); // Clear the message after 3 seconds
        })
        .catch((err) => {
          console.error("Failed to copy the link: ", err);
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = pageUrl;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setShareFeedbackText("Link copied!");
        setTimeout(() => setShareFeedbackText(""), 3000); // Clear the message after 3 seconds
      } catch (err) {
        console.error("Failed to copy the link: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const handlePrintButtonClick = () => {
    window.scrollTo(0, 0);
    window.print();
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
    // original had empty deps — keep that behavior
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  /* ------------------- Build JSON-LD (only when userBlog exists) ------------------- */
  const blogData = userBlog ? userBlog.data() : null;

  // origin normalization (no trailing slash)
  const rawOrigin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : (process.env.REACT_APP_SITE_URL || "https://chembizr.com");
  const origin = rawOrigin.replace(/\/+$/, "");

  const blogUrl = blogData ? `${origin}/blogs/${blogData.slug || params.id}` : undefined;

  const imageAbsolute =
    blogData && blogData.image
      ? blogData.image.startsWith("http")
        ? blogData.image
        : new URL(blogData.image, origin).href
      : `${origin}/images/default-blog-image.png`;

  const cleanDescription = blogData
    ? stripHtml(blogData.description || "").slice(0, 300)
    : "";

  const blogJsonLd = blogData
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": blogUrl
        },
        "headline": blogData.heading || blogData.title || "Blog post",
        "description": cleanDescription || blogData.excerpt || "",
        "image": [
          {
            "@type": "ImageObject",
            "url": imageAbsolute
          }
        ],
        "author": {
          "@type": "Person",
          "name": blogData.author || "ChemBizR"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ChemBizR",
          "logo": {
            "@type": "ImageObject",
            "url": `${origin}/images/logo.png`
          }
        },
        "datePublished": toISOStringSafe(blogData.date),
        "dateModified": toISOStringSafe(blogData.updatedAt || blogData.date)
      }
    : null;

  const breadcrumbJsonLd = blogData
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": origin
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blogs",
            "item": `${origin}/blogs`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": blogData.heading || blogData.title,
            "item": blogUrl
          }
        ]
      }
    : null;
  /* ------------------------------------------------------------------------------- */

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={false}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Inject JSON-LD only when blogData is available */}
      {blogJsonLd && <JsonLd data={blogJsonLd} />}
      {breadcrumbJsonLd && <JsonLd data={breadcrumbJsonLd} />}

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
          <button onClick={handleShareButtonClick}>
            <img src="/images/share_icon.png" />{" "}
            {shareFeedbackText ? shareFeedbackText : "Share"}
          </button>
          <button onClick={handlePrintButtonClick}>
            <img src="/images/print_icon.png" /> Print / Save as PDF
          </button>
        </div>

        <div className={styles.contentDiv}>
          <h5>{userBlog && userBlog.data().author}</h5>
          <h5>{userBlog && formatDate(userBlog.data().date)}</h5>
          {/* {userBlog &&
            userBlog
              .data()
              .description.split("\n")
              .map((line, index) => <p key={index}>{line}</p>)} */}
          {userBlog && (
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: userBlog.data().description,
                }}
              />
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