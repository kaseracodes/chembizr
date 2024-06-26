/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import { COLORS } from "../assets/constants";
import Navbar from "../components/navbar/Navbar";
import SearchIcon from "../svgIcons/SearchIcon";
import styles from "./BlogListingPage.module.css";
// import { BlogsData } from "../assets/blogsData";
import SpotlightBlogCard from "../components/spotlightBlogCard/SpotlightBlogCard";
import Button from "../components/button/Button";
import BlogListingCard from "../components/blogListingCard/BlogListingCard";
// import CallToAction from "../components/callToAction/CallToAction";
// import Footer from "../components/footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
// import BlogListingComponent from "../components/BlogListingComponent";
// import { useParams, useSearchParams } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
// import CallToAction from "../components/callToAction/CallToAction";
// import Footer from "../components/footer/Footer";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  doc, 
  setDoc,
  serverTimestamp 
} from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: COLORS.gray3,
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
};

const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: COLORS.gray3,
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
};

const BlogListingPage = () => {

  const [currTopic, setCurrTopic] = useState(0);
  const [question, setQuestion] = useState('');
  const [user] = useAuthState(auth);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showArrows, setShowArrows] = useState(window.innerWidth > 950);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 950);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const onClickNext = () => {
  //   setCurrTopic((currTopic + 1) % 9);
  // };

  // const onClickPrev = () => {
  //   setCurrTopic((currTopic + 8) % 9);
  // };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: showArrows && <NextButton />,
    prevArrow: showArrows && <PrevButton />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Topics = [
    "All",
    "Adhesives & Sealants",
    "Animal Feed & Nutrition",
    "Composites",
    "Construction",
    "Clean Energy & Resources",
    "Food, Nutrition & Beverages",
    "Alternative Food",
    "Microbials",
    "Mobility",
    "Petrochemicals & Downstream",
    "Paints & Coatings",
    "Personal Care & Cosmetics",
    "Specialty Polymers",
    "Surfactants",
  ];

  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    let q;

    if (currTopic === 0) {
      q = query(collection(firestore, "blogs"), orderBy("date", "desc"));
    } else {
      q = query(
        collection(firestore, "blogs"),
        where("category", "==", Topics[currTopic]),
        orderBy("date", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setBlogsData(snapshot.docs);
    });

    return () => unsubscribe();
  }, [currTopic]);

  const leftDivRef = useRef(null);
  const { pathname } = useLocation();
  const currentPage = new URLSearchParams(window.location.search).get("page");

  useEffect(() => {
    leftDivRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, currentPage]);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const BLOG_PER_PAGE = 4;
  const hasPrev = BLOG_PER_PAGE * (page - 1) > 0;
  const hasNext = BLOG_PER_PAGE * page < blogsData.length;
  const startIndex = BLOG_PER_PAGE * (page - 1);
  const endIndex = Math.min(startIndex + BLOG_PER_PAGE, blogsData.length);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleSubmitQuery = async () => {
    if (!user) {
      alert("You must be logged in to submit a query.");
      return;
    }

    if (!question.trim()) {
      alert("Query cannot be empty.");
      return;
    }

    try {
      const queryData = {
        user: user.displayName || user.email,
        question: question,
        email: user.email,
        timestamp: serverTimestamp(),
      };

      const queryRef = doc(firestore, "queries", `${user.uid}_${Date.now()}`);
      await setDoc(queryRef, queryData);

      setQuestion('');
      alert("Query submitted successfully!");
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      <div className={styles.mainContainer}>
        {/* <div className={styles.outerInputDiv}>
          <div className={styles.mobileInputContainer}>
            <input type="text" placeholder="Search Blogs" />
            <button className={styles.icon}>
              <SearchIcon color={COLORS.black} height="20" width="20" />
            </button>
          </div>
        </div> */}

        <div className={styles.leftDiv} ref={leftDivRef}>
          <div className={styles.topicsCarouselOuterDiv}>
            <div className={styles.topicsCarouselDiv}>
              <Slider {...settings}>
                {Topics.map((item, index) => (
                  <div key={index} className={styles.carouselItem}>
                    <p
                      className={styles.topicHeading}
                      onClick={() => setCurrTopic(index)}
                      style={{
                        color:
                          currTopic === index ? COLORS.green : COLORS.black,
                        fontWeight: currTopic === index ? "600" : "400",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </Slider>
              <hr />
            </div>
          </div>

          <div className={styles.blogsListingDiv}>
            {blogsData.slice(startIndex, endIndex).map((item, index) => (
              <BlogListingCard
                key={index}
                blogId={item.data().id}
                heading={item.data().heading}
                imagePath={item.data().image}
                author={item.data().author}
                desc={item.data().short}
                category={item.data().category}
                date={formatDate(item.data().date)}
              />
            ))}
            {/* <BlogListingComponent currentTopic={Topics[currTopic]} /> */}
          </div>

          <Pagination
            page={page}
            hasPrev={hasPrev}
            hasNext={hasNext}
            parentPage="insights"
          />
        </div>

        <div className={styles.rightDiv}>
          {/* <div className={styles.inputContainer}>
            <input type="text" placeholder="Search Blogs" />
            <button className={styles.icon}>
              <SearchIcon color={COLORS.black} height="20" width="20" />
            </button>
          </div> */}

          <div className={styles.spotlightDiv}>
            <h5 className={styles.spotlightHeading}>Spotlight</h5>
            <Carousel responsive={responsive} showDots arrows={false}>
              {blogsData
                .filter((item) => item.data().isspotlight === "true")
                .map((item, index) => {
                  // console.log("Short: ", item.data().short);
                  return (
                    <SpotlightBlogCard
                      key={index}
                      imagePath={item.data().image}
                      desc={item.data().short}
                      blogId={item.data().id}
                      heading={item.data().heading}
                    />
                  );
                })}
            </Carousel>
          </div>

          <div className={styles.topicsDiv}>
            <h5 className={styles.topicsDivHeading}>
              Looking for a Specific Topic?
            </h5>

            {/* <div className={styles.topicsContainer}>
              {Topics.map((item, index) => (
                <div
                  className={styles.topic}
                  key={index}
                  // onClick={() => handleTopicClick(index)}
                >
                  {item}
                </div>
              ))}
            </div> */}
          </div>

          <div className={styles.newsletterDiv}>
            <h5>Have Any Further Queries?</h5>
            <div className={styles.emailInputContainer}>
              <input
                type="text"
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Feel free to share..."
              />
              <Button content="Submit" bgColor={COLORS.orange} onClick={handleSubmitQuery}/>
            </div>
          </div>
        </div>
      </div>

      {/* <CallToAction /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default BlogListingPage;
