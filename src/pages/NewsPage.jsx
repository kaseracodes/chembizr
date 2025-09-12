import styles from "./NewsPage.module.css";
import Banner2 from "../components/banner2/Banner2";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
// import BussinessVerticals from "../components/bussinessVerticals/BussinessVerticals";
// import { NewsListingData } from "../assets/newsListingData";
import NewsListingCard from "../components/newsListingCard/NewsListingCard";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import { useState, useEffect, useRef } from "react";
import { firestore } from "../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import Pagination from "../components/pagination/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import MetaTag from "../components/metaTag/MetaTag";
import React from "react";

/* Small helper to inject JSON-LD */
const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

const NewsPage = () => {
  const BussinessVerticalsItems = [
    "All",
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
  const initialColors = BussinessVerticalsItems.map((item, index) =>
    index === 0 ? COLORS.green : COLORS.gray3
  );

  const [buttonColors, setButtonColors] = useState(initialColors);

  const handleClick = (index) => {
    setActiveButton(index);

    const newButtonColors = Array(BussinessVerticalsItems.length).fill(
      COLORS.gray3
    );
    newButtonColors[index] = COLORS.green;
    setButtonColors(newButtonColors);
  };

  useEffect(() => {
    let q;

    if (activeButton === 0) {
      q = query(collection(firestore, "news"), orderBy("date", "desc"));
    } else {
      q = query(
        collection(firestore, "news"),
        where("category", "==", BussinessVerticalsItems[activeButton]),
        orderBy("date", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNewsData(snapshot.docs);
      console.log(snapshot.docs);
    });

    return unsubscribe;
  }, [activeButton]);

  const newsCardDivRef = useRef(null);
  const { pathname } = useLocation();
  const currentPage = new URLSearchParams(window.location.search).get("page");

  useEffect(() => {
    newsCardDivRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, currentPage]);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const NEWS_PER_PAGE = 4;
  const hasPrev = NEWS_PER_PAGE * (page - 1) > 0;
  const hasNext = NEWS_PER_PAGE * page < newsData.length;
  const startIndex = NEWS_PER_PAGE * (page - 1);
  const endIndex = Math.min(startIndex + NEWS_PER_PAGE, newsData.length);

  // ---------------- JSON-LD BUILD ----------------
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "https://chembizr.com/";

  // Build itemListElement for the current page slice (so JSON-LD matches visible content)
  const itemListElements =
    newsData && newsData.length
      ? newsData.slice(startIndex, endIndex).map((doc, idx) => {
          const data = doc.data();
          const slugOrId = data.slug || data.id || doc.id || `${startIndex + idx}`;
          const url = `${origin}/news/${slugOrId}`;
          return {
            "@type": "ListItem",
            position: startIndex + idx + 1,
            name: data.heading || data.title || `News ${startIndex + idx + 1}`,
            item: url,
          };
        })
      : [];

  const listingJsonLd =
    itemListElements.length > 0
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${origin}/news/#webpage`,
              url: `${origin}/news`,
              name: "Industry News | ChemBizR",
              description:
                "Read the latest happenings in the chemical industry with our extensive news coverage in a variety of sectors, helping readers stay updated.",
              publisher: { "@id": `${origin}/#organization` },
            },
            {
              "@type": "ItemList",
              "@id": `${origin}/news/#itemlist`,
              itemListElement: itemListElements,
            },
          ],
        }
      : null;
  // -------------- END JSON-LD BUILD ----------------

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <MetaTag
        title="Industry News | ChemBizR"
        description="Read the latest happenings in the chemical industry with our extensive news coverage in a variety of sectors, helping readers stay updated. Learn more."
      />

      <div className={styles.container}>
        <Navbar
          textColor={COLORS.black}
          iconColor={COLORS.black}
          bgColor={COLORS.white}
        />

        <Banner2 imagePath="/images/news_page_hero.png" heading="Industry News" />

        {/* Inject JSON-LD when we have data for this page */}
        {listingJsonLd && <JsonLd data={listingJsonLd} />}

        <div className={styles.newsListingDiv}>
          <div className={styles.newsCardDiv} ref={newsCardDivRef}>
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
    </>
  );
};

export default NewsPage;