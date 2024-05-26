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

const PetroChemicalsPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/focus_area3.png"}
        heading="Petro-Chemicals<br /> And Downstream"
        para={FocusAreasData[2].description}
        buttonText="Know More"
        textColor={COLORS.white}
        contentWidth={"600px"}
        headingMarginTop={"130px"}
      />

      <FocusDescription longDescription={FocusAreasData[2].longDescription} />

      {/* Value chain section */}
      <ValueChain />

      {/* Insights */}
      <Insights pagetype="Petrochemicals & Downstream" />

      {/* Compendium */}
      <Compendium category="Petrochemicals & Downstream" />

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

export default PetroChemicalsPage;
