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

const FoodNutritionPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/food_page_hero.png"}
        heading="What’s driving food factory closures – and how to avoid them"
        para={FocusAreasData[0].description}
        buttonText="Know More"
        textColor={COLORS.black}
        headingMarginTop="100px"
        contentWidth="700px"
      />

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
      <Events />

      {/* Industry News */}
      <News bgColor={COLORS.white} textColor={COLORS.black} />

      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FoodNutritionPage;
