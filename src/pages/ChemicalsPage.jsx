import styles from "./FoodNutritionPage.module.css";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import ValueChain2 from "../components/valueChain2/ValueChain2";
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

const ChemicalsPage = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);

    try {
      const bannersRef = collection(firestore, "banners");
      const q = query(bannersRef, where("page", "==", "Speciality Polymers"));
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
  const rawOrigin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : (process.env.REACT_APP_SITE_URL || "https://chembizr.com");
  const origin = rawOrigin.replace(/\/+$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/specialty-polymers/#webpage`,
        url: `${origin}/specialty-polymers`,
        name: "Specialty Polymers | Research & Consulting Services",
        description:
          "We help companies find relevant materials, optimize margins, minimize risk, identify lucrative & emerging opportunities to stay ahead of the curve.",
        publisher: { "@id": `${origin}/#organization` }
      },
      {
        "@type": "Service",
        "@id": `${origin}/specialty-polymers/#service`,
        serviceType: "Specialty Polymers Research & Consulting",
        provider: { "@id": `${origin}/#organization` },
        areaServed: {
          "@type": "Place",
          name: "Global"
        },
        description:
          "ChemBizR provides strategic consulting in specialty polymers — helping companies identify relevant materials, optimize margins, minimize risks, and capture emerging opportunities."
      }
    ]
  };
  // -----------------------------------------

  return (
    <>
      <MetaTag
        title="Specialty Polymers | Research & Consulting Services"
        description="We help companies find relevant materials, optimize margins, minimize risk, identify lucrative & emerging opportunities to stay ahead of the curve. Learn more."
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
              banner.image ? banner.image : "/images/focus_area/chemicals.png"
            }
            heading={
              banner.heading
                ? banner.heading
                : "Proposal to Ban Fluoropolymers Has European Industry on Edge"
            }
            para={
              banner.description
                ? banner.description
                : FocusAreasData[1].description
            }
            buttonText="Know More"
            textColor={COLORS.white}
            contentWidth="800px"
            headingMarginTop="100px"
            buttonLink={banner.link ? banner.link : "/specialty-polymers"}
          />
        )}

        <FocusDescription
          longDescription={FocusAreasData[1].longDescription}
          imagePath="/images/focus_area/polymers.png"
        />

        {/* Value chain section */}
        <ValueChain2 />

        {/* Insights */}
        <Insights pagetype="Speciality Chemicals and Polymers" />

        {/* Compendium */}
        <Compendium category="Speciality Chemicals and Polymers" />

        {/* Events */}
        <Events category="Specialty Polymers" />

        {/* Industry News */}
        <News
          bgColor={COLORS.white}
          textColor={COLORS.black}
          category="Specialty Polymers"
        />

        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ChemicalsPage;