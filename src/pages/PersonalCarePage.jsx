import styles from "./FoodNutritionPage.module.css";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Insights from "../components/insights/Insights";
import Compendium from "../components/compendium/Compendium";
import Events from "../components/events/Events";
import News from "../components/news/News";
import Footer from "../components/footer/Footer";
import CallToAction from "../components/callToAction/CallToAction";
import { FocusAreasData } from "../assets/focusAreas";
import FocusDescription from "../components/focusDescription/FocusDescription";
import ValueChain5 from "../components/valueChain5/ValueChain5";

const PersonalCarePage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/focus_area6.png"}
        heading="Making sense of the anti-pollution segment"
        para={FocusAreasData[5].description}
        buttonText="Know More"
        textColor={COLORS.white}
        contentWidth="600px"
        headingMarginTop="100px"
      />

      <FocusDescription
        longDescription={FocusAreasData[5].longDescription}
        imagePath="/images/focus_area/personal_care.png"
      />

      {/* Value chain section */}
      <ValueChain5 />

      {/* Insights */}
      <Insights pagetype="Personal Care & Cosmetics" />

      {/* Compendium */}
      <Compendium category="Personal Care & Cosmetics" />

      {/* Events */}
      <Events category="Personal Care & Cosmetics" />

      {/* Industry News */}
      <News
        bgColor={COLORS.white}
        textColor={COLORS.black}
        category="Personal Care & Cosmetics"
      />

      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PersonalCarePage;
