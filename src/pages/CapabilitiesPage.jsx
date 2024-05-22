import { useEffect } from "react";
import { CapabilitiesData } from "../assets/capabilitiesData";
import { COLORS } from "../assets/constants";
import Banner2 from "../components/banner2/Banner2";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./CapabilitiesPage.module.css";
import FirstCarousel from "../components/carousel/FirstCarousel";

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
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContentDiv}>
            <h1 className={styles.bannerHeading}>
              <span className={styles.bannerSpecial}>
                ChemBizR’s Capabilities:
                <br />
              </span>
              Your ultimate solution-driven partners
            </h1>

            <p className={styles.bannerPara}>
              We realize the value of adequate application-specific knowledge
              and exposure to better evaluate client challenges and accordingly
              offer the requisite solutions.
            </p>
          </div>
        </div>
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
              <img src={item.imagePath} alt="image" />
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
