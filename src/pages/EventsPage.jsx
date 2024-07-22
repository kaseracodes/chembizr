import { COLORS } from "../assets/constants";
// import Banner2 from "../components/banner2/Banner2";
// import CallToAction from "../components/callToAction/CallToAction";
import EventsFeed from "../components/eventsFeed/EventsFeed";
import MetaTag from "../components/metaTag/MetaTag";
// import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import useDisableZoom from "../useDisableZoom";
import styles from "./EventsPage.module.css";

const EventsPage = () => {
  useDisableZoom();

  return (
    <>
      <MetaTag
        title="Participation in Industry Events | ChemBizR"
        description="We attend global conferences and tradeshows to access the portfolio & service offerings of multiple stakeholders across the supply and value chain. Learn more."
      />

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
