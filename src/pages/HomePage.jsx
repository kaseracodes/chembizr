import FirstCarousel from "../components/carousel/FirstCarousel";
import SecondCarousel from "../components/carousel/SecondCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./HomePage.module.css";
import Heading from "../components/heading/Heading";
import FocusArea from "../components/focusArea/FocusArea";
import { FocusAreasData } from "../assets/focusAreas";
import { COLORS } from "../assets/constants";
import CapabilitiesCard from "../components/capabilitiesCard/CapabilitiesCard";
import { CapabilitiesData } from "../assets/capabilitiesData";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import News from "../components/news/News";
import BlogsSection from "../components/blogsSection/BlogsSection";
import FocusAreasSection from "../components/focusAreasSection/FocusAreasSection";

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
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar textColor={COLORS.white} iconColor={COLORS.white} />

      <div style={{ marginTop: "-120px" }}>
        <Carousel responsive={responsiveHero}>
          <FirstCarousel />
          <SecondCarousel />
        </Carousel>
      </div>

      <Heading content="VERTICALS WE SERVE" />
      <div className={styles.focusAreaContainer}>
        <FocusArea
          index={0}
          imagePath={FocusAreasData[0].imagePath}
          heading={FocusAreasData[0].heading}
          description={FocusAreasData[0].description}
          buttonText={FocusAreasData[0].buttonText}
          width={"100%"}
          bgColor={COLORS.blue}
          pageLink={FocusAreasData[0].pageLink}
        />

        {/* <div className={styles.focusAreaDiv}>
          {FocusAreasData.slice(1, 5).map((item) => (
            <FocusArea
              key={item.index}
              index={item.index}
              imagePath={item.imagePath}
              heading={item.heading}
              description={item.description}
              buttonText={item.buttonText}
              width={"90%"}
              bgColor={item.index % 2 === 0 ? COLORS.green : COLORS.blue}
              pageLink={item.pageLink}
            />
          ))}
        </div> */}
        <FocusAreasSection />

        <FocusArea
          index={5}
          imagePath={FocusAreasData[5].imagePath}
          heading={FocusAreasData[5].heading}
          description={FocusAreasData[5].description}
          buttonText={FocusAreasData[5].buttonText}
          width={"100%"}
          bgColor={COLORS.blue}
          pageLink={FocusAreasData[5].pageLink}
        />
      </div>

      <Heading content="CAPABILITIES" />
      <div className={styles.capabilitesContainer}>
        <p className={styles.para}>
          Use our extensive suite of market intelligence tools to realize the
          full potential of your business ideas. From uncovering untapped
          opportunities to gaining deep customer insights and staying ahead of
          the competition, we provide the strategic guidance you need to grow in
          a rapidly evolving industry landscape.
        </p>

        <div className={styles.CapabilitiesCardDiv}>
          <Carousel responsive={responsiveCapabilities}>
            {CapabilitiesData.map((item, index) => (
              <CapabilitiesCard
                key={index}
                imagePath={item.imagePath}
                heading={item.heading}
                description={item.description}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <BlogsSection />

      <Heading content="UNIQUE VALUE PROPOSITION" />
      <div className={styles.uniquePropositionImageDiv}>
        <img src="/images/unique_proposition.png" alt="image" />
      </div>

      <News bgColor={COLORS.white} textColor={COLORS.black} />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default HomePage;
