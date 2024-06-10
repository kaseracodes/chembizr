import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Compendium.module.css";
// import { compendiumData } from "../../assets/compendiumData";
import CompendiumCard from "../compendiumCard/CompendiumCard";
import { firestore, storage } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import Heading from "../heading/Heading";

const Compendium = ({ category }) => {

  console.log(category);
  const [compendiumData, setCompendiumData] = useState([]);

  // console.log(category);

    useEffect(() => {
      const unsubscribe = onSnapshot(query(collection(firestore, "compendiums"), where("category", "==", category), orderBy("timestamp", "desc")), (snapshot) => {
        setCompendiumData(snapshot.docs);
        console.log(snapshot.docs[0].data());
      });

      return unsubscribe;
    }, [category]);

  const [showDots, setShowDots] = useState(window.innerWidth < 550);


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
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 950 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 950, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    {compendiumData.length > 0 ? (<div className={styles.container}>
      {/* <h3 className={styles.heading}>Compendium</h3> */}
      <Heading content="Compendium" />
      {/* <h5 className={styles.subHeading}>Industry Trends</h5> */}
      <p className={styles.desc}>
        Delving in Industry-specific trends
      </p>

      <div className={styles.cardDiv}>
        <Carousel
          responsive={responsive}
          showDots={showDots}
          arrows={!showDots}
        >
          {compendiumData.map((item, index) => (
            <div key={index} className={styles.innerCardDiv}>
              <a className={styles.anchorNoUnderline} href={item.data().pdf} target="_blank" rel="noopener noreferrer">
              <CompendiumCard
                imagePath={item.data().logoPath}
                subHeading={item.data().subheading}
                heading={item.data().heading}
                description={item.data().description}
              />
            </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>) : (null)}
    </>
  );
};

export default Compendium;
