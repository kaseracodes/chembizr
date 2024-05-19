import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../components/banner/Banner";
import CallToAction from "../components/callToAction/CallToAction";
import CareAndCosmetics from "../components/careAndCosmetics/CareAndCosmetics";
import Chemicals from "../components/chemicals/Chemicals";
import EnergyAndStorage from "../components/energyAndStorage/EnergyAndStorage";
import FoodNutrition from "../components/foodNutrition/FoodNutrition";
import Mobility from "../components/mobility/Mobility";
import PetroChemicals from "../components/petroChemicals/PetroChemicals";
import styles from "./FocusParentPage.module.css";
import { MoreFocusAreasData } from "../assets/moreFocusAreas";
import MoreFocusArea from "../components/moreFocusArea/MoreFocusArea";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Footer from "../components/footer/Footer";

const responsive = {
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

const FocusParentPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner */}
      <Banner
        imagePath={"/images/focus_parent_page_hero.png"}
        heading="Personal Care<br />Magazine: Making<br />sense of the anti-<br />pollution segment"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        buttonText="Read More"
        headingLineHeight="120%"
      />

      {/* Food Nutrition & Beverages */}
      <FoodNutrition />

      {/* Speciality Chemicals and Polymers section */}
      <Chemicals />

      {/* Petrochemicals & Downstream */}
      <PetroChemicals />

      {/* Clean Energy & Storage */}
      <EnergyAndStorage />

      {/* Mobility */}
      <Mobility />

      {/* Personal Care & Cosmetics */}
      <CareAndCosmetics />

      {/* More Focus Areas */}
      <div className={styles.carouselContainer}>
        <h3 className={styles.heading}>More of Our Focus Verticals</h3>
        <h5 className={styles.subHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h5>
        <Carousel responsive={responsive}>
          {MoreFocusAreasData.map((item, index) => (
            <MoreFocusArea
              key={index}
              imagePath={item.imagePath}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </Carousel>
      </div>

      {/* Call to Action */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default FocusParentPage;
