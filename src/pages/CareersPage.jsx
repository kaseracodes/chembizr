import styles from "./CareersPage.module.css";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import Banner from "../components/banner/Banner";
import CoreValues from "../components/coreValues/CoreValues";
import { WhyToJoinData } from "../assets/whyToJoinData";
import CareersCoreValues from "../components/careersCoreValues/CareersCoreValues";
import Footer from "../components/footer/Footer";
import CurrentOpenings from "../components/currentOpenings/CurrentOpenings";

const CareersPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
      />

      <Banner
        imagePath="/images/careers_page_hero.png"
        heading="Level Up your Career at ChemBizR"
        para="Fast-track your career growth and get a chance to influence global business leaders to make innovative decisions. Join our team and be a part of an inclusive work-culture."
        buttonText="More About Us"
        buttonLink="/about-us"
        textColor={COLORS.black}
        contentWidth="480px"
      />

      <CoreValues
        heading="Why Join ChemCons?"
        cardData={WhyToJoinData}
        hrColor={COLORS.green}
      />

      <CareersCoreValues />

      <CurrentOpenings />

      <Footer />
    </div>
  );
};

export default CareersPage;
