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
        heading="Food and Nutrition"
        para="In 2022, the number of investment deals in the overall plant-based food segment fell from 38 to 33. In particular, the American and European regions experienced problems like business closures. The market for plant-based foods, however, is expanding in the Asia Pacific region right now. In 2022, investment in the APAC plant-based food industry increased by 30%, reaching a valuation of."
        buttonText="Know More"
        textColor={COLORS.black}
        contentWidth="450px"
      />

      {/* Value chain section */}
      <ValueChain />

      {/* Insights */}
      <Insights />

      {/* Compendium */}
      <Compendium />

      {/* Events */}
      <Events />

      {/* Industry News */}
      <News bgColor={COLORS.black} textColor={COLORS.white} />

      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FoodNutritionPage;
