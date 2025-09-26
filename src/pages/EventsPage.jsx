import { COLORS } from "../assets/constants";
// import Banner2 from "../components/banner2/Banner2";
// import CallToAction from "../components/callToAction/CallToAction";
import EventsFeed from "../components/eventsFeed/EventsFeed";
import MetaTag from "../components/metaTag/MetaTag";
// import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import useDisableZoom from "../useDisableZoom";
import styles from "./EventsPage.module.css";
import React from "react";

/* Helper for injecting JSON-LD */
const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

const EventsPage = () => {
  useDisableZoom();

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
        "@id": `${origin}/events/#webpage`,
        url: `${origin}/events`,
        name: "Participation in Industry Events | ChemBizR",
        description:
          "We attend global conferences and tradeshows to access the portfolio & service offerings of multiple stakeholders across the supply and value chain.",
        publisher: { "@id": `${origin}/#organization` }
      },
      {
        "@type": "ItemList",
        "@id": `${origin}/events/#itemlist`,
        itemListElement: [] // ⚠️ Optionally fill this dynamically with events if you pass EventsData here
      }
    ]
  };
  // -----------------------------------------

  return (
    <>
      <MetaTag
        title="Participation in Industry Events | ChemBizR"
        description="We attend global conferences and tradeshows to access the portfolio & service offerings of multiple stakeholders across the supply and value chain. Learn more."
      />

      {/* Inject JSON-LD */}
      <JsonLd data={jsonLd} />

      <div className={styles.container}>
        <Navbar
          textColor={COLORS.black}
          iconColor={COLORS.black}
          bgColor={COLORS.white}
        />

        {/* <Banner2
        imagePath="/images/event_page_hero.png"
        heading="Events You can Find Us At"
      /> */}

        <EventsFeed />

        {/* <CallToAction />
        <Footer /> */}
      </div>
    </>
  );
};

export default EventsPage;