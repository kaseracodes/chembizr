import styles from "./FoodNutritionPage.module.css";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import ValueChain from "../components/valueChain/ValueChain";
import Insights from "../components/insights/Insights";
import Compendium from "../components/compendium/Compendium";
import Events from "../components/events/Events";
import News from "../components/news/News";
import Footer from "../components/footer/Footer";
import CallToAction from "../components/callToAction/CallToAction";
import FocusDescription from "../components/focusDescription/FocusDescription";
import { FocusAreasData } from "../assets/focusAreas";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BannerLoader from "../components/bannerLoader/BannerLoader";

const FoodNutritionPage = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);

    try {
      const bannersRef = collection(firestore, "banners");
      const q = query(
        bannersRef,
        where("page", "==", "Food, Nutrition & Beverages")
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const bannerDoc = querySnapshot.docs[0].data();
        setBanner(bannerDoc);
        console.log(bannerDoc);
      } else {
        setError("No banner found for the selected page.");
      }
    } catch (err) {
      setError("Error fetching banner: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      {loading || !banner ? (
        <BannerLoader />
      ) : (
        <Banner
          imagePath={banner.image ? banner.image : "/images/food_page_hero.png"}
          heading={
            banner.heading
              ? banner.heading
              : "What’s driving food factory closures – and how to avoid them"
          }
          para={
            banner.description
              ? banner.description
              : FocusAreasData[0].description
          }
          buttonText="Know More"
          buttonLink={
            banner.link ? banner.link : "/food-nutrition-and-beverages"
          }
          textColor={COLORS.white}
          headingMarginTop="100px"
          contentWidth="700px"
        />
      )}

      <FocusDescription
        longDescription={FocusAreasData[0].longDescription}
        imagePath="/images/focus_area/food.png"
      />

      {/* Value chain section */}
      <ValueChain />

      {/* Insights */}
      <Insights pagetype="Food, Nutrition & Beverages" />

      {/* Compendium */}
      <Compendium category="Food, Nutrition & Beverages" />

      {/* Events */}
      <Events category="Food, Nutrition & Beverages" />

      {/* Industry News */}
      <News
        bgColor={COLORS.white}
        textColor={COLORS.black}
        category="Food and Nutrition"
      />

      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FoodNutritionPage;
