/* eslint-disable react/prop-types */
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
import Banner3 from "../components/banner3/Banner3";
import MetaTag from "../components/metaTag/MetaTag";
import React from "react";

const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      // JSON.stringify ensures valid JSON and avoids injection
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="ld-json-about"
    />
  );
};

const AboutUsPage = () => {
  // Use origin when possible so URLs are absolute. Fallback to example domain.
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "https://chembizr.com/";

  // Replace the placeholder logo and social URLs with your real ones
  const organizationId = `${origin}/#organization`;
  const aboutPageId = `${origin}/about/#aboutpage`;
  const breadcrumbId = `${origin}/about/#breadcrumbs`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        "name": "ChemBizR",
        "url": origin,
        "logo": {
          "@type": "ImageObject",
          "url": `${origin}/images/logo.png`,
          "width": 600,
          "height": 60
        },
        "sameAs": [
          "https://www.linkedin.com/company/chembizr/"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "areaServed": "IN"
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": aboutPageId,
        "url": `${origin}/about`,
        "mainEntity": {
          "@type": "Thing",
          "name": "About ChemBizR",
          "description":
            "We partner with leaders who are futuristic, trying to adapt sustainability and solutions with unique solutions to gain market dominance."
        },
        "breadcrumb": {
          "@id": breadcrumbId
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": origin
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": `${origin}/about`
          }
        ]
      }
    ]
  };

  return (
    <>
      <MetaTag
        title="About Us | ChemBizR"
        description="We partner with leaders who are futuristic, trying to adapt sustainability and solutions with unique solutions to gain market dominance. Learn more."
      />

      {/* Inject JSON-LD for Organization + AboutPage + BreadcrumbList */}
      <JsonLd data={jsonLd} />

      <div className={styles.container}>
        <Navbar
          textColor={COLORS.black}
          invertLogo={true}
          iconColor={COLORS.black}
          bgColor={COLORS.white}
        />

        <Banner3
          heading="Your Thought-<br />Partner For Being<br />Future Relevant"
          para="We at ChemBizR, partner with global<br />clients to unleash unique solutions across<br />a variety of business verticals."
          buttonText="Insights"
          imagePath="/images/about_us_hero.png"
        />

        <OriginStory />

        <CoreValues
          heading="Our Teaming Principles"
          cardData={CoreValuesData}
        />

        <Vision />

        <FindUs />

        <Places />

        <CallToAction />

        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;