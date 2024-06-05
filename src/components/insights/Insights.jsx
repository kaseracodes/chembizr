import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Insights.module.css";
// import { PublicationsData } from "../../assets/publicationsData";
import PublicationCard from "../publicationCard/PublicationCard";
// import { ArticlesData } from "../../assets/articlesData";
import { firestore } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const Insights = ({ pagetype }) => {
  const [publicationsData, setPublicationsData] = useState([]);
  const [articlesData, setAticlesData] = useState([]);
  const [showDots, setShowDots] = useState(window.innerWidth < 550);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "blogs"),
        where("pagetype", "==", pagetype),
        where("insighttype", "==", "Publication"), // Add this line
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setPublicationsData(snapshot.docs);
        console.log(snapshot.docs[0].data());
      }
    );

    return unsubscribe;
  }, [pagetype]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "blogs"),
        where("pagetype", "==", pagetype),
        where("insighttype", "==", "Article"), // Add this line
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setAticlesData(snapshot.docs);
        console.log(snapshot.docs[0].data());
      }
    );

    return unsubscribe;
  }, [pagetype]);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth <= 950);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1250, min: 680 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Insights</h1>
      <div className={styles.contentDiv}>
        <h3 className={styles.subHeading}>Media Releases</h3>
        <Carousel
          responsive={responsive}
          showDots={showDots}
          arrows={!showDots}
        >
          {publicationsData.map((item, index) => (
            <div key={index} className={styles.innerCardDiv}>
              <PublicationCard
                imagePath={item.data().image}
                // date={new Date(
                //   item.date.seconds * 1000 +
                //     Math.floor(item.date.nanoseconds / 1000000)
                // ).toLocaleString()}
                date={item.data().date}
                heading={item.data().heading}
                description={item.data().description}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.contentDiv}>
        <h3 className={styles.subHeading}>Articles</h3>
        <Carousel
          responsive={responsive}
          showDots={showDots}
          arrows={!showDots}
        >
          {articlesData.map((item, index) => (
            <div key={index} className={styles.innerCardDiv}>
              <PublicationCard
                imagePath={item.data().image}
                // date={new Date(
                //   item.date.seconds * 1000 +
                //     Math.floor(item.date.nanoseconds / 1000000)
                // ).toLocaleString()}
                date={item.data().date}
                heading={item.data().heading}
                description={item.data().description}
                short={item.data().short}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Insights;
