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
import FocusDescription from "../components/focusDescription/FocusDescription";
import { FocusAreasData } from "../assets/focusAreas";
import ValueChain6 from "../components/valueChain6/ValueChain6";
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

const PetroChemicalsPage = () => {
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
        where("page", "==", "Petrochemicals & Downstream")
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

  const focus = FocusAreasData && FocusAreasData[2] ? FocusAreasData[2] : null;
  const serviceDescription = focus
    ? focus.longDescription || focus.description || ""
    : "Consulting services in petrochemicals and downstream markets.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/petro-chemicals-and-downstream/#webpage`,
        url: `${origin}/petro-chemicals-and-downstream`,
        name: "Downstream Petrochemicals | Research & Consulting Services",
        description:
          "We support companies with project feasibility, operation optimization, & driving transformational strategies in downstream and specialty chemicals.",
        publisher: { "@id": `${origin}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${origin}/petro-chemicals-and-downstream/#service`,
        serviceType: "Petrochemicals & Downstream Research & Consulting",
        provider: { "@id": `${origin}/#organization` },
        areaServed: { "@type": "Place", name: "Global" },
        description: serviceDescription,
      },
    ],
  };
  // -----------------------------------------

  return (
    <>
      <MetaTag
        title="Downstream Petrochemicals | Research & Consulting Services"
        description="We support companies with project feasibility, operation optimization, & driving transformational strategies in downstream and specialty chemicals. Learn more."
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
                : "/images/focus_area/petro_chemicals.png"
            }
            heading={
              banner.heading ? banner.heading : "Decarbonization: Where are we Headed?"
            }
            para={banner.description ? banner.description : FocusAreasData[2].description}
            buttonText="Know More"
            textColor={COLORS.white}
            contentWidth="600px"
            headingMarginTop="110px"
            buttonLink={banner.link ? banner.link : "/petro-chemicals-and-downstream"}
          />
        )}

        <FocusDescription
          longDescription={FocusAreasData[2].longDescription}
          imagePath="/images/focus_area/petchem.png"
        />

        {/* Value chain section */}
        <ValueChain6 />

        {/* Insights */}
        <Insights pagetype="Petrochemicals & Downstream" />

        {/* Compendium */}
        <Compendium category="Petrochemicals & Downstream" />

        {/* Events */}
        <Events category="Petrochemicals & Downstream" />

        {/* Industry News */}
        <News
          bgColor={COLORS.white}
          textColor={COLORS.black}
          category="Petrochemicals & Downstream"
        />

        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PetroChemicalsPage;