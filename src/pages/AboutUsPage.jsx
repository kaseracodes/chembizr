import { COLORS } from "../assets/constants";
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
import Button from "../components/button/Button";

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
      />

      {/* <Banner
        imagePath={"/images/about_us_hero.png"}
        heading="The Consulting<br />that Gets you more"
        para="We at ChemBizR, partner with global<br />clients to unleash unique solutions across<br />a variety of business verticals."
        buttonText="Insights"
        textColor={COLORS.black}
        headingMarginTop="120px"
        headingLineHeight="135%"
      /> */}

      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <h1
            className={styles.bannerHeading}
            dangerouslySetInnerHTML={{
              __html: "The Consulting<br />that Gets you more",
            }}
          />
          <p
            className={styles.bannerPara}
            dangerouslySetInnerHTML={{
              __html:
                "We at ChemBizR, partner with global<br />clients to unleash unique solutions across<br />a variety of business verticals.",
            }}
          />

          <Button content="Insights" bgColor={COLORS.orange} />
        </div>

        <div className={styles.bannerImage}>
          <img src="/images/about_us_hero.png" alt="image" />
        </div>
      </div>

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
