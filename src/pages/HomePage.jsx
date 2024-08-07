import FirstCarousel from "../components/carousel/FirstCarousel";
import SecondCarousel from "../components/carousel/SecondCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./HomePage.module.css";
import Heading from "../components/heading/Heading";
import { COLORS } from "../assets/constants";
import CapabilitiesCard from "../components/capabilitiesCard/CapabilitiesCard";
import { CapabilitiesData } from "../assets/capabilitiesData";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import News from "../components/news/News";
import BlogsSection from "../components/blogsSection/BlogsSection";
import Events from "../components/events/Events.jsx";
import FocusAreaSection from "../components/focusAreaSection/FocusAreaSection.jsx";
import { useEffect, useState } from "react";
import UVP from "../components/uvp/UVP.jsx";
import MetaTag from "../components/metaTag/MetaTag.jsx";

const responsiveHero = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveCapabilities = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1350 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1350, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  const [showDots, setShowDots] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MetaTag
        title="ChemBizR | Global Research and Consulting"
        description="Remodeling corporate and market strategy for business growth and future transitions via business intelligence solutions for the chemical industry. Learn more."
      />

      <div className={styles.container}>
        <Navbar
          textColor={COLORS.black}
          iconColor={COLORS.black}
          bgColor={COLORS.white}
        />

        <div style={{ marginTop: "-120px" }}>
          <Carousel responsive={responsiveHero}>
            <FirstCarousel
              bgImage="/images/home_page_hero_2.png"
              textColor={COLORS.blue2}
            />
            <SecondCarousel />
          </Carousel>
        </div>

        <FocusAreaSection />

        <div className={styles.capabilitesContainer}>
          <Heading content="Capabilities" />
          <p className={styles.para}>
            Use our extensive suite of market intelligence tools to realize the
            full potential of your business ideas. From uncovering untapped
            opportunities to gaining deep customer insights and staying ahead of
            the competition, we provide the strategic guidance to grow in a
            rapidly evolving industry landscape.
          </p>

          <div className={styles.CapabilitiesCardDiv}>
            <Carousel
              responsive={responsiveCapabilities}
              showDots={showDots}
              arrows={!showDots}
              infinite={true}
            >
              {CapabilitiesData.map((item, index) => (
                <div key={index} className={styles.capabilitesInnerCardDiv}>
                  <CapabilitiesCard
                    imagePath={item.imagePath}
                    heading={item.heading}
                    description={item.shortDesc}
                    id={index}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <BlogsSection />

        {/* <Heading content="Unique Value Proposition" />
      <div className={styles.uniquePropositionImageDiv}>
        <img src="/images/unique_proposition.png" alt="image" />
      </div> */}

        <UVP />

        <News bgColor={COLORS.white} textColor={COLORS.black} category="All" />

        <Events category="All" />

        <CallToAction />

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
