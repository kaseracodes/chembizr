import styles from "./EventDetailPage.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { COLORS } from "../assets/constants";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { EventsData } from "../assets/eventsData";
import EventTitleCard from "../components/eventTitleCard/EventTitleCard";
import Button from "../components/button/Button";
import { useEffect, useState } from "react";
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

const BussinessVerticalsItems = [
  "Adhesives and Sealants",
  "Animal Feed and Nutrition",
  "Composites",
  "Construction",
  "Energy And Resources",
  "Food and Nutrition",
  "Microbials",
  "Oil and Gas",
  "Paints & Coating",
  "Personal Care",
  "Petrochemicals & Downstream",
  "Polymers",
  "Surfactants",
];

const EventDetailPage = () => {
  const params = useParams();
  const event = EventsData.find((item) => item.id === params.id);

  const [showDots, setShowDots] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth < 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // ---------------- JSON-LD ----------------
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "https://chembizr.com/";

  const eventUrl = event ? `${origin}/events/${event.id}` : undefined;
  const imageUrls =
    event && event.imagePath
      ? event.imagePath.map((img) =>
          img.startsWith("http") ? img : `${origin}${img}`
        )
      : [];

  const eventJsonLd = event
    ? {
        "@context": "https://schema.org",
        "@type": "Event",
        "@id": `${eventUrl}#event`,
        name: event.heading,
        description: event.description,
        startDate: event.date
          ? new Date(event.date).toISOString()
          : undefined,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        image: imageUrls,
        location: {
          "@type": "Place",
          name: "Online / Global",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        },
        organizer: {
          "@type": "Organization",
          "@id": `${origin}/#organization`,
          name: "ChemBizR",
          url: origin,
        },
      }
    : null;

  const webPageJsonLd = event
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${eventUrl}#webpage`,
        url: eventUrl,
        name: event.heading,
        description: event.description,
        about: { "@id": `${eventUrl}#event` },
        publisher: { "@id": `${origin}/#organization` },
      }
    : null;
  // -----------------------------------------

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Inject JSON-LD for event + webpage */}
      {eventJsonLd && <JsonLd data={eventJsonLd} />}
      {webPageJsonLd && <JsonLd data={webPageJsonLd} />}

      <div className={styles.mainContainer}>
        <div className={styles.leftDiv}>
          <h5 className={styles.divHeading}>Recent Events</h5>
          <hr className={styles.hr} />
          <div className={styles.titleCardDiv}>
            {EventsData.map((item, index) => (
              <EventTitleCard
                key={index}
                heading={item.heading}
                date={new Date(
                  item.date.seconds * 1000 +
                    Math.floor(item.date.nanoseconds / 1000000)
                ).toLocaleString()}
              />
            ))}
          </div>
          <hr className={styles.hr} />

          <button className={styles.commentBtn}>Leave a comment!</button>
          <Button content="Subscribe" bgColor={COLORS.orange} />
        </div>

        <div className={styles.eventContainer}>
          <div className={styles.contentDiv}>
            <div className={styles.topDiv}>
              <img src={event && event.logoPath} alt="logo" />
              <div className={styles.innerDiv}>
                <h5 className={styles.category}>{event && event.category}</h5>
                <p className={styles.date}>{event && event.date}</p>
              </div>
            </div>

            <h3 className={styles.heading}>{event && event.heading}</h3>
            <p className={styles.desc}>{event && event.description}</p>
          </div>

          <div className={styles.imageDiv}>
            <Carousel
              responsive={responsive}
              showDots={showDots}
              arrows={!showDots}
            >
              {event &&
                event.imagePath.map((item, index) => (
                  <div key={index} className={styles.image}>
                    <img src={item} alt="image" />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>

        <div className={styles.bvContainer}>
          <h5 className={styles.divHeading}>Business Verticals</h5>
          <hr className={styles.hr} />
          <div className={styles.bvDiv}>
            {BussinessVerticalsItems.map((item, index) => (
              <button
                key={index}
                className={styles.bvItem}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;