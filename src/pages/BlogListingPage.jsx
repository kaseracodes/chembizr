/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import { COLORS } from "../assets/constants";
import Navbar from "../components/navbar/Navbar";
import SearchIcon from "../svgIcons/SearchIcon";
import styles from "./BlogListingPage.module.css";
import { BlogsData } from "../assets/blogsData";
import SpotlightBlogCard from "../components/spotlightBlogCard/SpotlightBlogCard";
import Button from "../components/button/Button";
import BlogListingCard from "../components/blogListingCard/BlogListingCard";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

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

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const responsive2 = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2,
  //   },
  // };

  const Topics = [
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
  ];

  const [currTopic, setCurrTopic] = useState(0);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
      />

      <div className={styles.mainContainer}>
        <div className={styles.leftDiv}>
          <div className={styles.topicsCarouselDiv}>
            <Slider {...settings}>
              {Topics.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                  <p
                    className={styles.topicHeading}
                    onClick={() => setCurrTopic(index)}
                    style={{
                      color: currTopic === index ? COLORS.green : COLORS.black,
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

          <div className={styles.blogsListingDiv}>
            {BlogsData.map((item, index) => (
              <BlogListingCard
                key={index}
                blogId={item.id}
                heading={item.heading}
                imagePath={item.imagePath}
                author={item.author}
                desc={item.description}
                category={item.category}
                date={item.date}
              />
            ))}
          </div>
        </div>

        <div className={styles.rightDiv}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Search Blogs" />
            <button className={styles.icon}>
              <SearchIcon color={COLORS.black} height="20" width="20" />
            </button>
          </div>

          <div className={styles.spotlightDiv}>
            <h5 className={styles.spotlightHeading}>Spotlight</h5>
            <Carousel responsive={responsive} showDots arrows={false}>
              {BlogsData.map((item, index) => (
                <SpotlightBlogCard
                  key={index}
                  imagePath={item.imagePath}
                  desc={item.description}
                />
              ))}
            </Carousel>
          </div>

          <div className={styles.topicsDiv}>
            <h5 className={styles.topicsDivHeading}>
              Looking for a Specific Topic?
            </h5>

            <div className={styles.topicsContainer}>
              {Topics.map((item, index) => (
                <div className={styles.topic} key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.newsletterDiv}>
            <h5>Subscribe to our newsletter!</h5>
            <div className={styles.emailInputContainer}>
              <input type="email" placeholder="Email address" />
              <Button content="Submit" bgColor={COLORS.orange} />
            </div>
          </div>
        </div>
      </div>

      <CallToAction />

      <Footer />
    </div>
  );
};

export default BlogListingPage;
