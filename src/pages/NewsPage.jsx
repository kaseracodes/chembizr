import styles from "./NewsPage.module.css";
import Banner2 from "../components/banner2/Banner2";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
// import BussinessVerticals from "../components/bussinessVerticals/BussinessVerticals";
// import { NewsListingData } from "../assets/newsListingData";
import NewsListingCard from "../components/newsListingCard/NewsListingCard";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import Pagination from "../components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

const NewsPage = () => {
  const BussinessVerticalsItems = [
    // "Adhesives and Sealants",
    // "Animal Feed and Nutrition",
    // "Base Oils and Waxes",
    // "Bio Polymers",
    // "Composites",
    // "Construction",
    // "Energy and Resources",
    // "Food and Nutrition",
    // "Industrial Fluids",
    // "Mobility",
    // "Oil and Gas",
    // "Paints and Coatings",
    // "Personal Care",

    "Adhesives and Sealants",
    "Animal Feed and Nutrition",
    "Composites",
    "Construction",
    "Clean Energy And Resources",
    "Food and Nutrition",
    "Microbials",
    "Mobility",
    "Paints & Coating",
    "Personal Care & Cosmetics",
    "Petrochemicals & Downstream",
    "Speciality Polymers",
    "Surfactants",
    "Plastic Additives and Plasticizers",
  ];

  const [newsData, setNewsData] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [buttonColors, setButtonColors] = useState(
    Array(BussinessVerticalsItems.length).fill(COLORS.gray3)
  );

  const handleClick = (index) => {
    setActiveButton(index);

    const newButtonColors = Array(BussinessVerticalsItems.length).fill(
      COLORS.gray3
    );
    newButtonColors[index] = COLORS.green;
    setButtonColors(newButtonColors);
  };

  useEffect(() => {
    buttonColors[activeButton] = COLORS.green;

    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "news"),
        where("category", "==", BussinessVerticalsItems[activeButton]),
        orderBy("date", "desc")
      ),
      (snapshot) => {
        setNewsData(snapshot.docs);
        console.log(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [activeButton]);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const NEWS_PER_PAGE = 3;
  const hasPrev = NEWS_PER_PAGE * (page - 1) > 0;
  const hasNext = NEWS_PER_PAGE * page < newsData.length;
  const startIndex = NEWS_PER_PAGE * (page - 1);
  const endIndex = Math.min(startIndex + NEWS_PER_PAGE, newsData.length);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      <Banner2 imagePath="/images/news_page_hero.png" heading="Industry News" />

      <div className={styles.newsListingDiv}>
        <div className={styles.newsCardDiv}>
          {newsData.slice(startIndex, endIndex).map((item, index) => (
            <NewsListingCard
              key={index}
              date={item.data().date}
              heading={item.data().heading}
              description={item.data().desc}
              category={item.data().category}
            />
          ))}
          <Pagination
            page={page}
            hasPrev={hasPrev}
            hasNext={hasNext}
            parentPage="news"
          />
        </div>

        {/* <BussinessVerticals
          BussinessVerticals={BussinessVerticalsItems}
          buttonColor={COLORS.gray3}
        /> */}

        <div className={styles.bvContainer}>
          <h5 className={styles.divHeading}>Business Verticals</h5>
          <hr className={styles.hr} />
          <div className={styles.bvDiv}>
            {BussinessVerticalsItems.map((item, index) => (
              <button
                style={{ backgroundColor: buttonColors[index] }}
                className={`${styles.bvItem} ${
                  index === activeButton ? styles.active : ""
                }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />

      <Footer />
    </div>
  );
};

export default NewsPage;
