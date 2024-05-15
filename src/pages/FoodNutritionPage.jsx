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

const FoodNutritionPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/food_page_hero.png"}
        heading="Food and<br />Nutrition"
        para="In 2022, the number of investment deals in the overall plant-<br />based food segment fell from 38 to 33. In particular, the<br />American and European regions experienced problems<br />like business closures. The market for plant-based foods, however, is<br />expanding in the Asia Pacific region right now. In 2022,<br />investment in the APAC plant-based food industry increased by<br />30%, reaching a valuation of."
        buttonText="Know More"
        textColor={COLORS.black}
        headingMarginTop="80px"
      />

      {/* Value chain section */}
      <ValueChain />

      {/* Insights */}
      <Insights />

      {/* Compendium */}
      <Compendium category="Food, Nutrition & Beverages"/>

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
