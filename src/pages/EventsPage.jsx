import { COLORS } from "../assets/constants";
import Banner2 from "../components/banner2/Banner2";
import CallToAction from "../components/callToAction/CallToAction";
import EventsFeed from "../components/eventsFeed/EventsFeed";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./EventsPage.module.css";

const EventsPage = () => {
  return (
    <div className={styles.container}>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />

      <Banner2
        imagePath="/images/event_page_hero.png"
        heading="Events You can Find Us At"
      />

      <EventsFeed />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default EventsPage;
