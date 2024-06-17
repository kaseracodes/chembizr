/* eslint-disable react/prop-types */
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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';

// const CustomDot = ({ onClick, ...rest }) => {
//   const { active } = rest;
//   return (
//     <li>
//       <button
//         style={{
//           background: active ? "black" : "white",
//         }}
//         onClick={() => onClick()}
//       />
//     </li>
//   );
// };

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.customLeftArrow} onClick={() => previous()}>
        <FaArrowLeft size={15} />
      </button>
      <button className={styles.customRightArrow} onClick={() => next()}>
        <FaArrowRight size={15} />
      </button>
    </div>
  );
};

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

  const [autoPlay, setAutoPlay] = useState(true);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePlayPause = () => {
    setAutoPlay(!autoPlay);
  };

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);
    
    try {
      const bannersRef = collection(firestore, 'banners');
      const q = query(bannersRef, where('page', '==', "Focus Parent"));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const bannerDoc = querySnapshot.docs[0].data();
        setBanner(bannerDoc);
        // console.log(bannerDoc);
      } else {
        setError('No banner found for the selected page.');
      }
    } catch (err) {
      setError('Error fetching banner: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the "#" from the hash
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner */}
      <Banner
        imagePath={"/images/focus_area/focus_area6.png"}
        heading="Personal Care<br />Magazine: Making<br />sense of the anti-<br />pollution segment"
        para="‘Anti-pollution’ is one of the newest buzzwords in the personal care and cosmetics industries, and companies are racing to market masks, sprays, and creams that promise to shield our skin and hair from pollution-related damage."
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
      <div className={styles.carouselContainer} id="more">
        <h3 className={styles.heading}>More of Our Focus Verticals</h3>
        <h5 className={styles.subHeading}>
          Get personalized solutions across a few more of our business verticals
        </h5>
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlay={autoPlay}
          autoPlaySpeed={3000}
          customButtonGroup={<CustomButtonGroup />}
          showDots={true}
        >
          {MoreFocusAreasData.map((item, index) => (
            <div key={index} className={styles.innerCardContainer}>
              <MoreFocusArea
                id="more"
                imagePath={item.imagePath}
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>

        <button onClick={handlePlayPause} className={styles.playButton}>
          {autoPlay ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* Call to Action */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default FocusParentPage;
