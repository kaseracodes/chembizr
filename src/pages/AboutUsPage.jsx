import { COLORS } from "../assets/constants";
import Banner from "../components/banner/Banner";
import CallToAction from "../components/callToAction/CallToAction";
import CoreValues from "../components/coreValues/CoreValues";
import FindUs from "../components/findUs/FindUs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import OriginStory from "../components/originStory/OriginStory";
import Places from "../components/places/Places";
import Vision from "../components/vision/Vision";
import styles from "./AboutUsPage.module.css";
import { CoreValuesData } from "../assets/coreValuesData";

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
      />

      <Banner
        imagePath={"/images/about_us_hero.png"}
        heading="The Consulting<br />that Gets you more"
        para="We at ChemBizR, partner with global<br />clients to unleash unique solutions across<br />a variety of business verticals."
        buttonText="Insights"
        textColor={COLORS.black}
        headingFontSize="56px"
        headingFontWeight="600"
        headingMarginTop="120px"
        headingLineHeight="135%"
      />

      <OriginStory />

      <CoreValues heading="Our Teaming Principles" cardData={CoreValuesData} />

      <Vision />

      <FindUs />

      <Places />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default AboutUsPage;
