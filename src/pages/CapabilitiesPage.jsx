import { useEffect } from "react";
import { CapabilitiesData } from "../assets/capabilitiesData";
import { COLORS } from "../assets/constants";
import Banner2 from "../components/banner2/Banner2";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./CapabilitiesPage.module.css";
import FirstCarousel from "../components/carousel/FirstCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CapabilitiesBanner from "../components/capabilitiesBanner/CapabilitiesBanner";

const responsiveHero = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CapabilitiesPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the "#" from the hash
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner */}
      {/* <Banner2
        imagePath={"/images/focus_parent_page_hero.png"}
        heading="Capabilities"
      /> */}

      <div style={{ marginTop: "-120px" }}>
        <Carousel responsive={responsiveHero}>
          <CapabilitiesBanner imagePath="/images/capabilities_page/banner1.png" />
          <CapabilitiesBanner imagePath="/images/capabilities_page/banner2.png" />
          <CapabilitiesBanner imagePath="/images/capabilities_page/banner3.png" />
          <CapabilitiesBanner imagePath="/images/capabilities_page/banner4.png" />
        </Carousel>
      </div>

      <div className={styles.mainContainer}>
        {CapabilitiesData.map((item, index) => (
          <div
            key={index}
            id={index}
            className={
              index % 2 === 0 ? styles.evenCapability : styles.oddCapability
            }
          >
            <div className={styles.imageDiv}>
              <img src={item.imagePath2} alt="image" />
            </div>
            <div>
              <h5 className={styles.heading}>{item.normalHeading}</h5>
              <p className={styles.desc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <CallToAction />

      <Footer />
    </div>
  );
};

export default CapabilitiesPage;
