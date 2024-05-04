import styles from "./CareersPage.module.css";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import CoreValues from "../components/coreValues/CoreValues";
import { WhyToJoinData } from "../assets/whyToJoinData";
import CareersCoreValues from "../components/careersCoreValues/CareersCoreValues";
import Footer from "../components/footer/Footer";
import CurrentOpenings from "../components/currentOpenings/CurrentOpenings";
import Banner3 from "../components/banner3/Banner3";

const CareersPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        invertLogo={true}
        iconColor={COLORS.black}
      />

      <Banner3
        imagePath="/images/careers_page_hero.png"
        heading="Level Up your Career<br />at ChemBizR"
        para="Fast-track your career growth and get a chance to influence global,<br />business leaders to make innovative decisions. Join our team and,<br />be a part of an inclusive work-culture."
        buttonText="More About Us"
        buttonLink="/about-us"
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
