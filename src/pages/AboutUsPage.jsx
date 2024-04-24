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
        heading="The Consulting that Gets you more"
        para="We at ChemBizR, partner with global clients to unleash unique solutions across a variety of business verticals."
        buttonText="Insights"
        textColor={COLORS.black}
        contentWidth="500px"
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
