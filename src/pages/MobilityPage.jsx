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
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BannerLoader from "../components/bannerLoader/BannerLoader";
import ValueChain4 from "../components/valueChain4/ValueChain4";

const MobilityPage = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);

    try {
      const bannersRef = collection(firestore, "banners");
      const q = query(bannersRef, where("page", "==", "Mobility"));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const bannerDoc = querySnapshot.docs[0].data();
        setBanner(bannerDoc);
        console.log(bannerDoc);
      } else {
        setError("No banner found for the selected page.");
      }
    } catch (err) {
      setError("Error fetching banner: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      {loading || !banner ? (
        <BannerLoader />
      ) : (
        <Banner
          imagePath={
            banner.image ? banner.image : "/images/focus_area/focus_area5.png"
          }
          heading={
            banner.heading
              ? banner.heading
              : "Opportunities and Challenges for Composites in Electric Vehicles"
          }
          para={
            banner.description
              ? banner.description
              : FocusAreasData[4].description
          }
          buttonText="Know More"
          textColor={COLORS.white}
          contentWidth="800px"
          headingMarginTop="100px"
          buttonLink={banner.link ? banner.link : "/mobility"}
        />
      )}

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
      <Events category="Mobility" />

      {/* Industry News */}
      <News
        bgColor={COLORS.white}
        textColor={COLORS.black}
        category="Mobility"
      />

      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MobilityPage;
