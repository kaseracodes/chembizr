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
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BannerLoader from "../components/bannerLoader/BannerLoader";
import ValueChain3 from "../components/valueChain3/ValueChain3";
import MetaTag from "../components/metaTag/MetaTag";
import React from "react";

/* Small helper for injecting JSON-LD */
const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

const CleanEnergyPage = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);

    try {
      const bannersRef = collection(firestore, "banners");
      const q = query(bannersRef, where("page", "==", "Clean Energy & Storage"));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const bannerDoc = querySnapshot.docs[0].data();
        setBanner(bannerDoc);
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

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1300 }, items: 5 },
    desktop: { breakpoint: { max: 1300, min: 1100 }, items: 3 },
    tablet: { breakpoint: { max: 1100, min: 750 }, items: 3 },
    mobile: { breakpoint: { max: 750, min: 550 }, items: 2 },
    smallMobile: { breakpoint: { max: 550, min: 0 }, items: 2 },
  };

  const [showDots, setShowDots] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------------- JSON-LD ----------------
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "https://chembizr.com/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/clean-energy-and-storage/#webpage`,
        url: `${origin}/clean-energy-and-storage`,
        name: "Clean Energy & Renewables | Research & Consulting Services",
        description:
          "We support companies through the green transition, offering a comprehensive suite of consulting services tailored to their unique needs.",
        publisher: { "@id": `${origin}/#organization` }
      },
      {
        "@type": "Service",
        "@id": `${origin}/clean-energy-and-storage/#service`,
        serviceType: "Clean Energy & Renewable Consulting",
        provider: { "@id": `${origin}/#organization` },
        areaServed: { "@type": "Place", name: "Global" },
        description:
          "ChemBizR provides consulting in clean energy, renewables, and storage solutions — supporting companies with strategies to meet net-zero targets and capture opportunities in the green transition."
      }
    ]
  };
  // -----------------------------------------

  return (
    <>
      <MetaTag
        title="Clean Energy & Renewables | Research & Consulting Services"
        description="We support companies through the green transition, offering a comprehensive suite of consulting services tailored to their unique needs. Learn more."
      />

      {/* Inject JSON-LD */}
      <JsonLd data={jsonLd} />

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
              banner.image
                ? banner.image
                : "/images/focus_area/clean_energy.png"
            }
            heading={
              banner.heading
                ? banner.heading
                : "Can energy storage power the sustainability revolution?"
            }
            para={
              banner.description
                ? banner.description
                : FocusAreasData[3].description
            }
            buttonText="Know More"
            textColor={COLORS.white}
            contentWidth="800px"
            headingMarginTop="100px"
            buttonLink={banner.link ? banner.link : "/clean-energy-and-storage"}
          />
        )}

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
                <img src="/images/focus_area/ge1.webp" alt="Solar" />
                <p className={styles.geImageHeading}>Solar</p>
              </div>
              <div className={styles.geImageDiv}>
                <img src="/images/focus_area/ge2.webp" alt="Wind" />
                <p className={styles.geImageHeading}>Wind</p>
              </div>
              <div className={styles.geImageDiv}>
                <img src="/images/focus_area/ge3.webp" alt="Hydro" />
                <p className={styles.geImageHeading}>Hydro</p>
              </div>
              <div className={styles.geImageDiv}>
                <img src="/images/focus_area/ge4.webp" alt="Hydrogen" />
                <p className={styles.geImageHeading}>Hydrogen</p>
              </div>
              <div className={styles.geImageDiv}>
                <img src="/images/focus_area/ge5.webp" alt="Geo Thermal" />
                <p className={styles.geImageHeading}>Geo Thermal</p>
              </div>
            </Carousel>
          </div>
        </div>

        <div className={styles.esContainer}>
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
              alt="Energy Storage Diagram"
              className={styles.esImage}
            />
          </div>
        </div>

        {/* Value chain section */}
        <ValueChain3 />

        {/* Insights */}
        <Insights pagetype="Clean Energy & Storage" />

        {/* Compendium */}
        <Compendium category="Clean Energy & Storage" />

        {/* Events */}
        <Events category="Clean Energy & Resources" />

        {/* Industry News */}
        <News
          bgColor={COLORS.white}
          textColor={COLORS.black}
          category="Clean Energy & Resources"
        />

        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default CleanEnergyPage;