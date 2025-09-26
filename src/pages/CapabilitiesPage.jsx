/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { CapabilitiesData } from "../assets/capabilitiesData";
import { COLORS } from "../assets/constants";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./CapabilitiesPage.module.css";
import CapabilitiesBanner from "../components/capabilitiesBanner/CapabilitiesBanner";
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

const CapabilitiesPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      }
    }
  }, []);

  // Build JSON-LD
  const rawOrigin =
  typeof window !== "undefined" && window.location && window.location.origin
    ? window.location.origin
    : (process.env.REACT_APP_SITE_URL || "https://chembizr.com");
const origin = rawOrigin.replace(/\/+$/, "");

  const itemListElements = CapabilitiesData.map((item, index) => {
    const url = `${origin}/capabilities#${index}`;
    return {
      "@type": "ListItem",
      position: index + 1,
      name: item.normalHeading,
      item: url
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/capabilities/#webpage`,
        url: `${origin}/capabilities`,
        name: "ChemBizR Capabilities",
        description:
          "We offer value-driven application-specific knowledge to gain a granular outlook on client challenges and accordingly offer the requisite solutions.",
        publisher: { "@id": `${origin}/#organization` }
      },
      {
        "@type": "ItemList",
        "@id": `${origin}/capabilities/#itemlist`,
        itemListElement: itemListElements
      }
    ]
  };

  return (
    <>
      <MetaTag
        title="Our Capabilities | ChemBizR"
        description="We offer value-driven application-specific knowledge to gain a granular outlook on client challenges and accordingly offer the requisite solutions."
      />

      {/* Inject JSON-LD */}
      <JsonLd data={jsonLd} />

      <div className={styles.container}>
        <Navbar
          textColor={COLORS.black}
          iconColor={COLORS.black}
          bgColor={COLORS.white}
        />

        <div style={{ marginTop: "-150px" }}>
          <CapabilitiesBanner imagePath="/images/capabilities_page/banner5.png" />
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
                <img src={item.imagePath2} alt={item.normalHeading} />
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
    </>
  );
};

export default CapabilitiesPage;