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
import ValueChain6 from "../components/valueChain6/ValueChain6";

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
        imagePath={"/images/focus_area/petro_chemicals.png"}
        heading="Decarbonization: Where are we Headed?"
        para={FocusAreasData[2].description}
        buttonText="Know More"
        textColor={COLORS.white}
        contentWidth="600px"
        headingMarginTop="110px"
      />

      <FocusDescription
        longDescription={FocusAreasData[2].longDescription}
        imagePath="/images/focus_area/petchem.png"
      />

      {/* Value chain section */}
      <ValueChain6 />

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
