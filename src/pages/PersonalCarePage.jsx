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
import ValueChain5 from "../components/valueChain5/ValueChain5";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BannerLoader from "../components/bannerLoader/BannerLoader";
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

const PersonalCarePage = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);

    try {
      const bannersRef = collection(firestore, "banners");
      const q = query(
        bannersRef,
        where("page", "==", "Personal Care & Cosmetics")
      );
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

  // ---------------- JSON-LD ----------------
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "https://chembizr.com/";

  const focus = FocusAreasData && FocusAreasData[5] ? FocusAreasData[5] : null;
  const serviceDescription = focus
    ? focus.longDescription || focus.description || ""
    : "Consulting services in personal care and cosmetics.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/personal-care-and-cosmetics/#webpage`,
        url: `${origin}/personal-care-and-cosmetics`,
        name: "Beauty and Personal Care | Research & Consulting Services",
        description:
          "Our consulting services provide access to information related to the prospects of novel active and functional ingredients that align with requisite market needs.",
        publisher: { "@id": `${origin}/#organization` }
      },
      {
        "@type": "Service",
        "@id": `${origin}/personal-care-and-cosmetics/#service`,
        serviceType: "Personal Care & Cosmetics Research & Consulting",
        provider: { "@id": `${origin}/#organization` },
        areaServed: { "@type": "Place", name: "Global" },
        description: serviceDescription
      }
    ]
  };
  // -----------------------------------------

  return (
    <>
      <MetaTag
        title="Beauty and Personal Care | Research & Consulting Services"
        description="Our consulting services provide access to information related to the prospects of novel active and functional ingredients that align with requisite market needs. Learn more."
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
              banner.image ? banner.image : "/images/focus_area/focus_area6.png"
            }
            heading={
              banner.heading
                ? banner.heading
                : "Making sense of the anti-pollution segment"
            }
            para={
              banner.description
                ? banner.description
                : FocusAreasData[5].description
            }
            buttonText="Know More"
            textColor={COLORS.white}
            contentWidth="600px"
            headingMarginTop="100px"
            buttonLink={
              banner.link ? banner.link : "/personal-care-and-cosmetics"
            }
          />
        )}

        <FocusDescription
          longDescription={FocusAreasData[5].longDescription}
          imagePath="/images/focus_area/personal_care.png"
        />

        {/* Value chain section */}
        <ValueChain5 />

        {/* Insights */}
        <Insights pagetype="Personal Care & Cosmetics" />

        {/* Compendium */}
        <Compendium category="Personal Care & Cosmetics" />

        {/* Events */}
        <Events category="Personal Care & Cosmetics" />

        {/* Industry News */}
        <News
          bgColor={COLORS.white}
          textColor={COLORS.black}
          category="Personal Care & Cosmetics"
        />

        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PersonalCarePage;