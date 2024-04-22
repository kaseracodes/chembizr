import styles from "./NewsPage.module.css";
import Banner2 from "../components/banner2/Banner2";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";
import BussinessVerticals from "../components/bussinessVerticals/BussinessVerticals";
import { NewsListingData } from "../assets/newsListingData";
import NewsListingCard from "../components/newsListingCard/NewsListingCard";
import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/footer/Footer";

const NewsPage = () => {
  const BussinessVerticalsItems = [
    "Adhesives and Sealants",
    "Animal Feed and Nutrition",
    "Base Oils and Waxes",
    "Bio Polymers",
    "Composites",
    "Construction",
    "Energy and Resources",
    "Food and Nutrition",
    "Industrial Fluids",
    "Mobility",
    "Oil and Gas",
    "Paints and Coatings",
    "Personal Care",
  ];

  return (
    <div className={styles.container}>
      <Navbar textColor={COLORS.white} iconColor={COLORS.white} />

      <Banner2 imagePath="/images/news_page_hero.png" heading="Industry News" />

      <div className={styles.newsListingDiv}>
        <div className={styles.newsCardDiv}>
          {NewsListingData.map((item, index) => (
            <NewsListingCard
              key={index}
              date={item.date}
              heading={item.heading}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
        <BussinessVerticals
          BussinessVerticals={BussinessVerticalsItems}
          buttonColor={COLORS.gray3}
        />
      </div>

      <CallToAction />

      <Footer />
    </div>
  );
};

export default NewsPage;
