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
import { FocusAreasData } from "../assets/focusAreas";
import FocusDescription from "../components/focusDescription/FocusDescription";
import ValueChain6 from "../components/valueChain6/ValueChain6";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';

const PetroChemicalsPage = () => {

  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBanner = async () => {
    setLoading(true);
    setError(null);
    setBanner(null);
    
    try {
      const bannersRef = collection(firestore, 'banners');
      const q = query(bannersRef, where('page', '==', "Petrochemicals & Downstream"));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const bannerDoc = querySnapshot.docs[0].data();
        setBanner(bannerDoc);
        console.log(bannerDoc);
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
    fetchBanner();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      {/* Banner / Hero section */}
      <Banner
        imagePath={"/images/focus_area/petro_chemicals.png"}
        heading="Decarbonization: Where are we Headed?"
        para={FocusAreasData[2].description}
        buttonText="Know More"
        textColor={COLORS.white}
        contentWidth="600px"
        headingMarginTop="110px"
      />

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
  );
};

export default PetroChemicalsPage;
