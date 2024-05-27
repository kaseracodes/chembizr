import styles from "./MobilityPage.module.css";
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
import ValueChain4 from "../components/valueChain4/ValueChain4";

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
        contentWidth="450px"
        headingMarginTop={"130px"}
      />

      <FocusDescription
        longDescription={FocusAreasData[4].longDescription}
        imagePath="/images/focus_area/mobility.png"
      />

      <div className={styles.eMobilityContainer}>
        <h3 className={styles.eMobilityHeading}>
          E-Mobility:
          <br />
          Transitioning the acceleration
        </h3>
        <p className={styles.eMobilityDesc}>
          The EV, HEV, and FCV spectrum are one of the soaring market segments.
          Acquire the maximum market share by leveraging the right
          opportunities, uncovering challenges, and assessing recommendations in
          the e-mobility domain.
        </p>
      </div>

      <div className={styles.mobilityDiagram}>
        <img src="/images/focus_area/mobility_diagram.png" alt="image" />
      </div>

      {/* Value chain section */}
      <ValueChain4 />

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
