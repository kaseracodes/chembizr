/* eslint-disable react/prop-types */
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
  const [articlesData, setArticlesData] = useState([]);
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
        console.log("this is my publications data: ", snapshot.docs[0].data());
        console.log("length of the publications data: ", publicationsData.length, " ", snapshot.docs.length );
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
        setArticlesData(snapshot.docs);
        console.log("this is my articles data: ", snapshot.docs[0].data());
        console.log("length of the articles data: ", publicationsData.length, " ", snapshot.docs.length );
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
    <> 
        <div className={styles.container}>

        {(publicationsData.length>0 || articlesData.length>0) ? 
          <h1 className={styles.heading}>Our Insights</h1>
          : (null)} 

          {publicationsData.length>0 ? 
            (
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
                        date={item.data().date}
                        heading={item.data().heading}
                        description={item.data().description}
                        short={item.data().short}
                        blogId={item.data().id}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            ) : (null) 
          }

          {articlesData.length>0 ? 
            (
              <div className={`${styles.contentDiv} ${styles.contentDiv2}`}>
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
                        date={item.data().date}
                        heading={item.data().heading}
                        description={item.data().description}
                        short={item.data().short}
                        blogId={item.data().id}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            ) : (null) 
          }
        </div>
      
    </>
    
  );
};

export default Insights;
