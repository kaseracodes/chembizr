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
import { FocusAreasData } from "../assets/focusAreas";
import FocusDescription from "../components/focusDescription/FocusDescription";

const CleanEnergyPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/fa4.png"}
        heading="Clean Energy<br /> And Storage"
        para={FocusAreasData[3].description}
        buttonText="Know More"
        textColor={COLORS.white}
        // contentWidth="450px"
        headingMarginTop={"130px"}
      />

      <FocusDescription longDescription={FocusAreasData[3].longDescription} />

      {/* Value chain section */}
      <ValueChain />

      {/* Insights */}
      <Insights pagetype="Clean Energy & Storage" />

      {/* Compendium */}
      <Compendium category="Clean Energy & Storage" />

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

export default CleanEnergyPage;
