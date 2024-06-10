import styles from "./CleanEnergyPage.module.css";
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import ValueChain4 from "../components/valueChain4/ValueChain4";

const CleanEnergyPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 750 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 750, min: 550 },
      items: 2,
    },
    smallMobile: {
      breakpoint: { max: 550, min: 0 },
      items: 2,
    },
  };

  const [showDots, setShowDots] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/clean_energy.png"}
        heading="Can energy storage power the sustainability revolution?"
        para={FocusAreasData[3].description}
        buttonText="Know More"
        textColor={COLORS.white}
        contentWidth="800px"
        headingMarginTop="100px"
      />

      <FocusDescription
        longDescription={FocusAreasData[3].longDescription}
        imagePath="/images/focus_area/clean_energy2.png"
      />

      <div className={styles.geContainer}>
        <h3 className={styles.geHeading}>Green Energy</h3>
        <p className={styles.geDesc}>
          Meet the net-zero emissions target by implementing dependable and
          long-term solutions to transform the material portfolio to a more
          green and clean version.
        </p>
        <div className={styles.geImageContainer}>
          <Carousel
            responsive={responsive}
            showDots={showDots}
            arrows={!showDots}
            autoPlay={true}
            autoPlaySpeed={1000}
            infinite={showDots}
          >
            <div className={styles.geImageDiv}>
              <img src="/images/focus_area/ge1.webp" alt="image" />
              <p className={styles.geImageHeading}>Solar</p>
            </div>
            <div className={styles.geImageDiv}>
              <img src="/images/focus_area/ge2.webp" alt="image" />
              <p className={styles.geImageHeading}>Wind</p>
            </div>
            <div className={styles.geImageDiv}>
              <img src="/images/focus_area/ge3.webp" alt="image" />
              <p className={styles.geImageHeading}>Hydro</p>
            </div>
            <div className={styles.geImageDiv}>
              <img src="/images/focus_area/ge4.webp" alt="image" />
              <p className={styles.geImageHeading}>Hydrogen</p>
            </div>
            <div className={styles.geImageDiv}>
              <img src="/images/focus_area/ge5.webp" alt="image" />
              <p className={styles.geImageHeading}>Geo Thermal</p>
            </div>
          </Carousel>
        </div>
      </div>

      <div className={styles.esContainer}>
        {/* <h3 className={styles.esHeading}>Energy Storage</h3> */}
        <div className={styles.esInnerContainer}>
          <div className={styles.esContentDiv}>
            <h5 className={styles.esSubHeading}>
              Energy Storage:
              <br />
              Redoing energy the better way
            </h5>
            <p className={styles.esDesc}>
              Energy storage technology has made it possible to scale up
              renewable energy. Know the best materials to use, where
              scalability opportunities exist, and how to dominate the value
              chain.
            </p>
          </div>
          <img
            src="/images/focus_area/energy_storage_diagram.png"
            alt="image"
            className={styles.esImage}
          />
        </div>
      </div>

      {/* Value chain section */}
      <ValueChain4 />

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
