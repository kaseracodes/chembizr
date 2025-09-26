/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../components/banner/Banner";
import CallToAction from "../components/callToAction/CallToAction";
import CareAndCosmetics from "../components/careAndCosmetics/CareAndCosmetics";
import Chemicals from "../components/chemicals/Chemicals";
import EnergyAndStorage from "../components/energyAndStorage/EnergyAndStorage";
import FoodNutrition from "../components/foodNutrition/FoodNutrition";
import Mobility from "../components/mobility/Mobility";
import PetroChemicals from "../components/petroChemicals/PetroChemicals";
import styles from "./FocusParentPage.module.css";
import { MoreFocusAreasData } from "../assets/moreFocusAreas";
import MoreFocusArea from "../components/moreFocusArea/MoreFocusArea";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Footer from "../components/footer/Footer";
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from "react-icons/fa";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BannerLoader from "../components/bannerLoader/BannerLoader";
import MetaTag from "../components/metaTag/MetaTag";
import React from "react";

const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.customLeftArrow} onClick={() => previous()}>
        <FaArrowLeft size={15} />
      </button>
      <button className={styles.customRightArrow} onClick={() => next()}>
        <FaArrowRight size={15} />
      </button>
    </div>
  );
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const FocusParentPage = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlayPause = () => setAutoPlay(!autoPlay);

  const fetchBanner = async () => {
    setLoading(true);
    setBanner(null);
    try {
      const bannersRef = collection(firestore, "banners");
      const q = query(bannersRef, where("page", "==", "Focus Parent"));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setBanner(querySnapshot.docs[0].data());
      }
    } catch (err) {
      console.error("Error fetching banner:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  // ---------------- JSON-LD ----------------
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "https://chembizr.com/";

  const focusAreas = [
    { name: "Food, Nutrition & Beverages", slug: "food-nutrition-and-beverages" },
    { name: "Specialty Chemicals and Polymers", slug: "specialty-polymers" },
    { name: "Petrochemicals & Downstream", slug: "petrochemicals" },
    { name: "Clean Energy & Storage", slug: "clean-energy-and-storage" },
    { name: "Mobility", slug: "mobility" },
    { name: "Personal Care & Cosmetics", slug: "personal-care-and-cosmetics" },
  ];

  const itemListElements = focusAreas.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: area.name,
    item: `${origin}/${area.slug}`
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/focus/#webpage`,
        url: `${origin}/focus`,
        name: "Our Industry Focus | ChemBizR",
        description:
          "At ChemBizR, our industrial and market focus is extensive. We offer deep insights and consulting services in a variety of domains and verticals.",
        publisher: { "@id": `${origin}/#organization` }
      },
      {
        "@type": "ItemList",
        "@id": `${origin}/focus/#itemlist`,
        itemListElement: itemListElements
      }
    ]
  };
  // -----------------------------------------

  return (
    <>
      <MetaTag
        title="Our Industry Focus | ChemBizR"
        description="At ChemBizR, our industrial and market focus is extensive. We offer deep insights and consulting services in a variety of domains and verticals. Learn more."
      />

      <JsonLd data={jsonLd} />

      <div className={styles.container}>
        <Navbar
          textColor={COLORS.black}
          iconColor={COLORS.black}
          bgColor={COLORS.white}
        />

        {/* Banner */}
        {loading || !banner ? (
          <BannerLoader />
        ) : (
          <Banner
            imagePath={
              banner.image ? banner.image : "/images/focus_area/focus_area6.png"
            }
            heading={
              banner.heading
                ? banner.heading
                : "Personal Care<br />Magazine: Making<br />sense of the anti-<br />pollution segment"
            }
            para={
              banner.description
                ? banner.description
                : "‘Anti-pollution’ is one of the newest buzzwords in the personal care and cosmetics industries."
            }
            buttonText="Read More"
            headingLineHeight="120%"
            buttonLink={banner.link ? banner.link : "/focus"}
          />
        )}

        <FoodNutrition />
        <Chemicals />
        <PetroChemicals />
        <EnergyAndStorage />
        <Mobility />
        <CareAndCosmetics />

        <div className={styles.carouselContainer} id="more">
          <h3 className={styles.heading}>More of Our Focus Verticals</h3>
          <h5 className={styles.subHeading}>
            Get personalized solutions across a few more of our business verticals
          </h5>
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={autoPlay}
            autoPlaySpeed={3000}
            customButtonGroup={<CustomButtonGroup />}
            showDots={true}
          >
            {MoreFocusAreasData.map((item, index) => (
              <div key={index} className={styles.innerCardContainer}>
                <MoreFocusArea
                  id="more"
                  imagePath={item.imagePath}
                  heading={item.heading}
                  description={item.description}
                />
              </div>
            ))}
          </Carousel>

          <button onClick={handlePlayPause} className={styles.playButton}>
            {autoPlay ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default FocusParentPage;