import styles from "./FoodNutritionPage.module.css";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import ValueChain2 from "../components/valueChain2/ValueChain2";
import Insights from "../components/insights/Insights";
import Compendium from "../components/compendium/Compendium";
import Events from "../components/events/Events";
import News from "../components/news/News";
import Footer from "../components/footer/Footer";
import CallToAction from "../components/callToAction/CallToAction";
import { FocusAreasData } from "../assets/focusAreas";
import FocusDescription from "../components/focusDescription/FocusDescription";

const ChemicalsPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/chemicals.png"}
        heading={FocusAreasData[1].heading}
        para={FocusAreasData[1].description}
        buttonText="Know More"
        textColor={COLORS.white}
        contentWidth="500px"
        // headingMarginTop="100px"
      />

      <FocusDescription
        longDescription={FocusAreasData[1].longDescription}
        imagePath="/images/focus_area/polymers.png"
      />

      {/* Value chain section */}
      <ValueChain2 />

      {/* Insights */}
      <Insights pagetype="Speciality Chemicals and Polymers" />

      {/* Compendium */}
      <Compendium category="Speciality Chemicals and Polymers" />

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

export default ChemicalsPage;
