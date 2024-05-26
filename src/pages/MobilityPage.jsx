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

const MobilityPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/focus_area5.png"}
        heading="Mobility"
        para={FocusAreasData[4].description}
        buttonText="Know More"
        textColor={COLORS.black}
        // contentWidth="450px"
        headingMarginTop={"130px"}
      />

      <FocusDescription longDescription={FocusAreasData[4].longDescription} />

      {/* Value chain section */}
      <ValueChain />

      {/* Insights */}
      <Insights pagetype="Mobility" />

      {/* Compendium */}
      <Compendium category="Mobility" />

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

export default MobilityPage;
